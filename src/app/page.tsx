import Benefits from "@/components/layout/Benefits/Benefits";
import Header from "@/components/layout/Header/Header";
import Hero from "@/components/layout/Hero/Hero";
import Sales from "@/components/layout/Sales/Salex";
import Integrations from "@/components/layout/Integrations/Integrations";
import Marketing from "@/components/layout/Marketing/Marketing";
import Service from "@/components/layout/Service/Service";
import News from "@/components/layout/News/News";
import Results from "@/components/layout/Results/Results";
import Customers from "@/components/layout/Customers/Customers";
import Cta from "@/components/layout/Cta/Cta";
import Footer from "@/components/layout/Footer/Footer";


export default function Home() {
  return (
    <main>
      <div className='bg-gray-bg pb-12'>
        <Header/>
        <Hero/>
      </div>
      <Benefits/>
      <div className="mt-[120px]">
        <Sales/>
        <Marketing/>
        <Service/>
      </div>
      <Integrations/>
      <News/>
      <Results/>
      <Customers/>
      <Cta/>
      <Footer/>
      
    </main>
  );
}
