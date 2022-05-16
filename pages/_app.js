import "../styles/globals.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from "next/head";
import Layout from "../components/layout";
function MyApp({ Component, pageProps }) {
  return (
    <div className="main">
      <Head>
        <title>Flipkart</title>
        <link rel="shortcut icon" href="../fav-icon.png" type="image/x-icon" />  
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
export default MyApp;
