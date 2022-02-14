import Head from "next/head";
import Image from "next/image";
import { Abc } from "../components/Abc";
import { Creator } from "../components/Creator";
import { FontWeight } from "../components/FontWeight";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Intro } from "../components/Intro";
import { Mockups } from "../components/Mockups";
import { Tag } from "../components/Tag";
import { Tryit } from "../components/Tryit";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.master}>
      <Head>
        <title>skik®</title>
        <meta name="description" content="you aint cool if you aint skik" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Tag />
      <Header />
      <div className={styles.container}>
        <Intro />
        <FontWeight />
        <Tryit />
        <Abc />
        <Mockups />
        <Creator />
      </div>
      <Footer />
    </div>
  );
}
