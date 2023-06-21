import { View, Image } from "react-native";

import styles from "./styles";
import { IconButton, Typography } from "../../../../common";
import {
  typographyStyle_i17,
  typographyStyle_i12,
  typographyStyle_i18,
  iconButtonStyles,
} from "../../../../../constants";
import { IC_DELETE_RED, IC_PLUS_RED } from "../../../../../assets/icons";

interface IProductItem {
  product: any;
  onPress?: (product: any) => void;
}

export const CardItem: React.FC<IProductItem> = ({
  product,
  onPress = (product: any) => {},
}) => {
  function onCartPressHandler() {
    onPress(product);
  }

  return (
    <View style={styles.wrapperContainer}>
      <Image
        style={styles.imageProduct}
        source={{
          uri: product.imageUrl,
        }}
      />

      <View style={styles.info}>
        <Typography style={typographyStyle_i17}>{product.name}</Typography>

        <View style={styles.container}>
          <View style={styles.actionsContainer}>
            <IconButton
              onPress={onCartPressHandler}
              source={IC_DELETE_RED}
              style={styles.action}
              imageStyle={iconButtonStyles.i2}
            />

            <Typography style={typographyStyle_i18}>{product.count}</Typography>

            <IconButton
              onPress={onCartPressHandler}
              source={IC_PLUS_RED}
              style={styles.action}
              imageStyle={iconButtonStyles.i2}
            />
          </View>

          <Typography style={typographyStyle_i12}>$ {product.price}</Typography>
        </View>
      </View>
    </View>
  );
};
