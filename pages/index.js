import Nav from '../components/nav'
import Layout from '../components/feat/layout'
import Clock from '../components/clock'

export default function Home() {
  return (
    <Layout>
      <Nav/>
      <section className='w-full h-full flex justify-center items-center bg-white  dark:bg-black'>
        <Clock />
      </section>
    </Layout>
  )
}
