import * as SecureStore from "expo-secure-store";

export const saveItem = async (key: string, value: string) => {
  await SecureStore.setItemAsync(key, value);
};

export const getItem = async (key: string) => {
  const value = (await SecureStore.getItemAsync(key)) || null;
  return value;
};
