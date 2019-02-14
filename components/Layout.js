import Head from "next/head";

export default ({ children }) => (
  <>
    <Head>
      <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet" />
    </Head>
    <header>
      <div className="logo" />
    </header>
      {children}
    <footer>
    </footer>
    <style global jsx>{`
      body {
        padding     : 0;
        margin      : 0;
        font-family : 'Nunito', sans-serif;
      }
    `}
    </style>
    <style jsx>{`
      header {
        background : linear-gradient(to right,#723af9,#46aafc) !important;
        margin     : 0;
        padding    : 5px 10px 0;
      }

      .logo {
        background      : url(../static/logo.png) no-repeat;
        background-size : 222px 80px;
        height          : 89px;
        margin-top      : 3px;
        width           : 222px;
      }
    `}
    </style>
  </>
)
