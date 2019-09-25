import { restApi } from 'helpers/rest'
const REACT_APP_IMAGE_API = 'http://www.splashbase.co' //ENV

export const apiGetImages = async (callback = {}) => {
  // const aaa = await restApi(
  //   {
  //     url: `${REACT_APP_IMAGE_API}/api/v1/images/latest`,
  //     method: 'GET',
  //   },
  //   callback,
  // )
  // console.log('aaa', aaa)
  try {
    return await restApi(
      {
        url: `${REACT_APP_IMAGE_API}/api/v1/images/latest`,
        method: 'GET',
      },
      callback,
    )
  } catch (error) {
    return { error }
  }
}
