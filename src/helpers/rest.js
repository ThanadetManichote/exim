/* eslint-disable no-console */
import 'isomorphic-unfetch'
import { stringify } from 'query-string'
import { decode } from 'jsonwebtoken'
import has from 'lodash/has'
import FileSaver from 'file-saver'
import isObject from 'lodash/isObject'
import { getCookie, setCookie } from 'helpers/cookie'

/**
 * ==========
 * Example
 * ==========
  restApi({
    ...
    headers: {
      a: 'a',
      b: 'b'
    },
    method: 'POST',
    ...
  }, {
    network_error: () => {
      //TODO
    },
    condition: () => {
      //TODO
    },
    success: () => {
      //TODO
    },
    fail: () => {
      //TODO
    },
  })
 *
 * ==========
 * OR
 * ==========
 *
  restApi({
    ...
    headers: {
      a: 'a',
      b: 'b'
    },
    method: 'POST',
    ...
  }
 *
 */

export const restApi = async (options, callback = {}) => {
  let token = getCookie('credential_token')
  const currentTime = new Date()
  if (!!token) {
    const decodeToken = decode(token)
    if (currentTime.getTime() / 1000 > decodeToken?.exp || 0) token = renewToken()

    options.headers = {
      Authorization: `Bearer ${token}`,
      ...options.headers,
    }
  }

  const defaultCallback = {
    network_error: (error) => {
      if (process.env.NODE_ENV === 'development') console.log(error.message)
      return error
    },
    condition: (response) => {
      //เอาไว้เช็ค api ของเรา
      // return (
      //   has(response, 'status.code') &&
      //   (response.status.code === 200 || response.status.code === '200')
      // )

      // check api ตัวอย่าง
      return has(response, 'images')
    },
    success: (response) => response,
    fail: (response) => {
      if (process.env.NODE_ENV === 'development') {
        console.log('==== 😂 callback fail ====')
        console.log(response)
        console.log('===========================')
      }
      return response
    },
    before: () => {},
    after: (response) => response,

    ...callback,
  }

  defaultCallback.before(response)
  const response = await restAPI(options)
  if (response.error) handleError(defaultCallback, response.error)

  handleSuccess(defaultCallback, response)
  defaultCallback.after(response)
  return response
}

const handleSuccess = (callback, response) => {
  if (callback.condition(response) === true) {
    callback.success(response)
    return
  }
  callback.fail(response)
}

const handleError = (callback, error) => {
  callback.network_error(error)
}

const restAPI = async (options) => {
  try {
    if (
      (options.method === 'POST' ||
        options.method === 'PUT' ||
        options.method === 'PATCH') &&
      !!options.form === false
    )
      options.headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...options.headers,
      }

    /**
     * ==========
     * Example params convert object to url
     * http://localhost/test?fieldTestA=valueTestA&fieldTestA=valueTestB
     * ==========
     *
      restApi({
        ...
        params: {
          fieldTestA: valueTestA,
          fieldTestB: valueTestB
        }
        ...
      });
     *
     */
    if (has(options, 'params') && isObject(options.params))
      options.url = `${options.url}?${stringify(options.params)}`

    /**
     * ==========
     * Example raw json data
     * ==========
     *
      restApi({
        ...
        body: {
          fieldTestA: valueTestA,
          fieldTestB: valueTestB
        }
        ...
      })
     *
     */
    if (has(options, 'body') && isObject(options.body))
      options.body = JSON.stringify(options.body)

    /**
     * ==========
     * Example form data
     * ==========
     *
     * const datas = new FormData();
     * datas.append('fieldTestA', 'valueTestA');
     * datas.append('fieldTestB', 'valueTestB');
     *
      restApi({
        ...
        form: datas
        ...
      })
     *
     */
    if (has(options, 'form') && isObject(options.form)) options.body = options.form

    const res = await timeoutPromise(
      1000 * 60 * 60,
      fetch(options.url, {
        method: options.method,
        ...options,
      }),
    )
      .then(function(response) {
        return response
      })
      .catch(function(error) {
        return error
      })

    return await res.json()
  } catch (error) {
    return {
      error,
    }
  }
}

export const restApiDownload = async (options, fileName = 'example') => {
  try {
    let token = getCookie('credential_token')
    const currentTime = new Date()
    if (!!token) {
      const decodeToken = decode(token)
      if (currentTime.getTime() / 1000 > decodeToken?.exp || 0) token = renewToken()

      options.headers = {
        Authorization: `Bearer ${token}`,
        ...options.headers,
      }
    }
    if (
      (options.method === 'POST' ||
        options.method === 'PUT' ||
        options.method === 'PATCH') &&
      !!options.form === false
    )
      options.headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...options.headers,
      }
    if (has(options, 'params') && isObject(options.params))
      options.url = `${options.url}?${stringify(options.params)}`

    if (has(options, 'body') && isObject(options.body))
      options.body = JSON.stringify(options.body)

    if (has(options, 'form') && isObject(options.form)) options.body = options.form

    fetch(options.url, {
      method: options.method,
      ...options,
    })
      .then((response) => {
        const reader = response.body.getReader()
        return new ReadableStream({
          start(controller) {
            return pump()
            function pump() {
              return reader.read().then(({ done, value }) => {
                // When no more data needs to be consumed, close the stream
                if (done) {
                  controller.close()
                  return undefined
                }
                // Enqueue the next data chunk into our target stream
                controller.enqueue(value)
                return pump()
              })
            }
          },
        })
      })
      .then((stream) => new Response(stream))
      .then((response) => response.text())
      .then((text) => {
        //File saver popup
        FileSaver.saveAs(
          new Blob([`\ufeff${text}`], {
            encoding: 'UTF-8',
            type: 'text/csv;charset=utf-8;',
          }),
          `${fileName}.csv`,
        )
      })
    return true
  } catch (error) {
    return {
      error,
    }
  }
}

const renewToken = async () => {
  return ''
}

export const api = async (config, callback) => {
  const { data, error, message, status } = await (async () => {
    try {
      return await restApi(config, callback)
    } catch (e) {
      return { error: e }
    }
  })()

  const statusCode = Number.parseInt(status, 10)

  if (statusCode < 200 || statusCode > 299) {
    if (message === 'record not found') return { data: {} }
    if (error) {
      return {
        error: Object.assign(error, {
          statusCode,
        }),
      }
    }
    return {
      error: Object.assign(new Error(message), {
        statusCode,
        error,
      }),
    }
  }
  return { data }
}

function timeoutPromise(ms, promise) {
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      reject(new Error('promise timeout'))
    }, ms)
    promise.then(
      (res) => {
        clearTimeout(timeout)
        resolve(res)
      },
      (err) => {
        clearTimeout(timeout)
        reject(err)
      },
    )
  })
}
