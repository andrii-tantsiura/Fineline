import { FC, useState, useEffect } from "react";
import { View } from "react-native";

import { SortType } from "../../enums";
import { containerStyles } from "../../constants/globalStyles";
import { HomeScreenProps } from "../../navigation/HomeStackNavigator/types";
import { Typography } from "../../components/common";
import { typographyStyle_i1 } from "../../constants/typography";
import { useCategories, useFilterProducts } from "../../hooks";

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
    categories[1].id
  );

  useEffect(() => {
    sortAndFilterProducts(selectedCategoryId, searchNameProduct, sortType);
  }, [selectedCategoryId, searchNameProduct, sortType]);

  return (
    <View style={containerStyles.i1}>
      <Typography style={typographyStyle_i1}>Fine Line</Typography>

      <Typography style={typographyStyle_i1}>
        Count {categories.length}
      </Typography>

      <Typography style={typographyStyle_i1}>
        Count {filteredProducts.length}
      </Typography>

      {filteredProducts.map((product, index) => (
        <Typography key={index} style={typographyStyle_i1}>
          {product.name} {product.rating} {product.price}
        </Typography>
      ))}

      <Typography style={typographyStyle_i1}>
        {filteredProducts.length == 0 ? "not found" : ""}
      </Typography>
    </View>
  );
};
