import { MMKV } from 'react-native-mmkv';
export const storage = new MMKV();

import { AppKitFrameConstants } from './AppKitFrameConstants';

export const AppKitFrameStorage = {
  set(key: string, value: string) {
    storage.set(`${AppKitFrameConstants.STORAGE_KEY}${key}`, JSON.stringify(value));
  },

  async get(key: string) {
    const item = storage.getString(`${AppKitFrameConstants.STORAGE_KEY}${key}`);

    return item ? JSON.parse(item) : undefined;
  },

  delete(key: string) {
    storage.delete(`${AppKitFrameConstants.STORAGE_KEY}${key}`);
  }
};
