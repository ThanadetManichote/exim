export const types = {
  APP_IS_MOBILE: 'APP_IS_MOBILE',
}

export const isMobileAction = (isMobile = false) => {
  return {
    type: types.APP_IS_MOBILE,
    payload: isMobile,
  }
}
