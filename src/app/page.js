import Banner from "../components/home/Banner";
import About from "../components/home/About";
import Services from "../components/home/Services";
import FAQ from "../components/home/FAQ";
import Booking from "../components/home/Booking";
import Testimonials from "../components/home/Testimonials";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Banner />
      <Booking />
      <About />
      <Services />
      <FAQ />
      <Testimonials />
    </div>
  );
}
