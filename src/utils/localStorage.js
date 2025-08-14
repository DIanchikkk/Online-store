export const loadState = (key = 'cart') => {
    try {
      const serializedState = localStorage.getItem(key);
      if (!serializedState) return undefined;
      return JSON.parse(serializedState);
    } catch (e) {
      console.warn(`Не удалось загрузить ${key} из localStorage`, e);
      return undefined;
    }
  };
  
  export const saveState = (key = 'cart', state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem(key, serializedState);
    } catch (e) {
      console.warn(`Не удалось сохранить ${key} в localStorage`, e);
    }
  };
  