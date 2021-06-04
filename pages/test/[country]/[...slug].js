import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

export async function getStaticPaths() {
  return {
    paths: [
      { params: { country: "us", slug: ["foo", "bar"] } },
      { params: { country: "ca", slug: ["foo", "bar"] } },
      { params: { country: "es", slug: ["foo", "bar"] } },
    ],
    fallback: false, // See the "fallback" section below
  };
}

export async function getStaticProps(context) {
  const { country } = context.params;
  // pull key from params path values and store in s3
  const content = {
    us: "united states",
    ca: "canada",
    es: "spain",
  };
  return {
    props: { data: content[country] }, // will be passed to the page component as props
  };
}

export default function Home({ data }) {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">{data}</p>
      </main>

      <Footer />
    </div>
  );
}
