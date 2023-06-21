import { FlatList, ListRenderItemInfo, ViewProps } from "react-native";

import { CardItem } from "./components/CardItem";

const cardList = [
  {
    name: "Product 1 er er er er er er er",
    imageUrl:
      "https://raw.githubusercontent.com/DenysVedernykov/Food-App-Assets/main/products/default.png",
    price: 12,
    count: 3,
  },
  {
    name: "Product 2",
    imageUrl:
      "https://raw.githubusercontent.com/DenysVedernykov/Food-App-Assets/main/products/default.png",
    price: 34,
    count: 1,
  },
  {
    name: "Product 3",
    imageUrl:
      "https://raw.githubusercontent.com/DenysVedernykov/Food-App-Assets/main/products/default.png",
    price: 62,
    count: 2,
  },
  {
    name: "Product 4",
    imageUrl:
      "https://raw.githubusercontent.com/DenysVedernykov/Food-App-Assets/main/products/default.png",
    price: 23,
    count: 3,
  },
];

interface ICardList {
  style?: ViewProps["style"];
}

export const CardList: React.FC<ICardList> = ({ style }) => {
  const renderProduct = (productData: ListRenderItemInfo<any>) => (
    <CardItem product={productData.item} />
  );

  return (
    <FlatList
      style={style}
      data={cardList}
      renderItem={renderProduct}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(product: any) => product.id}
    />
  );
};
