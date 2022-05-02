import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class AppDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
    <meta charSet="utf-8" />
    <title>Big Cheeze</title>
    <meta content="width=device-width, initial-scale=1" name="viewport" />
    <meta content="Webflow" name="generator" />
    <link href="https://assets.website-files.com/6267045bbcf1451f09d3ed15/css/big-cheeze.webflow.f067011cf.css" rel="stylesheet" type="text/css" />
    <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;700&display=swap" rel="stylesheet" />
    <link href="https://assets.website-files.com/img/favicon.ico" rel="shortcut icon" type="image/x-icon" />
    <link href="https://assets.website-files.com/img/webclip.png" rel="apple-touch-icon" />
</Head>
        <body>
          <Main />
          <NextScript />
        </body>
        


      </Html>
    )
  }
}
