import { FlatList, ListRenderItemInfo } from "react-native";

import styles from "./styles";
import { ICategory } from "../../../types";
import { CategoryItem } from "./components/CategoryItem";
import { useCategories } from "../../../hooks";

interface ICategoriesList {
  selectedCategoryId?: string;
  onSelect: (categoryId: string) => void;
}

export const CategoriesList: React.FC<ICategoriesList> = ({
  selectedCategoryId,
  onSelect = (categoryId: string) => {},
}) => {
  const [categories] = useCategories();

  const renderCategory = (categoryData: ListRenderItemInfo<ICategory>) => (
    <CategoryItem
      onPress={() => onSelect(categoryData.item.id)}
      category={categoryData.item}
      selectedCategoryId={selectedCategoryId}
    />
  );

  return (
    <FlatList
      horizontal
      style={styles.container}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      data={categories}
      renderItem={renderCategory}
      keyExtractor={(category: ICategory) => category.id}
    />
  );
};
