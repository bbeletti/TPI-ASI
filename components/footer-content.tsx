import type { NextPage } from "next";
import Button from "./button";

export type FooterContentType = {
  className?: string;
};

const FooterContent: NextPage<FooterContentType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-end py-0 pl-[21px] pr-[39px] box-border max-w-full text-center text-sm text-grays-black font-m3-label-large ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[38px] max-w-full mq800:gap-[19px]">
        <div className="self-stretch flex flex-row items-start justify-center py-0 pl-5 pr-[25px] box-border max-w-full">
          <img
            className="w-[1109px] relative max-h-full object-cover max-w-full"
            alt=""
            src="/image-3@2x.png"
          />
        </div>
        <div className="self-stretch flex flex-row items-end justify-between gap-5 mq800:flex-wrap mq800:justify-center">
          <div className="h-[30px] flex flex-col items-start justify-start py-0 pl-0 pr-1 box-border">
            <Button labelText="Inicio" />
          </div>
          <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[3px] text-xs">
            <div className="rounded-13xl bg-gainsboro border-grays-black border-[1px] border-solid flex flex-row items-start justify-start pt-[3px] pb-0.5 pl-2 pr-[7px] z-[1]">
              <div className="relative tracking-[0.4px] leading-[16px]">
                Copyright © - algunos derechos reservados
              </div>
              <div className="h-[25px] w-[264px] relative rounded-13xl bg-gainsboro border-grays-black border-[1px] border-solid box-border hidden" />
            </div>
          </div>
          <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[27px]">
            <img
              className="w-[85px] h-[85px] relative object-cover"
              loading="lazy"
              alt=""
              src="/image-1@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterContent;
