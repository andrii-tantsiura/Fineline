import { FC, useEffect, useState } from "react";
import { View } from "react-native";

import {
  typographyStyle_i1,
  typographyStyle_i17,
  typographyStyle_i6,
} from "../../../constants";
import { useCategories } from "../../../hooks";
import CategoriesService from "../../../services/CategoriesService";
import { IProduct } from "../../../types";
import { Typography } from "../../common";
import { ProductPreview } from "../ProductPreview";
import { Rating } from "../Rating";
import styles from "./styles";

interface IProductDetailsProps {
  product: IProduct;
}

export const ProductDetails: FC<IProductDetailsProps> = ({ product }) => {
  const [categories] = useCategories();
  const [categoryName, setCategoryName] = useState<string>();

  useEffect(() => {
    const categoryName = CategoriesService.getCategoryName(
      product.categoryId,
      categories
    );

    setCategoryName(categoryName);
  }, [categories]);

  return (
    <View>
      <ProductPreview
        style={styles.productPreview}
        imageUrl={product.imageUrl}
      />

      <View style={styles.descriptionContainer}>
        <View style={styles.categoryContainer}>
          <Typography style={typographyStyle_i1}>{categoryName}</Typography>
        </View>

        <Typography style={typographyStyle_i6}>{product.name}</Typography>

        <Rating style={styles.rating} value={product.rating} />

        <Typography style={styles.containsTitle}>Contains</Typography>

        {/* TODO: replace to product.ingredients */}
        <Typography style={typographyStyle_i17}>
          Avocado, Flying fish roe, Cream cheese, Onion crumbs, Nori, Cucumber,
          Rice, Unagi sauce, Eel
        </Typography>
      </View>
    </View>
  );
};
