import HomeBanner from "@/pages/home/banner";
import OneStop from "@/pages/home/one-stop";
import Assurance from "@/pages/home/assurance";
import WhyZwilt from "@/pages/home/whyZwilt";
import Testimonial from "@/pages/home/testimonial";
import Faq from "@/pages/home/faq";
import Footer from "@/pages/home/Footer";
import Journey from "@/pages/home/journey";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <OneStop />
      <Testimonial />
      <Assurance />
      <Journey />
      <WhyZwilt />
      <Faq />
      <Footer />
    </>
  );
}
