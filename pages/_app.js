import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import getPageContext from '../src/getPageContext';
import fetchMock from 'fetch-mock';

fetchMock.post(`end:api/auth/login`, { hello: 'world' });


class MyApp extends App {
  constructor() {
    super();
    this.pageContext = getPageContext();
  }

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Head>
          <title>My page</title>
        </Head>
        <Component pageContext={this.pageContext} {...pageProps} />
      </Container>
    );
  }
}

export default MyApp;
