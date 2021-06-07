import Head from 'next/head'
import Image from 'next/image'
import classes from '../styles/Home.module.css'
import { Footer } from '../components/Footer'
import { Main } from '../components/Main'

export default function Home() {
  return (
    <div className={classes.container}>
      <Head>
        <title>Index page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main page="index" />

      <Footer />
    </div>
  );
}
