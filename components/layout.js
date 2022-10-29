import Head from 'next/head'
import { RecoilRoot } from 'recoil'

export default function Layout(props) {
  return (
    <>
      <Head>
        <meta name='description' content='seo' />
      </Head>
      <title> Hora Atual - Relogio Online </title>
      <RecoilRoot>
        <main className='min-h-screen h-screen'>{props.children}</main>
      </RecoilRoot>
    </>
  )
}
