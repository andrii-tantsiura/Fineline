import { FC, useEffect, useState } from "react";
import { RefreshControl, ScrollView, TextInput, View } from "react-native";

import { DropDownList, IMenuItem } from "../../components/common";
import {
  BannersList,
  CategoriesList,
  ProductsList,
} from "../../components/sections";
import { containerStyles, typographyStyle_i19 } from "../../constants";
import { SortType } from "../../enums";
import { useAppInitData, useCategories } from "../../hooks";
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

export const HomeScreen: FC<HomeScreenProps> = () => {
  const [isDataLoaded, errorMessageDataLoad, loadData] = useAppInitData();
  const [categories] = useCategories();

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
            <TextInput
              style={styles.inputSearchQuery}
              onChangeText={setSearchQuery}
              placeholder="Search for food"
              value={searchQuery}
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
