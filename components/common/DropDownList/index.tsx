import { useState } from "react";
import { Image, StyleProp, View, ViewStyle } from "react-native";
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from "react-native-popup-menu";

import { IC_CHEVRON_DOWN_RED } from "../../../assets/icons";
import { Typography } from "../Typography";
import { ITypographyStyle } from "../Typography/types";
import styles from "./styles";

export interface IMenuItem {
  text: string;
  value?: any;
}

interface IDropDownList {
  children: IMenuItem[];
  style?: StyleProp<ViewStyle>;
  textStyle?: ITypographyStyle;
  selectedItem?: IMenuItem;
  onSelect?: (item: IMenuItem) => void;
}

export const DropDownList: React.FC<IDropDownList> = ({
  children: items,
  style,
  textStyle,
  selectedItem,
  onSelect = (item) => {},
}) => {
  selectedItem =
    items.find((item) => item.value === selectedItem?.value) ?? items[0];

  const [isOpenedMenu, setIsOpenedMenu] = useState<boolean>(false);
  const [currentSelectedItem, setCurrentSelectedItem] =
    useState<IMenuItem>(selectedItem);

  function onToggleMenuVisibilityHandler(): void {
    setIsOpenedMenu(!isOpenedMenu);
  }

  function onSelectItemHandler(item: IMenuItem): void {
    setCurrentSelectedItem(item);
    onSelect(item);
  }

  return (
    <View style={style}>
      <View
        style={styles.selectContainer}
        onTouchEnd={onToggleMenuVisibilityHandler}
      >
        <Typography style={textStyle}>{currentSelectedItem.text}</Typography>

        <Image style={styles.image} source={IC_CHEVRON_DOWN_RED} />
      </View>

      <Menu
        opened={isOpenedMenu}
        onBackdropPress={onToggleMenuVisibilityHandler}
      >
        <MenuTrigger text="" />

        <MenuOptions optionsContainerStyle={styles.optionsContainer}>
          {items.map((item) => (
            <MenuOption
              key={item.value}
              onSelect={() => {
                onToggleMenuVisibilityHandler();
                onSelectItemHandler(item);
              }}
            >
              <Typography style={[textStyle, { margin: 4 }]}>
                {item.text}
              </Typography>
            </MenuOption>
          ))}
        </MenuOptions>
      </Menu>
    </View>
  );
};
