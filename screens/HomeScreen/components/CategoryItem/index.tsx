import { View, Image } from "react-native";

import styles from "./styles";
import { ICategory } from "../../../../types";
import { Typography } from "../../../../components/common";
import { typographyStyle_i9 } from "../../../../constants/typography";

interface ICategoryItem {
  category: ICategory;
  selectedCategoryId: string;
  onPress: () => void;
}

export const CategoryItem: React.FC<ICategoryItem> = ({
  category,
  selectedCategoryId,
  onPress,
}) => {
  return (
    <View
      key={category.id}
      style={[
        styles.container,
        selectedCategoryId === category.id && styles.selectedContainer,
      ]}
    >
      <Image
        style={styles.image}
        source={{
          uri: category.imageUrl,
        }}
      />
      <Typography
        key={category.id}
        style={typographyStyle_i9}
        onPress={onPress}
      >
        {category.name}
      </Typography>
    </View>
  );
};
