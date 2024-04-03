
const useLocalStorage = () => {
    const removeItem = (key) => {
        localStorage.removeItem(key);
    };
    const getItem = (key) => {
        return JSON.parse(localStorage.getItem(key));
    };
    const setItem = (key, val) => {
        localStorage.setItem(key, JSON.stringify(val));
    };
    
    return [getItem, removeItem, setItem]
}

export default useLocalStorage
