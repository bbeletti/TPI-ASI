import type { NextPage } from "next";
import Button from "./button";

export type HeroContentType = {
  className?: string;
};

const HeroContent: NextPage<HeroContentType> = ({ className = "" }) => {
  return (
    <header
      className={`self-stretch h-[95px] flex flex-row items-start justify-end py-0 pl-[15px] pr-[37px] box-border max-w-full ${className}`}
    >
      <div className="self-stretch flex-1 flex flex-row items-start justify-between gap-5 max-w-full">
        <div className="self-stretch w-[220px] flex flex-col items-start justify-start">
          <img
            className="w-[147px] flex-1 relative rounded-30xl max-h-full object-cover"
            loading="lazy"
            alt=""
            src="/itvremovebgpreview-11@2x.png"
          />
        </div>
        <div className="w-[500px] flex flex-col items-start justify-start pt-7 px-0 pb-0 box-border max-w-full mq1150:w-0">
          <div className="self-stretch h-[30px] flex flex-row items-start justify-start gap-[34px] mq1150:hidden mq800:gap-[17px]">
            <Button
              labelText="Turnos"
              propFlex="unset"
              propHeight="31px"
              propBackgroundColor="rgba(234, 221, 255, 0.08)"
              propBorder="1px solid #000"
              propPosition="unset"
              propTop="unset"
              propLeft="unset"
              propWidth="unset"
              propAlignSelf="unset"
              propFlexDirection="row"
              propPadding="5px 13px"
              propFlex1="unset"
              propMinWidth="45px"
              propTextDecoration="none"
              propColor="#000"
              propDisplay="inline-block"
            />
            <Button
              labelText="Vencimientos"
              propFlex="1"
              propHeight="31px"
              propBackgroundColor="rgba(234, 221, 255, 0.08)"
              propBorder="1px solid #000"
              propPosition="unset"
              propTop="unset"
              propLeft="unset"
              propWidth="unset"
              propAlignSelf="unset"
              propFlexDirection="row"
              propPadding="5px 18px"
              propFlex1="unset"
              propMinWidth="87px"
              propTextDecoration="unset"
              propColor="#000"
              propDisplay="inline-block"
            />
            <Button
              labelText="Sobre nosotros"
              propFlex="1"
              propHeight="31px"
              propBackgroundColor="rgba(234, 221, 255, 0.08)"
              propBorder="1px solid #000"
              propPosition="unset"
              propTop="unset"
              propLeft="unset"
              propWidth="unset"
              propAlignSelf="unset"
              propFlexDirection="row"
              propPadding="5px 14px"
              propFlex1="unset"
              propMinWidth="97px"
              propTextDecoration="unset"
              propColor="#000"
              propDisplay="inline-block"
            />
            <Button
              labelText="Contacto"
              propFlex="unset"
              propHeight="31px"
              propBackgroundColor="rgba(234, 221, 255, 0.08)"
              propBorder="1px solid #000"
              propPosition="unset"
              propTop="unset"
              propLeft="unset"
              propWidth="unset"
              propAlignSelf="unset"
              propFlexDirection="row"
              propPadding="5px 10px"
              propFlex1="unset"
              propMinWidth="58px"
              propTextDecoration="none"
              propColor="#000"
              propDisplay="inline-block"
            />
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-[23px] px-0 pb-0">
          <Button
            labelText="SISTEMA"
            propFlex="unset"
            propHeight="unset"
            propBackgroundColor="#ff9500"
            propBorder="unset"
            propPosition="unset"
            propTop="unset"
            propLeft="unset"
            propWidth="unset"
            propAlignSelf="unset"
            propFlexDirection="row"
            propPadding="10px 24px"
            propFlex1="unset"
            propMinWidth="60px"
            propTextDecoration="unset"
            propColor="#000"
            propDisplay="inline-block"
          />
        </div>
      </div>
    </header>
  );
};

export default HeroContent;
