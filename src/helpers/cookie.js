import Cookies from 'js-cookie'

const storage = {
  get(key) {
    const item = (() => {
      if (window.sessionStorage) return window.sessionStorage.getItem(key)
      else return Cookies.get(key)
    })()
    try {
      return JSON.parse(item)
    } catch (e) {
      return item
    }
  },
  set(key, value) {
    const item = (() => {
      if (typeof value === 'object') return JSON.stringify(value)
      return value
    })()
    if (window.sessionStorage) window.sessionStorage.setItem(key, item)
    else Cookies.set(key, item)
  },
  remove(key) {
    if (window.sessionStorage) window.sessionStorage.removeItem(key)
    else Cookies.remove(key)
  },
}

export const getCookie = (key) => {
  return storage.get(key)
}

export const setCookie = (key, value, attributes = { expires: 1 }) => {
  storage.set(key, value, attributes)
}

export const removeCookie = (key, attributes = {}) => {
  storage.remove(key, attributes)
}
