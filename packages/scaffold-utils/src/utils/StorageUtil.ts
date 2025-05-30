import { MMKV } from 'react-native-mmkv';
const storage = new MMKV();
import { StorageUtil as CoreStorageUtil } from '@reown/appkit-core-react-native';

export const StorageUtil = {
  async getItem<T>(key: string): Promise<T> {
    const item = storage.getString(key);

    return item ? JSON.parse(item) : undefined;
  },

  async setItem<T>(key: string, value: T) {
    storage.set(key, JSON.stringify(value));
  },

  async removeItem(key: string) {
    storage.delete(key);
  },

  async getConnectedConnector() {
    return CoreStorageUtil.getConnectedConnector();
  }
};
