import { View, Image } from "react-native";

import styles from "./styles";
import { ICategory } from "../../../../../types";
import { Typography } from "../../../../common";
import { typographyStyle_i9 } from "../../../../../constants";

interface ICategoryItem {
  category: ICategory;
  selectedCategoryId?: string;
  onPress: () => void;
}

export const CategoryItem: React.FC<ICategoryItem> = ({
  category,
  selectedCategoryId,
  onPress,
}) => {
  const stylesView = [
    styles.container,
    selectedCategoryId === category.id && styles.selectedContainer,
  ];

  return (
    <View style={stylesView} onTouchStart={onPress}>
      <Image
        style={styles.image}
        source={{
          uri: category.imageUrl,
        }}
      />

      <Typography style={typographyStyle_i9}>{category.name}</Typography>
    </View>
  );
};
