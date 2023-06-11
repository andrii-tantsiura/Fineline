import { FC } from "react";
import { Button, View } from "react-native";

import { containerStyles } from "../../constants/globalStyles";
import { HomeScreenProps } from "../../navigation/HomeStackNavigator/types";

export const HomeScreen: FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <View style={containerStyles.i1}>
      <Button
        title="Open Delivery Details"
        onPress={() => {
          navigation.navigate("DeliveryDetails");
        }}
      />
    </View>
  );
};
