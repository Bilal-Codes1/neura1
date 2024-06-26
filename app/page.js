import Hero from "@/Components/Hero";
import Header from "@/Components/Header";
import Feature from "@/Components/Feature";
import Testimonials from "@/Components/Testimonials";
import Questions from "@/Components/Questions";
import Footer from "@/Components/Footer";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Hero />
      <Feature />
      <Testimonials />
      <Questions />
      <Footer />
    </main>
  );
}
