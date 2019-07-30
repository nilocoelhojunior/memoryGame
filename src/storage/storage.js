import { AsyncStorage } from "react-native";

const STORE_KEY = "@MEMORY_GAME";

const id = () => Math.floor(Math.random() * Math.floor(1000000));

const set = async (player, actions) => {
  const data = { player, actions };
  try {
    await AsyncStorage.setItem(`${STORE_KEY}:${id()}`, JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
};

const getAll = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    const data = await AsyncStorage.multiGet(keys);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default {
  set,
  getAll
};
