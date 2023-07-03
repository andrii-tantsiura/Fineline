import { useEffect } from "react";
import { FlatList, ListRenderItemInfo } from "react-native";

import { PIC_NO_SEARCH_RESULT } from "../../../assets/icons";
import { SortType } from "../../../enums";
import { useFilterProducts } from "../../../hooks";
import { IProduct } from "../../../types";
import { EmptyList } from "../../common";
import { ProductItem } from "./components/ProductItem";
import styles from "./styles";

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
