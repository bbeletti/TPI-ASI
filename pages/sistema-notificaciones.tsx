import type { NextPage } from "next";
import IconButton from "../components/icon-button";
import Button from "../components/button";

const SistemaNotificaciones: NextPage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-row items-start justify-start gap-[75px] leading-[normal] tracking-[normal] mq450:gap-[19px] mq800:gap-[37px] mq1300:flex-wrap">
      <div className="h-[1024px] w-[89px] bg-grays-gray-6 border-grays-black border-[1px] border-solid box-border flex flex-col items-start justify-start pt-[31px] pb-[17px] pl-[21px] pr-[18px] gap-[18px] mq1125:pt-5 mq1125:pb-5 mq1125:box-border">
        <div className="w-[89px] h-[1024px] relative bg-grays-gray-6 border-grays-black border-[1px] border-solid box-border hidden" />
        <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[325px] mq450:pb-[211px] mq450:box-border">
          <IconButton
            stateLayerBorder="1px solid #79747e"
            iconBackgroundColor="unset"
            icon="/icon.svg"
            propOverflow="unset"
          />
        </div>
        <IconButton
          stateLayerBorder="1px solid #79747e"
          iconBackgroundColor="rgba(73, 69, 79, 0.12)"
          icon="/icon-1.svg"
          propOverflow="unset"
        />
        <div className="flex-1 flex flex-col items-start justify-start gap-[18px]">
          <IconButton
            stateLayerBorder="1px solid #79747e"
            iconBackgroundColor="unset"
            icon="/icon-2.svg"
            propOverflow="unset"
          />
          <IconButton
            stateLayerBorder="1px solid #79747e"
            iconBackgroundColor="unset"
            icon="/icon-3.svg"
            propOverflow="hidden"
          />
        </div>
        <IconButton
          stateLayerBorder="1px solid #79747e"
          iconBackgroundColor="unset"
          icon="/icon-4.svg"
          propOverflow="unset"
        />
      </div>
      <main className="w-[1200px] flex flex-col items-start justify-start pt-[117px] px-0 pb-0 box-border max-w-full mq450:pt-[49px] mq450:box-border mq1125:pt-[76px] mq1125:box-border">
        <section className="self-stretch flex flex-col items-start justify-start gap-[30px] max-w-full text-center text-5xl text-grays-black font-m3-label-large">
          <div className="self-stretch rounded-3xl bg-grays-gray-6 border-grays-black border-[1px] border-solid box-border flex flex-col items-start justify-start pt-[23px] px-0 pb-[642px] relative gap-[17px] max-w-full mq800:pt-5 mq800:pb-[417px] mq800:box-border">
            <div className="self-stretch h-[753px] relative rounded-3xl bg-grays-gray-6 border-grays-black border-[1px] border-solid box-border hidden z-[0]" />
            <img
              className="w-px h-full absolute !m-[0] top-[0px] right-[167px] bottom-[0px] max-h-full object-contain z-[2]"
              loading="lazy"
              alt=""
            />
            <div className="self-stretch flex flex-row items-start justify-start py-0 pl-11 pr-[46px] box-border max-w-full mq1300:pl-[22px] mq1300:pr-[23px] mq1300:box-border">
              <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5 mq450:flex-wrap">
                <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                  <a className="[text-decoration:none] relative tracking-[0.25px] leading-[20px] text-[inherit] z-[1] mq450:text-lgi mq450:leading-[16px]">
                    Notificación
                  </a>
                </div>
                <a className="[text-decoration:none] relative tracking-[0.25px] leading-[20px] text-[inherit] inline-block min-w-[66px] z-[1] mq450:text-lgi mq450:leading-[16px]">
                  Fecha
                </a>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-end justify-start gap-2.5 max-w-full">
              <img
                className="self-stretch relative max-w-full overflow-hidden max-h-full object-contain mt-[-1px] z-[1]"
                alt=""
              />
              <div className="w-[1184px] flex flex-row items-start justify-end py-0 px-7 box-border max-w-full">
                <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5 mq1125:flex-wrap">
                  <div className="relative tracking-[0.25px] leading-[20px] inline-block max-w-full z-[1] mq450:text-lgi mq450:leading-[16px]">
                    El usuario francisco Suárez ha sido habilitado como
                    “Técnico”
                  </div>
                  <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                    <div className="relative tracking-[0.25px] leading-[20px] inline-block min-w-[103px] z-[1] mq450:text-lgi mq450:leading-[16px]">
                      8/8/2024
                    </div>
                  </div>
                </div>
              </div>
              <img
                className="self-stretch relative max-w-full overflow-hidden max-h-full object-contain mt-[-1px] z-[3]"
                alt=""
              />
            </div>
          </div>
          <div className="w-[1140px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
            <div className="h-[30px] w-[126px] flex flex-row items-start justify-start gap-[21px]">
              <Button
                labelText={`<`}
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
                propPadding="5px 10px"
                propFlex1="unset"
                propMinWidth="8px"
                propTextDecoration="unset"
                propColor="#000"
                propDisplay="inline-block"
              />
              <Button
                labelText="1"
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
                propPadding="5px 9px"
                propFlex1="1"
                propMinWidth="9px"
                propTextDecoration="unset"
                propColor="#000"
                propDisplay="inline-block"
              />
              <Button
                labelText={`>`}
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
                propPadding="5px 10px"
                propFlex1="unset"
                propMinWidth="8px"
                propTextDecoration="unset"
                propColor="#000"
                propDisplay="inline-block"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SistemaNotificaciones;
