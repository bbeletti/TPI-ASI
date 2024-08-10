import type { NextPage } from "next";
import Button from "./button";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[66px] box-border gap-12 max-w-full text-center text-5xl text-grays-black font-m3-label-large mq1150:pb-[43px] mq1150:box-border mq800:gap-6 mq800:pb-7 mq800:box-border ${className}`}
    >
      <div className="flex flex-row items-start justify-start py-0 px-[43px] box-border max-w-full mq1350:pl-[21px] mq1350:pr-[21px] mq1350:box-border">
        <div className="flex flex-row items-start justify-start gap-[54px] max-w-full mq1350:flex-wrap mq800:gap-[27px]">
          <img
            className="h-[512px] w-[267px] relative object-cover"
            loading="lazy"
            alt=""
            src="/7maparemovebgpreview-1@2x.png"
          />
          <div className="w-[306px] flex flex-col items-start justify-start pt-[25px] pb-0 pl-0 pr-[15px] box-border">
            <div className="self-stretch rounded-6xl bg-gray-300 border-gray-100 border-[1px] border-solid flex flex-col items-start justify-start pt-4 pb-[17px] pl-1.5 pr-0 gap-[125px] mq450:gap-[62px]">
              <div className="self-stretch h-[430px] relative rounded-6xl bg-gray-300 border-gray-100 border-[1px] border-solid box-border hidden" />
              <div className="self-stretch flex flex-col items-start justify-start gap-[84px] mq450:gap-[42px]">
                <a className="[text-decoration:none] self-stretch relative leading-[32px] text-[inherit] z-[1] mq450:text-lgi mq450:leading-[26px]">
                  <p className="m-0">RESERVA TU TURNO</p>
                  <p className="m-0">&nbsp;</p>
                </a>
                <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[13px] pr-[15px] text-sm">
                  <div className="flex-1 relative tracking-[0.1px] leading-[20px] font-medium z-[1]">
                    Para reservar un turno para la revisión técnica de tu
                    vehículo, hacé click en el botón y completá el formulario
                    con tus datos y los del vehículo.
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 px-[53px] mq450:pl-5 mq450:pr-5 mq450:box-border">
                <Button
                  labelText="RESERVAR TURNO"
                  propFlex="unset"
                  propHeight="unset"
                  propBackgroundColor="#0072bc"
                  propBorder="unset"
                  propPosition="unset"
                  propTop="unset"
                  propLeft="unset"
                  propWidth="unset"
                  propAlignSelf="unset"
                  propFlexDirection="row"
                  propPadding="10px 24px"
                  propFlex1="unset"
                  propMinWidth="119px"
                  propTextDecoration="unset"
                  propColor="#fff"
                  propDisplay="inline-block"
                />
              </div>
            </div>
          </div>
          <div className="w-[307px] flex flex-col items-start justify-start pt-[25px] pb-0 pl-0 pr-[18px] box-border">
            <div className="self-stretch rounded-6xl bg-gray-300 border-gray-100 border-[1px] border-solid flex flex-col items-end justify-start pt-4 px-px pb-[17px] gap-[84.5px] mq450:gap-[42px]">
              <div className="self-stretch h-[430px] relative rounded-6xl bg-gray-300 border-gray-100 border-[1px] border-solid box-border hidden" />
              <h2 className="m-0 self-stretch relative text-inherit leading-[32px] font-normal font-[inherit] z-[1] mq450:text-lgi mq450:leading-[26px]">
                <p className="m-0">CONSULTÁ CUÁNDO VENCE LA RTO</p>
              </h2>
              <div className="w-[271px] flex flex-row items-start justify-end py-0 px-2 box-border text-sm">
                <div className="flex-1 relative tracking-[0.1px] leading-[20px] font-medium z-[1]">
                  <p className="m-0">
                    Para conocer el vencimiento de la revisión técnica de tu
                    vehículo, hacé click en el botón y, posteriormente, ingresá
                    los datos de tu patente utilizando mayúscula. Por
                    ejemplo: AB123CD 
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-start justify-end py-0 px-6">
                <Button
                  labelText="CONSULTAR VENCIMIENTO"
                  propFlex="unset"
                  propHeight="unset"
                  propBackgroundColor="#0072bc"
                  propBorder="unset"
                  propPosition="unset"
                  propTop="unset"
                  propLeft="unset"
                  propWidth="unset"
                  propAlignSelf="unset"
                  propFlexDirection="row"
                  propPadding="10px 24px"
                  propFlex1="unset"
                  propMinWidth="unset"
                  propTextDecoration="unset"
                  propColor="#fff"
                  propDisplay="unset"
                />
              </div>
            </div>
          </div>
          <div className="w-[289px] flex flex-col items-start justify-start pt-[25px] px-0 pb-0 box-border">
            <div className="self-stretch rounded-6xl bg-gray-300 border-gray-100 border-[1px] border-solid flex flex-col items-start justify-start pt-12 pb-[17px] pl-3 pr-[7px] gap-[85px] mq450:gap-[42px] mq450:pt-[31px] mq450:pb-5 mq450:box-border">
              <div className="w-[289px] h-[430px] relative rounded-6xl bg-gray-300 border-gray-100 border-[1px] border-solid box-border hidden" />
              <div className="self-stretch flex flex-col items-end justify-start gap-7">
                <h2 className="m-0 self-stretch relative text-inherit leading-[32px] font-normal font-[inherit] z-[1] mq450:text-lgi mq450:leading-[26px]">
                  <p className="m-0">
                    CONSULTÁ TALLERES DE HOMOLOGACIÓN Y MODIFICACIÓN
                  </p>
                  <p className="m-0">&nbsp;</p>
                </h2>
                <div className="self-stretch flex flex-row items-start justify-end py-0 pl-[18px] pr-3.5 text-sm">
                  <div className="flex-1 relative tracking-[0.1px] leading-[20px] font-medium z-[1]">
                    Para conocer los talleres habilitados para realizar
                    modificaciones o certificaciones ingresa al siguiente link
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start py-0 pl-[33px] pr-[38px]">
                <Button
                  labelText="CONSULTAR TALLERES"
                  propFlex="unset"
                  propHeight="unset"
                  propBackgroundColor="#0072bc"
                  propBorder="unset"
                  propPosition="unset"
                  propTop="unset"
                  propLeft="unset"
                  propWidth="unset"
                  propAlignSelf="unset"
                  propFlexDirection="row"
                  propPadding="10px 24px"
                  propFlex1="unset"
                  propMinWidth="unset"
                  propTextDecoration="unset"
                  propColor="#fff"
                  propDisplay="unset"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch bg-steelblue flex flex-row items-start justify-start pt-4 px-[389px] pb-[15px] box-border max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border mq1350:pl-[194px] mq1350:pr-[194px] mq1350:box-border mq800:pl-[97px] mq800:pr-[97px] mq800:box-border">
        <div className="h-[455px] w-[1440px] relative bg-steelblue hidden max-w-full" />
        <img
          className="w-[640px] relative max-h-full object-cover max-w-full z-[1]"
          loading="lazy"
          alt=""
          src="/image-2@2x.png"
        />
      </div>
    </section>
  );
};

export default FrameComponent;
