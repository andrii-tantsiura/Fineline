import { FC, useState, useEffect, useCallback } from "react";
import { View, TextInput, ScrollView, RefreshControl } from "react-native";

import styles from "./styles";
import { SortType } from "../../enums";
import { IProduct } from "../../types";
import { HomeScreenProps } from "../../navigation/HomeStackNavigator/types";
import { DropDownList, IMenuItem } from "../../components/common";
import { typographyStyle_i19, containerStyles } from "../../constants";
import { useAppInitData, useCategories } from "../../hooks";
import AlertService from "../../services/AlertService";
import {
  CategoriesList,
  ProductsList,
  BannersList,
} from "../../components/sections";

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

  function onSelectSortTypeHandler(item: IMenuItem) {
    setSortType(item.value);
  }

  function showAlertIfNeeded() {
    if (!isDataLoaded && errorMessageDataLoad !== "") {
      AlertService.warning(errorMessageDataLoad);
    }
  }

  const onRefreshDataHandler = useCallback(async () => {
    setIsRefreshingData(true);

    await loadData();

    setIsRefreshingData(false);

    setManualDataRefreshCounter(
      (currentManualDataRefreshCounter) => currentManualDataRefreshCounter + 1
    );
  }, [manualDataRefreshCounter, isDataLoaded, errorMessageDataLoad]);

  useEffect(() => {
    showAlertIfNeeded();
  }, [manualDataRefreshCounter]);

  return (
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

        {/* TODO: onPressProduct */}
        <ProductsList
          selectedCategoryId={selectedCategoryId}
          searchQuery={searchQuery}
          sortType={sortType}
          onPressProduct={(product: IProduct) => {}}
        />
      </View>
    </ScrollView>
  );
};
