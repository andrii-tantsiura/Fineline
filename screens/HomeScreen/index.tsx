import { FC, useEffect, useLayoutEffect, useState } from "react";
import { RefreshControl, ScrollView, View } from "react-native";

import { IC_SEARCH_LIGHT_GRAY, IC_SHOPPING_CART_RED } from "../../assets/icons";
import {
  DropDownList,
  IMenuItem,
  IconButton,
  IconTextInput,
} from "../../components/common";
import {
  BannersList,
  CategoriesList,
  ProductsList,
} from "../../components/sections";
import {
  COLORS,
  containerStyles,
  iconButtonStyles,
  typographyStyle_i19,
} from "../../constants";
import { SortType } from "../../enums";
import { useAppInitData, useCart, useCategories } from "../../hooks";
import { CartItemSelectorModal } from "../../modals/";
import { HomeScreenProps } from "../../navigation/HomeStackNavigator/types";
import AlertService from "../../services/AlertService";
import { IProduct } from "../../types";
import styles from "./styles";

const sortTypes: IMenuItem[] = [
  {
    text: "By rating",
    value: SortType.RATING,
  },
  {
    text: "Cheaper",
    value: SortType.CHEAPER,
  },
  {
    text: "Expensive",
    value: SortType.EXPENSIVE,
  },
];

type Props = HomeScreenProps<"Homepage">;

export const HomeScreen: FC<Props> = ({ navigation }) => {
  const {
    isDataLoaded,
    errorMessage: errorMessageDataLoad,
    loadData,
  } = useAppInitData();
  const { categories } = useCategories();
  const { productsInCart } = useCart();

  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortType, setSortType] = useState<SortType>(SortType.RATING);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>(
    categories[0].id
  );

  const [isRefreshingData, setIsRefreshingData] = useState<boolean>(false);
  const [manualDataRefreshCounter, setManualDataRefreshCounter] =
    useState<number>(0);

  const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null);

  function onSelectSortTypeHandler(item: IMenuItem) {
    setSortType(item.value);
  }

  function showAlertIfNeeded() {
    if (!isDataLoaded && errorMessageDataLoad !== "") {
      AlertService.warning(errorMessageDataLoad);
    }
  }

  async function onRefreshDataHandler() {
    setIsRefreshingData(true);

    await loadData();

    setIsRefreshingData(false);

    setManualDataRefreshCounter(
      (currentManualDataRefreshCounter) => currentManualDataRefreshCounter + 1
    );
  }

  const openCartItemSelectorHandler = (product: IProduct) => {
    setSelectedProduct(product);
  };

  const cartItemsSelectorClosedHandler = () => {
    setSelectedProduct(null);
  };

  useLayoutEffect(() => {
    const isDisabled = productsInCart.length === 0;

    function onPressHandler() {
      if (!isDisabled) {
        navigation.navigate("Cart");
      }
    }

    navigation.setOptions({
      headerRight: () => (
        <IconButton
          source={IC_SHOPPING_CART_RED}
          disabled={isDisabled}
          style={{
            backgroundColor: COLORS.neutral_10,
            padding: 8,
            marginRight: 18,
            borderRadius: 8,
          }}
          imageStyle={iconButtonStyles.i2}
          onPress={onPressHandler}
        />
      ),
    });
  }, [productsInCart]);

  useEffect(() => {
    showAlertIfNeeded();
  }, [manualDataRefreshCounter]);

  return (
    <>
      {selectedProduct && (
        <CartItemSelectorModal
          product={selectedProduct}
          onClosed={cartItemsSelectorClosedHandler}
        />
      )}

      <ScrollView
        style={containerStyles.i2}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshingData}
            onRefresh={onRefreshDataHandler}
          />
        }
      >
        <View>
          <BannersList />

          <View style={styles.searchContainer}>
            <IconTextInput
              style={styles.inputSearchQuery}
              typographyStyle={typographyStyle_i19}
              imageSource={IC_SEARCH_LIGHT_GRAY}
              placeholder="Search for food"
              value={searchQuery}
              onValueChanged={setSearchQuery}
            />

            <DropDownList
              style={styles.sortSelector}
              textStyle={typographyStyle_i19}
              onSelect={onSelectSortTypeHandler}
            >
              {sortTypes}
            </DropDownList>
          </View>

          <CategoriesList
            selectedCategoryId={selectedCategoryId}
            onSelect={setSelectedCategoryId}
          />

          <ProductsList
            selectedCategoryId={selectedCategoryId}
            searchQuery={searchQuery}
            sortType={sortType}
            onPressProduct={openCartItemSelectorHandler}
          />
        </View>
      </ScrollView>
    </>
  );
};
