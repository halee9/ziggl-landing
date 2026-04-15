import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ReviewSection from "@/components/ReviewSection";
import WhySection from "@/components/WhySection";
import BetaForm from "@/components/BetaForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Features />
        <ReviewSection />
        <WhySection />
        <BetaForm />
      </main>
      <Footer />
    </>
  );
}
