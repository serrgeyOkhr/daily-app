export default function useLocalStorage() {
  const getItem = (key: string) => {
    const item = localStorage.getItem(key);
    if (item !== null) {
      return JSON.parse(item);
    }
  };

  const setItem = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  return {
    getItem,
    setItem,
  };
}
