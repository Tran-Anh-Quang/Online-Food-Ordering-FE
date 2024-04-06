import {useState, useEffect} from "react"

const useLocalStorage = (key, initialValue = '') => {
  // Get the stored value from localStorage
  const storedValue = localStorage.getItem(key);
  // Use the stored value if available, otherwise use the initial value
  const initial = storedValue ? JSON.parse(storedValue) : initialValue;

  // Create state to hold the current value
  const [value, setValue] = useState(initial);

  // Update localStorage whenever the state changes
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage