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
import { SortType } from "../../enums";
import { ICategory, IProduct } from "../../types";
import { CategoryItem } from "./components/CategoryItem";
import { HomeScreenProps } from "../../navigation/HomeStackNavigator/types";
import { EmptyList, DropDown, IMenuItem } from "../../components/common";
import { typographyStyle_i19 } from "../../constants/typography";
import { ProductItem } from "./components/ProductItem";
import { useCategories, useFilterProducts } from "../../hooks";
import AlertService from "../../services/AlertService";

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

  const [searchNameProduct, setSearchNameProduct] = useState<string>("");
  const [sortType, setSortType] = useState<SortType>(SortType.RATING);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>(
    categories[0].id
  );

  const [refreshingData, setRefreshingData] = useState<boolean>(false);

  function onSelectSortType(item: IMenuItem) {
    setSortType(item.value);
  }

  function alertIfNeeded() {
    const isDataLoaded = isCategoriesLoaded && isProductsLoaded;
    const errorMessage = isCategoriesLoaded
      ? errorMessageForCategories
      : errorMessageForProducts;

    if (!isDataLoaded && errorMessage !== "") {
      AlertService.warning(errorMessage);
    }
  }

  const onRefreshData = useCallback(async () => {
    setRefreshingData(true);

    await loadProductsCategories();
    await loadProducts();

    setRefreshingData(false);

    alertIfNeeded();
  }, [
    isCategoriesLoaded,
    isProductsLoaded,
    errorMessageForCategories,
    errorMessageForProducts,
  ]);

  useEffect(() => {
    alertIfNeeded();
  }, [
    isCategoriesLoaded,
    isProductsLoaded,
    errorMessageForCategories,
    errorMessageForProducts,
  ]);

  useEffect(() => {
    sortAndFilterProducts(selectedCategoryId, searchNameProduct, sortType);
  }, [selectedCategoryId, searchNameProduct, sortType]);

  return (
    <ScrollView
      style={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshingData} onRefresh={onRefreshData} />
      }
    >
      <View>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.inputSearchNameProduct}
            onChangeText={setSearchNameProduct}
            placeholder="Search for food"
            value={searchNameProduct}
          />
          <DropDown
            style={styles.sortSelector}
            textStyle={typographyStyle_i19}
            onSelect={onSelectSortType}
          >
            {[
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
            ]}
          </DropDown>
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
          ListEmptyComponent={<EmptyList />}
          data={filteredProducts}
          renderItem={(product: ListRenderItemInfo<IProduct>) => (
            <ProductItem product={product.item} onPress={() => {}} />
          )}
          keyExtractor={(product: IProduct) => product.id}
        />
      </View>
    </ScrollView>
  );
};
