import { useState } from 'react'

export function useLocalStorage (key, initialvalue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item !== null ? JSON.parse(item) : initialvalue
    } catch (error) {
      return initialvalue
    }
  })

  const setLocalStorage = value => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
      setStoredValue(value)
    } catch (error) {
      console.log(error)
    }
  }

  return [storedValue, setLocalStorage]
}
