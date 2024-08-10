import type { NextPage } from "next";
import IconButton from "../components/icon-button";
import InputDatePicker from "../components/input-date-picker";
import Button from "../components/button";

const SistemaBuscar: NextPage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-row items-start justify-start gap-[68px] leading-[normal] tracking-[normal] mq450:gap-[17px] mq800:gap-[34px] mq1300:flex-wrap">
      <div className="h-[1024px] w-[89px] bg-grays-gray-6 border-grays-black border-[1px] border-solid box-border flex flex-col items-start justify-start pt-[31px] pb-[17px] pl-[21px] pr-[18px] gap-[18px] mq1100:pt-5 mq1100:pb-5 mq1100:box-border">
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
      <main className="w-[1200px] flex flex-col items-start justify-start pt-[88px] px-0 pb-0 box-border max-w-full mq800:pt-[37px] mq800:box-border mq1100:pt-[57px] mq1100:box-border">
        <section className="self-stretch flex flex-col items-start justify-start gap-[30px] max-w-full text-center text-5xl text-grays-black font-m3-label-large">
          <div className="self-stretch flex flex-col items-start justify-start gap-[60px] max-w-full mq1300:gap-[30px]">
            <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[25px] pr-[35px] box-border max-w-full">
              <div className="flex-1 flex flex-row items-end justify-start gap-[68px] max-w-full mq800:gap-[17px] mq1100:flex-wrap mq1300:gap-[34px]">
                <div className="flex-1 flex flex-row items-start justify-start gap-[35px] min-w-[349px] max-w-full mq450:min-w-full mq800:flex-wrap mq800:gap-[17px]">
                  <InputDatePicker
                    showClearButton={false}
                    headline="Dominio"
                    supportingText="Select date"
                    propFlex="1"
                    propMinWidth="162px"
                    propAlignSelf="unset"
                    propHeight="unset"
                    propHeight1="90px"
                    propFlex1="unset"
                    icon="/icon-5.svg"
                    stateLayerBorder="unset"
                    iconBackgroundColor="unset"
                    propOverflow="unset"
                    inputText="Pendiente/Aprobado"
                    labelText="Ingrese dominio"
                    supportingText1="Supporting text"
                    showSupportingText={false}
                    propFlex2="unset"
                    propTextDecoration="unset"
                    propDisplay="unset"
                    propMinWidth1="unset"
                    propMinWidth11="92px"
                    labelText1="Cancel"
                    labelText2="OK"
                    propFlex3="unset"
                    propFlex4="unset"
                    propHeight2="unset"
                    propHeight3="unset"
                    propBackgroundColor="unset"
                    propBackgroundColor1="unset"
                    propBorder="unset"
                    propBorder1="unset"
                    propPosition="unset"
                    propPosition1="unset"
                    propTop="unset"
                    propTop1="unset"
                    propLeft="unset"
                    propLeft1="unset"
                    propWidth="unset"
                    propWidth1="unset"
                    propAlignSelf1="unset"
                    propAlignSelf2="unset"
                    propFlexDirection="column"
                    propFlexDirection1="column"
                    propPadding="10px 12px"
                    propPadding1="10px 12px"
                    propFlex11="unset"
                    propFlex12="unset"
                    propMinWidth2="44px"
                    propMinWidth3="19px"
                    propTextDecoration1="unset"
                    propTextDecoration2="unset"
                    propColor="#65558f"
                    propColor1="#65558f"
                    propDisplay1="inline-block"
                    propDisplay2="inline-block"
                  />
                  <div className="flex-1 flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border min-w-[162px]">
                    <InputDatePicker
                      showClearButton={false}
                      headline="Fecha"
                      supportingText="Select date"
                      propFlex="unset"
                      propMinWidth="unset"
                      propAlignSelf="stretch"
                      propHeight="222px"
                      propHeight1="unset"
                      propFlex1="1"
                      icon="/icon-6.svg"
                      stateLayerBorder="unset"
                      iconBackgroundColor="unset"
                      propOverflow="unset"
                      inputText="mm/dd/yyyy"
                      labelText="Ingrese fecha"
                      supportingText1="Supporting text"
                      showSupportingText={false}
                      propFlex2="1"
                      propTextDecoration="none"
                      propDisplay="inline-block"
                      propMinWidth1="95px"
                      propMinWidth11="78px"
                      labelText1="Cancel"
                      labelText2="OK"
                      propFlex3="unset"
                      propFlex4="unset"
                      propHeight2="unset"
                      propHeight3="unset"
                      propBackgroundColor="unset"
                      propBackgroundColor1="unset"
                      propBorder="unset"
                      propBorder1="unset"
                      propPosition="unset"
                      propPosition1="unset"
                      propTop="unset"
                      propTop1="unset"
                      propLeft="unset"
                      propLeft1="unset"
                      propWidth="unset"
                      propWidth1="unset"
                      propAlignSelf1="unset"
                      propAlignSelf2="unset"
                      propFlexDirection="column"
                      propFlexDirection1="column"
                      propPadding="10px 12px"
                      propPadding1="10px 12px"
                      propFlex11="unset"
                      propFlex12="unset"
                      propMinWidth2="44px"
                      propMinWidth3="19px"
                      propTextDecoration1="unset"
                      propTextDecoration2="unset"
                      propColor="#65558f"
                      propColor1="#65558f"
                      propDisplay1="inline-block"
                      propDisplay2="inline-block"
                    />
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-px box-border min-w-[349px] max-w-full mq450:min-w-full">
                  <div className="self-stretch flex flex-row items-start justify-start gap-[37px] mq800:flex-wrap mq800:gap-[18px]">
                    <InputDatePicker
                      showClearButton={false}
                      headline="Operador"
                      supportingText="Select date"
                      propFlex="1"
                      propMinWidth="199px"
                      propAlignSelf="unset"
                      propHeight="unset"
                      propHeight1="90px"
                      propFlex1="unset"
                      icon="/icon-4.svg"
                      stateLayerBorder="unset"
                      iconBackgroundColor="unset"
                      propOverflow="unset"
                      inputText="Nombre"
                      labelText="Ingrese operador"
                      supportingText1="Supporting text"
                      showSupportingText={false}
                      propFlex2="1"
                      propTextDecoration="unset"
                      propDisplay="inline-block"
                      propMinWidth1="61px"
                      propMinWidth11="97px"
                      labelText1="Cancel"
                      labelText2="OK"
                      propFlex3="unset"
                      propFlex4="unset"
                      propHeight2="unset"
                      propHeight3="unset"
                      propBackgroundColor="unset"
                      propBackgroundColor1="unset"
                      propBorder="unset"
                      propBorder1="unset"
                      propPosition="unset"
                      propPosition1="unset"
                      propTop="unset"
                      propTop1="unset"
                      propLeft="unset"
                      propLeft1="unset"
                      propWidth="unset"
                      propWidth1="unset"
                      propAlignSelf1="unset"
                      propAlignSelf2="unset"
                      propFlexDirection="column"
                      propFlexDirection1="column"
                      propPadding="10px 12px"
                      propPadding1="10px 12px"
                      propFlex11="unset"
                      propFlex12="unset"
                      propMinWidth2="44px"
                      propMinWidth3="19px"
                      propTextDecoration1="unset"
                      propTextDecoration2="unset"
                      propColor="#65558f"
                      propColor1="#65558f"
                      propDisplay1="inline-block"
                      propDisplay2="inline-block"
                    />
                    <InputDatePicker
                      showClearButton={false}
                      headline="Estado"
                      supportingText="Select date"
                      icon="/icon-8.svg"
                      stateLayerBorder="unset"
                      iconBackgroundColor="unset"
                      propOverflow="unset"
                      inputText="Pendiente/Aprobado"
                      labelText="Ingrese estado"
                      supportingText1="Supporting text"
                      showSupportingText={false}
                      labelText1="Cancel"
                      labelText2="OK"
                      propFlex3="unset"
                      propFlex4="unset"
                      propHeight2="unset"
                      propHeight3="unset"
                      propBackgroundColor="unset"
                      propBackgroundColor1="unset"
                      propBorder="unset"
                      propBorder1="unset"
                      propPosition="unset"
                      propPosition1="unset"
                      propTop="unset"
                      propTop1="unset"
                      propLeft="unset"
                      propLeft1="unset"
                      propWidth="unset"
                      propWidth1="unset"
                      propAlignSelf1="unset"
                      propAlignSelf2="unset"
                      propFlexDirection="column"
                      propFlexDirection1="column"
                      propPadding="10px 12px"
                      propPadding1="10px 12px"
                      propFlex11="unset"
                      propFlex12="unset"
                      propMinWidth2="44px"
                      propMinWidth3="19px"
                      propTextDecoration1="unset"
                      propTextDecoration2="unset"
                      propColor="#65558f"
                      propColor1="#65558f"
                      propDisplay1="inline-block"
                      propDisplay2="inline-block"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch h-[550px] rounded-3xl bg-grays-gray-6 border-grays-black border-[1px] border-solid box-border flex flex-row items-start justify-start pt-0 px-[55px] pb-[443px] relative gap-[94px] max-w-full mq800:h-auto mq800:gap-[23px] mq800:pb-[187px] mq800:box-border mq1100:pb-72 mq1100:box-border mq1300:gap-[47px] mq1300:pl-[27px] mq1300:pr-[27px] mq1300:box-border">
              <div className="h-[550px] w-[1200px] relative rounded-3xl bg-grays-gray-6 border-grays-black border-[1px] border-solid box-border hidden max-w-full z-[0]" />
              <img
                className="h-px w-[1200px] absolute !m-[0] top-[75px] right-[-1px] object-contain z-[1]"
                alt=""
              />
              <img
                className="h-0.5 w-[1200px] absolute !m-[0] top-[115px] right-[-1px] object-contain z-[3]"
                alt=""
              />
              <div className="w-[713px] flex flex-row items-start justify-between max-w-[calc(100%_-_323px)] gap-5 shrink-0 mq800:flex-wrap">
                <div className="flex flex-col items-start justify-start pt-[35px] pb-0 pl-0 pr-[5px]">
                  <div className="flex flex-col items-start justify-start gap-8">
                    <div className="flex flex-row items-start justify-start py-0 px-1.5">
                      <h2 className="m-0 relative text-inherit tracking-[0.25px] leading-[20px] font-normal font-[inherit] inline-block min-w-[91px] z-[1] mq450:text-lgi mq450:leading-[16px]">
                        Dominio
                      </h2>
                    </div>
                    <div className="relative tracking-[0.25px] leading-[20px] inline-block min-w-[103px] z-[1] mq450:text-lgi mq450:leading-[16px]">
                      AF111OR
                    </div>
                  </div>
                </div>
                <img
                  className="h-[550px] w-px relative object-contain min-h-[550px] z-[2] mq800:w-full mq800:h-px"
                  loading="lazy"
                  alt=""
                />
                <div className="flex flex-col items-start justify-start pt-[35px] pb-0 pl-0 pr-5">
                  <div className="flex flex-col items-end justify-start gap-[30px]">
                    <div className="flex flex-row items-start justify-end py-0 px-[11px]">
                      <h2 className="m-0 relative text-inherit tracking-[0.25px] leading-[20px] font-normal font-[inherit] inline-block min-w-[66px] z-[1] mq450:text-lgi mq450:leading-[16px]">
                        Fecha
                      </h2>
                    </div>
                    <div className="relative tracking-[0.25px] leading-[20px] inline-block min-w-[103px] z-[1] mq450:text-lgi mq450:leading-[16px]">
                      8/8/2024
                    </div>
                  </div>
                </div>
                <div className="h-[551px] flex flex-col items-start justify-start pt-px pb-0 pl-0 pr-1.5 box-border">
                  <img
                    className="w-px flex-1 relative max-h-full object-contain z-[2]"
                    loading="lazy"
                    alt=""
                  />
                </div>
                <div className="flex flex-col items-start justify-start pt-[35px] pb-0 pl-0 pr-[19px]">
                  <div className="flex flex-col items-end justify-start gap-[30px]">
                    <h2 className="m-0 relative text-inherit tracking-[0.25px] leading-[20px] font-normal font-[inherit] inline-block min-w-[101px] z-[1] mq450:text-lgi mq450:leading-[16px]">
                      Operador
                    </h2>
                    <div className="flex flex-row items-start justify-end py-0 pl-9 pr-7 text-xl">
                      <h3 className="m-0 relative text-inherit tracking-[0.25px] leading-[20px] font-normal font-[inherit] inline-block min-w-[37px] z-[1] mq450:text-base mq450:leading-[16px]">
                        N/A
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="h-[550px] flex flex-col items-start justify-start py-0 pl-0 pr-[3px] box-border">
                  <img
                    className="w-px flex-1 relative max-h-full object-contain z-[2]"
                    loading="lazy"
                    alt=""
                  />
                </div>
                <div className="flex flex-col items-start justify-start pt-[33px] pb-0 pl-0 pr-[3px]">
                  <div className="flex flex-col items-start justify-start gap-8">
                    <div className="flex flex-row items-start justify-start py-0 px-[21px]">
                      <h2 className="m-0 relative text-inherit tracking-[0.25px] leading-[20px] font-normal font-[inherit] inline-block min-w-[76px] z-[1] mq450:text-lgi mq450:leading-[16px]">
                        Estado
                      </h2>
                    </div>
                    <h2 className="m-0 relative text-inherit tracking-[0.25px] leading-[20px] font-normal font-[inherit] inline-block min-w-[129px] z-[1] mq450:text-lgi mq450:leading-[16px]">
                      PENDIENTE
                    </h2>
                  </div>
                </div>
                <div className="h-[551px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
                  <img
                    className="w-px flex-1 relative max-h-full object-contain z-[2]"
                    loading="lazy"
                    alt=""
                  />
                </div>
              </div>
              <div className="w-[229px] flex flex-col items-start justify-start pt-[27px] px-0 pb-0 box-border shrink-0">
                <div className="self-stretch flex flex-col items-start justify-start gap-[35px]">
                  <div className="flex flex-row items-start justify-start py-0 px-[46px]">
                    <h2 className="m-0 relative text-inherit tracking-[0.25px] leading-[20px] font-normal font-[inherit] z-[1] mq450:text-lgi mq450:leading-[16px]">
                      Operaciones
                    </h2>
                  </div>
                  <div className="self-stretch h-[25px] flex flex-row items-start justify-between gap-5">
                    <Button
                      labelText="Modificar"
                      propFlex="unset"
                      propHeight="26px"
                      propBackgroundColor="#f2f2f7"
                      propBorder="1px solid #000"
                      propPosition="unset"
                      propTop="unset"
                      propLeft="unset"
                      propWidth="unset"
                      propAlignSelf="unset"
                      propFlexDirection="row"
                      propPadding="2.5px 15px"
                      propFlex1="unset"
                      propMinWidth="61px"
                      propTextDecoration="unset"
                      propColor="#000"
                      propDisplay="inline-block"
                    />
                    <Button
                      labelText="Consultar"
                      propFlex="unset"
                      propHeight="26px"
                      propBackgroundColor="#f2f2f7"
                      propBorder="1px solid #000"
                      propPosition="unset"
                      propTop="unset"
                      propLeft="unset"
                      propWidth="unset"
                      propAlignSelf="unset"
                      propFlexDirection="row"
                      propPadding="2.5px 15px"
                      propFlex1="unset"
                      propMinWidth="62px"
                      propTextDecoration="unset"
                      propColor="#000"
                      propDisplay="inline-block"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="w-[1140px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
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
          </footer>
        </section>
      </main>
    </div>
  );
};

export default SistemaBuscar;
