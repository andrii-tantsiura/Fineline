import { Image, View } from "react-native";

import { typographyStyle_i6, typographyStyle_i8 } from "../../../constants";
import { Typography } from "../Typography";
import styles from "./styles";

interface IEmptyList {
  imageSource: any;
  title: string;
  description: string;
}

export const EmptyList: React.FC<IEmptyList> = ({
  imageSource,
  title,
  description,
}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={imageSource} />

      <Typography style={typographyStyle_i6}>{title}</Typography>

      <Typography style={typographyStyle_i8}>{description}</Typography>
    </View>
  );
};
