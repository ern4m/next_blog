import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import Layout, { siteTitle } from "../components/layout";

const MyComponent = () => {
  <Image
    src="/images/profile.jpg"
    height={144}
    width={144}
    alt="Profile pic"
  />;
};

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <p>Alowwww</p>
        <p>
          (Testando nextjsssss {""}
          <Link href="/posts/first-post">first post</Link>)
        </p>
      </section>
    </Layout>
  );
}
