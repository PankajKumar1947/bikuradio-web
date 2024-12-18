import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Screenshots from '@/components/Screenshots'
import Dependencies from '@/components/Dependencies'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-black-900 text-white sm:px-6 md:px-12 mt-4 sm:mt-0">
      <Header />
      <Hero />
      <Features />
      <Screenshots />
      <Dependencies />
      <Footer />
    </main>
  )
}

