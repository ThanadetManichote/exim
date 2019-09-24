import Router from 'next/router'

/**
 * Redirect server and client
 */
export default (target = '/', res = false) => {
  if (res) {
    res.redirect(target)
    res.finished = true
    res.end()
  } else {
    Router.replace(target)
  }
}
