import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";
import { View, StyleProp, ViewStyle } from "react-native";
import { useState } from "react";

import { Typography } from "../Typography";
import { TypographyStyle } from "../Typography/types";

export interface IMenuItem {
  text: string;
  value?: any;
}

interface IDropDown {
  children: IMenuItem[];
  style?: StyleProp<ViewStyle>;
  textStyle?: TypographyStyle;
  selectedItem?: IMenuItem;
  onSelect?: (item: IMenuItem) => void;
}

export const DropDown: React.FC<IDropDown> = ({
  children,
  style,
  textStyle,
  selectedItem,
  onSelect = (item) => {},
}) => {
  const items = children;

  if (selectedItem) {
    selectedItem = items.find((item) => item.value === selectedItem?.value);
  }

  if (!selectedItem) {
    selectedItem = items[0];
  }

  const [isOpenedMenu, setIsOpenedMenu] = useState<boolean>(false);
  const [currentSelectedItem, setCurrentSelectedItem] =
    useState<IMenuItem>(selectedItem);

  function onPress(): void {
    setIsOpenedMenu(!isOpenedMenu);
  }

  function onSelectedItem(item: IMenuItem): void {
    setCurrentSelectedItem(item);
    onSelect(item);
  }

  return (
    <View style={style} onTouchEnd={onPress}>
      <Typography style={textStyle}>{currentSelectedItem.text}</Typography>
      <Menu opened={isOpenedMenu} onBackdropPress={onPress}>
        <MenuTrigger text="" />
        <MenuOptions>
          {items.map((item) => (
            <MenuOption
              key={item.value}
              onSelect={() => {
                onPress();
                onSelectedItem(item);
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
