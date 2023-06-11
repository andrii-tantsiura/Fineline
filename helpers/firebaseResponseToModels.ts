export default function firebaseResponseToModels<T>(data: any) {
  const items: Array<T> = [];

  for (const key in data) {
    const item: T = {
      id: key,
      ...data[key],
    };

    items.push(item);
  }

  return items;
}
