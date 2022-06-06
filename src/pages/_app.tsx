import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from '../components/layout/Head';
import Pagination from '../components/general/Pagination';
import Header from '../components/layout/Header';
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head title={'AnimaVita'} />
      <Component {...pageProps} />
    </>
  )

}

export default MyApp
