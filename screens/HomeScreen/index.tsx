import { FC, useState, useEffect } from "react";
import { View, TextInput, FlatList, ListRenderItemInfo } from "react-native";

import styles from "./styles";
import { SortType } from "../../enums";
import { HomeScreenProps } from "../../navigation/HomeStackNavigator/types";
import { Typography } from "../../components/common";
import { DropDown, IMenuItem } from "../../components/common/DropDown";
import { typographyStyle_i1 } from "../../constants/typography";
import { useCategories, useFilterProducts } from "../../hooks";
import { ICategory, IProduct } from "../../types";
import COLORS from "../../constants/colors";

export const HomeScreen: FC<HomeScreenProps> = ({ navigation }) => {
  const [
    categories,
    isCategoriesLoaded,
    errorMessageForCategories,
    loadProductsCategories,
  ] = useCategories();

  const [filteredProducts, sortAndFilterProducts] = useFilterProducts();

  const [searchNameProduct, setSearchNameProduct] = useState<string>("");
  const [sortType, setSortType] = useState<SortType>(SortType.RATING);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>(
    categories[0].id
  );

  function onSelectSortType(item: IMenuItem) {
    setSortType(item.value);
  }

  useEffect(() => {
    sortAndFilterProducts(selectedCategoryId, searchNameProduct, sortType);
  }, [selectedCategoryId, searchNameProduct, sortType]);

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.inputSearchNameProduct}
          onChangeText={setSearchNameProduct}
          value={searchNameProduct}
        />
        <DropDown
          style={styles.sortSelector}
          textStyle={typographyStyle_i1}
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
        style={{
          maxHeight: 45,
        }}
        data={categories}
        renderItem={(category: ListRenderItemInfo<ICategory>) => (
          <Typography
            key={category.item.id}
            style={[
              typographyStyle_i1,
              {
                padding: 12,
                backgroundColor: "silver",
                height: 45,
              },
              selectedCategoryId === category.item.id && {
                backgroundColor: "red",
                color: "neutral_0",
              },
            ]}
            onPress={() => setSelectedCategoryId(category.item.id)}
          >
            {category.item.name}
          </Typography>
        )}
        keyExtractor={(product: ICategory) => product.id}
      />

      <FlatList
        data={filteredProducts}
        renderItem={(product: ListRenderItemInfo<IProduct>) => (
          <Typography key={product.item.id} style={typographyStyle_i1}>
            {product.item.name} {product.item.rating} {product.item.price}
          </Typography>
        )}
        keyExtractor={(product: IProduct) => product.id}
      />
    </View>
  );
};
