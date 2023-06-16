import { FC, useState, useEffect, useCallback } from "react";
import {
  View,
  TextInput,
  FlatList,
  ListRenderItemInfo,
  ScrollView,
  RefreshControl,
} from "react-native";

import styles from "./styles";
import { PIC_NO_SEARCH_RESULT } from "../../assets/icons";
import { SortType } from "../../enums";
import { ICategory, IProduct } from "../../types";
import { CategoryItem } from "./components/CategoryItem";
import { HomeScreenProps } from "../../navigation/HomeStackNavigator/types";
import { EmptyList, DropDownList, IMenuItem } from "../../components/common";
import { typographyStyle_i19, containerStyles } from "../../constants";
import { ProductItem } from "./components/ProductItem";
import { useCategories, useFilterProducts } from "../../hooks";
import AlertService from "../../services/AlertService";

const sortTypes: IMenuItem[] = [
  {
    text: "By rating",
    value: SortType.RATING,
  },
  {
    text: "Cheaper",
    value: SortType.CHEAPER,
  },
  {
    text: "Expensive",
    value: SortType.EXPENSIVE,
  },
];

export const HomeScreen: FC<HomeScreenProps> = ({ navigation }) => {
  const [
    categories,
    isCategoriesLoaded,
    errorMessageForCategories,
    loadProductsCategories,
  ] = useCategories();

  const [
    filteredProducts,
    isProductsLoaded,
    errorMessageForProducts,
    sortAndFilterProducts,
    loadProducts,
  ] = useFilterProducts();

  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortType, setSortType] = useState<SortType>(SortType.RATING);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>(
    categories[0].id
  );

  const [isRefreshingData, setIsRefreshingData] = useState<boolean>(false);
  const [manualDataRefreshCounter, setManualDataRefreshCounter] =
    useState<number>(0);

  function onSelectSortTypeHandler(item: IMenuItem) {
    setSortType(item.value);
  }

  function showAlertIfNeeded() {
    const isDataLoaded = isCategoriesLoaded && isProductsLoaded;
    const errorMessage = isCategoriesLoaded
      ? errorMessageForCategories
      : errorMessageForProducts;

    if (!isDataLoaded && errorMessage !== "") {
      AlertService.warning(errorMessage);
    }
  }

  const onRefreshDataHandler = useCallback(async () => {
    setIsRefreshingData(true);

    await loadProductsCategories();
    await loadProducts();

    setIsRefreshingData(false);

    setManualDataRefreshCounter(
      (currentManualDataRefreshCounter) => currentManualDataRefreshCounter + 1
    );
  }, [
    manualDataRefreshCounter,
    isCategoriesLoaded,
    isProductsLoaded,
    errorMessageForCategories,
    errorMessageForProducts,
  ]);

  useEffect(() => {
    showAlertIfNeeded();
  }, [manualDataRefreshCounter]);

  useEffect(() => {
    sortAndFilterProducts(selectedCategoryId, searchQuery, sortType);
  }, [selectedCategoryId, searchQuery, sortType]);

  return (
    <ScrollView
      style={containerStyles.i2}
      refreshControl={
        <RefreshControl
          refreshing={isRefreshingData}
          onRefresh={onRefreshDataHandler}
        />
      }
    >
      <View>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.inputSearchQuery}
            onChangeText={setSearchQuery}
            placeholder="Search for food"
            value={searchQuery}
          />

          <DropDownList
            style={styles.sortSelector}
            textStyle={typographyStyle_i19}
            onSelect={onSelectSortTypeHandler}
          >
            {sortTypes}
          </DropDownList>
        </View>

        <FlatList
          horizontal={true}
          style={styles.categoriesList}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          data={categories}
          renderItem={(category: ListRenderItemInfo<ICategory>) => (
            <CategoryItem
              onPress={() => setSelectedCategoryId(category.item.id)}
              category={category.item}
              selectedCategoryId={selectedCategoryId}
            />
          )}
          keyExtractor={(product: ICategory) => product.id}
        />

        <FlatList
          scrollEnabled={false}
          style={styles.productsList}
          ListEmptyComponent={
            <EmptyList
              imageSource={PIC_NO_SEARCH_RESULT}
              title="Nothing Found"
              description="Try to change the request"
            />
          }
          data={filteredProducts}
          renderItem={(product: ListRenderItemInfo<IProduct>) => (
            <ProductItem
              product={product.item}
              onPress={() => {
                navigation.navigate("DeliveryDetails");
              }}
            />
          )}
          keyExtractor={(product: IProduct) => product.id}
        />
      </View>
    </ScrollView>
  );
};
