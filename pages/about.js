import AboutLanding from '@/components/About/AboutLanding/AboutLanding';
import Intro from '@/components/Home/Intro/Intro';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Conservation Resources Hub - About</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <AboutLanding />
        <Intro />
      </main>
    </>
  );
}
