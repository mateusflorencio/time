import Layout from '../components/layout'
import Relogio from '../components/relogio'

export default function Home() {
  return (
    <Layout>
      <section className='w-full h-screen bg-black'>
        <Relogio />
      </section>
    </Layout>
  )
}
