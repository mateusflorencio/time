import Nav from '../components/nav'
import Layout from '../components/layout'
import Relogio from '../components/relogio'

export default function Home() {
  return (
    <Layout>
      <Nav/>
      <section className='w-full h-full flex justify-center items-center'>
        <Relogio />
      </section>
    </Layout>
  )
}
