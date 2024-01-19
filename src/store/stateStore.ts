import { create } from 'zustand';

interface StateStore {
  isMobMenuVisible: boolean;
  toggleMobMenuVisibility: () => void;
  isMobCatalogVisible: boolean;
  toggleMobCatalogVisibility: () => void;
  isCatalogVisible: boolean;
  toggleCatalogVisibility: () => void;
}

const useStateStore = create<StateStore>(set => {
  return {
    isMobMenuVisible: false,
    isMobCatalogVisible: false,
    isCatalogVisible: false,
    toggleMobMenuVisibility: () => {
      set(state => ({ isMobMenuVisible: !state.isMobMenuVisible }));
    },
    toggleMobCatalogVisibility: () => {
      set(state => ({ isMobCatalogVisible: !state.isMobCatalogVisible }));
    },
    toggleCatalogVisibility: () => {
      set(state => ({ isCatalogVisible: !state.isCatalogVisible }));
    },
  };
});

export default useStateStore;
