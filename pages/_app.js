import React from 'react'
import App, { Container } from 'next/app'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import withRedux from 'next-redux-wrapper'
import { detachMobile } from 'helpers/app'
import { isMobileAction } from 'redux/app/actions'
import { GlobalStyle } from 'static/styles/global-styles'
import { Layout } from 'components'
import { fromJS } from 'immutable'
import initStore from 'redux/store'

const theme = {
  colors: {
    navbarBg: '#de3f75',
    navbarLink: '#ffffff',
    navbarLinkHover: '#ffffff',
    navbarLogoLink: '#ffffff',
  },
}
class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const { req, store } = ctx
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    store.dispatch(isMobileAction(!!detachMobile(userAgent)))

    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  componentDidCatch(error, errorInfo) {
    super.componentDidCatch(error, errorInfo)
  }

  render() {
    const { Component, store, pageProps } = this.props
    return (
      <Container>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ThemeProvider>
          <GlobalStyle/>
        </Provider>
      </Container>
    )
  }
}

export default withRedux(initStore, {
  serializeState: (state) => state.toJS(),
  deserializeState: (state) => fromJS(state),
})(MyApp)


// export default MyApp

