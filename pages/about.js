import Head from 'next/head'
import Image from 'next/image'
import classes from '../styles/Home.module.css'
import { Footer } from '../components/Footer'
import { Main } from '../components/Main'
import { Header } from '../components/Header'

export default function Home() {
  return (
    <div className={classes.container}>
      <Head>
        <title>About Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />
      <Main page="about" />
      <Footer />
    </div>
  )
}
