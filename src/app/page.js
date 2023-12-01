'use client'
import AheadApp from "@/components/AheadApp/AheadApp"
import BestEQ from "@/components/BestEQ/BestEQ"
import EQ_IQ from "@/components/EQ_IQ/EQ_IQ"
import Features from "@/components/Features/Features"
import Footer from "@/components/Footer/Footer"
import Hero from "@/components/Hero/Hero"
import Improvement from "@/components/Improvement/Improvement"
import Navbar from "@/components/Navbar/Navbar"
import Signature from "@/components/Signature/Signature"
import Vacancies from "@/components/Vacancies/Vacancies"
import Wondered from "@/components/Wondered/Wondered"
import WorkWithUs from "@/components/WorkWithUs/WorkWithUs"

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
