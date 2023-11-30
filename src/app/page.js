'use client'
import AheadApp from "@/components/AheadApp"
import BestEQ from "@/components/BestEQ"
import EQ_IQ from "@/components/EQ_IQ"
import Features from "@/components/Features"
import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import Improvement from "@/components/Improvement"
import Navbar from "@/components/Navbar"
import Signature from "@/components/Signature"
import Vacancies from "@/components/Vacancies"
import Wondered from "@/components/Wondered"
import WorkWithUs from "@/components/WorkWithUs"

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center">
      <Navbar/>
      <Hero/>
      <EQ_IQ/>
      <Features/>
      <AheadApp/>
      <Improvement/>
      <BestEQ/>
      <Wondered/>
      <Signature/>
      <WorkWithUs/>
      <Vacancies/>
      <Footer/>
    </main>
  )
}
