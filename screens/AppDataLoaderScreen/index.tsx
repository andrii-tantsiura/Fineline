import { FC, useState } from "react";

import { AppInitDataComponent } from "./components/AppInitDataComponent";
import { EmptyView, LoaderView } from "../../components/sections";
import { HomeScreenProps } from "../../navigation/HomeStackNavigator/types";

export const AppDataLoaderScreen: FC<HomeScreenProps> = ({ navigation }) => {
  const [errorMessageDataLoad, setErrorMessageDataLoad] = useState<string>("");

  function onInitData(isDataLoaded: boolean, errorMessage: string): void {
    setErrorMessageDataLoad(errorMessage);

    if (isDataLoaded) {
      navigation.replace("Homepage");
    }
  }

  return (
    <>
      <AppInitDataComponent onInitData={onInitData} />
      {errorMessageDataLoad ? (
        <EmptyView>{errorMessageDataLoad}</EmptyView>
      ) : (
        <LoaderView />
      )}
    </>
  );
};
