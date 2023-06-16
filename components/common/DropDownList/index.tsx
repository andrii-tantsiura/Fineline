import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";
import { View, Image, StyleProp, ViewStyle } from "react-native";
import { useState } from "react";

import styles from "./styles";
import { IC_CHEVRON_DOWN_RED } from "../../../assets/icons";
import { Typography } from "../Typography";
import { TypographyStyle } from "../Typography/types";

export interface IMenuItem {
  text: string;
  value?: any;
}

interface IDropDownList {
  children: IMenuItem[];
  style?: StyleProp<ViewStyle>;
  textStyle?: TypographyStyle;
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
        <MenuOptions>
          {items.map((item) => (
            <MenuOption
              key={item.value}
              onSelect={() => {
                onToggleMenuVisibilityHandler();
                onSelectItemHandler(item);
              }}
              text={item.text}
              value={item.value}
            />
          ))}
        </MenuOptions>
      </Menu>
    </View>
  );
};
