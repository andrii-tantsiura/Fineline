import { useEffect } from "react";
import { FlatList, ListRenderItemInfo } from "react-native";

import styles from "./styles";
import { SortType } from "../../../enums";
import { IProduct } from "../../../types";
import { ProductItem } from "./components/ProductItem";
import { useFilterProducts } from "../../../hooks";
import { EmptyList } from "../../common";
import { PIC_NO_SEARCH_RESULT } from "../../../assets/icons";

interface IProductsList {
  selectedCategoryId: string;
  searchQuery?: string;
  sortType?: SortType;
  onPressProduct?: (product: IProduct) => void;
}

export const ProductsList: React.FC<IProductsList> = ({
  selectedCategoryId,
  searchQuery = "",
  sortType = SortType.RATING,
  onPressProduct = (product: IProduct) => {},
}) => {
  const { filteredProducts, sortAndFilter: sortAndFilterProducts } =
    useFilterProducts();

  useEffect(() => {
    sortAndFilterProducts(selectedCategoryId, searchQuery, sortType);
  }, [selectedCategoryId, searchQuery, sortType]);

  const renderProduct = (productData: ListRenderItemInfo<IProduct>) => (
    <ProductItem
      product={productData.item}
      onPress={() => onPressProduct(productData.item)}
    />
  );

  return (
    <FlatList
      scrollEnabled={false}
      style={styles.container}
      ListEmptyComponent={
        <EmptyList
          imageSource={PIC_NO_SEARCH_RESULT}
          title="Nothing Found"
          description="Try to change the request"
        />
      }
      data={filteredProducts}
      renderItem={renderProduct}
      keyExtractor={(product: IProduct) => product.id}
    />
  );
};
