import Head from "next/head";

export default function Layout( props ) {
  return (
    <>
      <Head>
        <title>Montador de Móveis</title>
        <meta
          name="description"
          content="seo"
        />
      </Head>
      <main>{props.children}</main>
    </>
  );
}