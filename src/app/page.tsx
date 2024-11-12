import HeroSection from "@/app/components/Static/HeroSection"
import Block1 from "@/app/components/Dynamic/Home/Block1"
import About from "@/app/components/Static/Home/About"
import Block2 from "@/app/components/Dynamic/Home/Block2"
import Newsletter from "@/app/components/Static/Home/Newsletter"
import Block3 from "@/app/components/Dynamic/Home/Block3"
import Block4 from "@/app/components/Dynamic/Home/Block4"
import Block5 from "@/app/components/Dynamic/Home/Block5"
import Slider from "./components/Static/Home/Slider"

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <Block1 /> */}
      {/* <About /> */}
      <Block2 />
      <Newsletter />
      <Block3 />
      <Slider />
      <Block4 />
      <Block5 />
    </>
  );
}
