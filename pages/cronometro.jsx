import Nav from '../components/nav'
import Layout from '../components/feat/layout'
import Chronometer from '../components/chronometer'

export default function Cronometro() {
  return (
    <Layout>
      <Nav/>
      <section className='w-full h-full flex justify-center items-center bg-white  dark:bg-black'>
        <Chronometer />
      </section>
    </Layout>
  )
}
