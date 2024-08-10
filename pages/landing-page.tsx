import type { NextPage } from "next";
import HeroContent from "../components/hero-content";
import FrameComponent from "../components/frame-component";
import FooterContent from "../components/footer-content";

const LandingPage: NextPage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-end justify-start pt-[11px] px-0 pb-[21px] box-border gap-[101px] leading-[normal] tracking-[normal] text-center text-53xl text-white font-title-hero mq450:gap-[25px] mq800:gap-[50px]">
      <img
        className="w-full h-[456px] absolute !m-[0] top-[111px] right-[0px] left-[0px] max-w-full overflow-hidden shrink-0 object-cover"
        alt=""
        src="/dsc-6377-paisaje-jujuy-1@2x.png"
      />
      <HeroContent />
      <div className="w-[741px] flex flex-row items-start justify-end pt-0 px-[66px] pb-[38px] box-border max-w-full mq800:pl-[33px] mq800:pr-[33px] mq800:box-border">
        <h1 className="m-0 flex-1 relative text-inherit tracking-[-0.03em] leading-[120%] font-bold font-[inherit] inline-block max-w-full z-[1] mq450:text-[43px] mq450:leading-[52px] mq800:text-[58px] mq800:leading-[69px]">
          Cuidamos tu vehículo, cuidamos tu vida
        </h1>
      </div>
      <FrameComponent />
      <div className="self-stretch flex flex-row items-start justify-center pt-0 pb-[27px] pl-5 pr-[21px] box-border max-w-full">
        <img
          className="w-[865px] relative rounded-[18px] max-h-full object-cover max-w-full"
          loading="lazy"
          alt=""
          src="/image-4@2x.png"
        />
      </div>
      <FooterContent />
    </div>
  );
};

export default LandingPage;
