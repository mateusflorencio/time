import Head from 'next/head'

export default function Layout(props) {
  return (
    <>
      <Head>
        <meta name='description' content='seo' />
      </Head>
      <title> Hora Atual - Relogio Online </title>
      <main>{props.children}</main>
    </>
  )
}
