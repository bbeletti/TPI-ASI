import type { NextPage } from "next";
import IconButton from "../components/icon-button";
import Button from "../components/button";

const Sistema: NextPage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-row items-start justify-start gap-[76px] leading-[normal] tracking-[normal] mq450:gap-[19px] mq800:gap-[38px] mq1300:flex-wrap">
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
          iconBackgroundColor="unset"
          icon="/icon-1.svg"
          propOverflow="unset"
        />
        <div className="flex-1 flex flex-col items-start justify-start gap-[18px]">
          <IconButton
            stateLayerBorder="1px solid #79747e"
            iconBackgroundColor="rgba(73, 69, 79, 0.12)"
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
      <main className="w-[1200px] flex flex-col items-start justify-start pt-[121px] px-0 pb-0 box-border max-w-full mq800:pt-[51px] mq800:box-border mq1125:pt-[79px] mq1125:box-border">
        <section className="self-stretch flex flex-col items-start justify-start gap-[29px] max-w-full text-center text-5xl text-grays-black font-m3-label-large">
          <div className="self-stretch h-[800px] relative rounded-3xl bg-grays-gray-6 border-grays-black border-[1px] border-solid box-border">
            <div className="absolute top-[0px] left-[0px] rounded-3xl bg-grays-gray-6 border-grays-black border-[1px] border-solid box-border w-full h-full hidden" />
            <img
              className="absolute top-[60px] left-[0px] w-[1200px] h-px object-contain z-[1]"
              alt=""
            />
            <img
              className="absolute top-[0px] left-[193px] w-0.5 h-[800px] object-contain z-[2]"
              loading="lazy"
              alt=""
            />
            <img
              className="absolute top-[0px] left-[365px] w-0.5 h-[800px] object-contain z-[2]"
              loading="lazy"
              alt=""
            />
            <img
              className="absolute top-[0px] left-[554px] w-0.5 h-[800px] object-contain z-[2]"
              loading="lazy"
              alt=""
            />
            <img
              className="absolute top-[0px] left-[753px] w-0.5 h-[800px] object-contain z-[2]"
              loading="lazy"
              alt=""
            />
            <a className="[text-decoration:none] absolute top-[21px] left-[53px] tracking-[0.25px] leading-[20px] text-[inherit] inline-block min-w-[91px] z-[1] mq450:text-lgi mq450:leading-[16px]">
              Dominio
            </a>
            <a className="[text-decoration:none] absolute top-[21px] left-[244px] tracking-[0.25px] leading-[20px] text-[inherit] inline-block min-w-[66px] z-[1] mq450:text-lgi mq450:leading-[16px]">
              Fecha
            </a>
            <a className="[text-decoration:none] absolute top-[21px] left-[410px] tracking-[0.25px] leading-[20px] text-[inherit] inline-block min-w-[101px] z-[1] mq450:text-lgi mq450:leading-[16px]">
              Operador
            </a>
            <a className="[text-decoration:none] absolute top-[19px] left-[617px] tracking-[0.25px] leading-[20px] text-[inherit] inline-block min-w-[76px] z-[1] mq450:text-lgi mq450:leading-[16px]">
              Estado
            </a>
            <a className="[text-decoration:none] absolute top-[21px] left-[931px] tracking-[0.25px] leading-[20px] text-[inherit] z-[1] mq450:text-lgi mq450:leading-[16px]">
              Operaciones
            </a>
            <img
              className="absolute top-[100px] left-[0px] w-[1200px] h-0.5 object-contain z-[3]"
              alt=""
            />
            <img
              className="absolute top-[141px] left-[0px] w-[1200px] h-0.5 object-contain z-[3]"
              alt=""
            />
            <img
              className="absolute top-[181px] left-[0px] w-[1200px] h-0.5 object-contain z-[3]"
              alt=""
            />
            <img
              className="absolute top-[222px] left-[0px] w-[1200px] h-0.5 object-contain z-[3]"
              alt=""
            />
            <div className="absolute top-[72px] left-[42px] tracking-[0.25px] leading-[20px] inline-block min-w-[103px] z-[1] mq450:text-lgi mq450:leading-[16px]">
              AF111OR
            </div>
            <div className="absolute top-[112px] left-[42px] tracking-[0.25px] leading-[20px] inline-block min-w-[103px] z-[1] mq450:text-lgi mq450:leading-[16px]">
              AE111BC
            </div>
            <div className="absolute top-[193px] left-[49px] tracking-[0.25px] leading-[20px] inline-block min-w-[89px] z-[1] mq450:text-lgi mq450:leading-[16px]">
              OAK394
            </div>
            <div className="absolute top-[153px] left-[42px] tracking-[0.25px] leading-[20px] inline-block min-w-[102px] z-[1] mq450:text-lgi mq450:leading-[16px]">
              AB111FC
            </div>
            <div className="absolute top-[70px] left-[225px] tracking-[0.25px] leading-[20px] inline-block min-w-[103px] z-[1] mq450:text-lgi mq450:leading-[16px]">
              8/8/2024
            </div>
            <div className="absolute top-[110px] left-[225px] tracking-[0.25px] leading-[20px] inline-block min-w-[103px] z-[1] mq450:text-lgi mq450:leading-[16px]">
              9/8/2024
            </div>
            <div className="absolute top-[151px] left-[225px] tracking-[0.25px] leading-[20px] inline-block min-w-[103px] z-[1] mq450:text-lgi mq450:leading-[16px]">
              5/8/2024
            </div>
            <div className="absolute top-[193px] left-[225px] tracking-[0.25px] leading-[20px] inline-block min-w-[103px] z-[1] mq450:text-lgi mq450:leading-[16px]">
              3/8/2024
            </div>
            <div className="absolute top-[70px] left-[441px] text-xl tracking-[0.25px] leading-[20px] inline-block min-w-[37px] z-[1] mq450:text-base mq450:leading-[16px]">
              N/A
            </div>
            <div className="absolute top-[110px] left-[441px] text-xl tracking-[0.25px] leading-[20px] inline-block min-w-[37px] z-[1] mq450:text-base mq450:leading-[16px]">
              N/A
            </div>
            <div className="absolute top-[153px] left-[393px] text-xl tracking-[0.25px] leading-[20px] z-[1] mq450:text-base mq450:leading-[16px]">
              ROMAN NIETO
            </div>
            <div className="absolute top-[195px] left-[382px] text-xl tracking-[0.25px] leading-[20px] z-[1] mq450:text-base mq450:leading-[16px]">
              PABLO MASCHIO
            </div>
            <div className="absolute top-[70px] left-[591px] tracking-[0.25px] leading-[20px] inline-block min-w-[129px] z-[1] mq450:text-lgi mq450:leading-[16px]">
              PENDIENTE
            </div>
            <div className="absolute top-[112px] left-[591px] tracking-[0.25px] leading-[20px] inline-block min-w-[129px] z-[1] mq450:text-lgi mq450:leading-[16px]">
              PENDIENTE
            </div>
            <div className="absolute top-[153px] left-[591px] tracking-[0.25px] leading-[20px] inline-block min-w-[127px] z-[1] mq450:text-lgi mq450:leading-[16px]">
              APROBADO
            </div>
            <div className="absolute top-[193px] left-[583px] tracking-[0.25px] leading-[20px] z-[1] mq450:text-lgi mq450:leading-[16px]">
              RECHAZADO
            </div>
            <Button
              labelText="Modificar"
              propFlex="unset"
              propHeight="26px"
              propBackgroundColor="#f2f2f7"
              propBorder="1px solid #000"
              propPosition="absolute"
              propTop="67px"
              propLeft="885px"
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
              labelText="Modificar"
              propFlex="unset"
              propHeight="26px"
              propBackgroundColor="#f2f2f7"
              propBorder="1px solid #000"
              propPosition="absolute"
              propTop="110px"
              propLeft="885px"
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
              propPosition="absolute"
              propTop="67px"
              propLeft="1022px"
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
            <Button
              labelText="Consultar"
              propFlex="unset"
              propHeight="26px"
              propBackgroundColor="#f2f2f7"
              propBorder="1px solid #000"
              propPosition="absolute"
              propTop="110px"
              propLeft="1022px"
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
            <Button
              labelText="Consultar"
              propFlex="unset"
              propHeight="26px"
              propBackgroundColor="#f2f2f7"
              propBorder="1px solid #000"
              propPosition="absolute"
              propTop="150px"
              propLeft="954px"
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
            <Button
              labelText="Consultar"
              propFlex="unset"
              propHeight="26px"
              propBackgroundColor="#f2f2f7"
              propBorder="1px solid #000"
              propPosition="absolute"
              propTop="190px"
              propLeft="954px"
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
          <div className="w-[1111px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
            <div className="h-[30px] w-[257px] flex flex-row items-start justify-start gap-[13px]">
              <div className="h-[30px] flex-[0.8529] flex flex-col items-start justify-start py-0 pl-0 pr-[7px] box-border">
                <Button
                  labelText={`<`}
                  propFlex="unset"
                  propHeight="31px"
                  propBackgroundColor="rgba(234, 221, 255, 0.08)"
                  propBorder="1px solid #000"
                  propPosition="unset"
                  propTop="unset"
                  propLeft="unset"
                  propWidth="unset"
                  propAlignSelf="stretch"
                  propFlexDirection="row"
                  propPadding="5px 10px"
                  propFlex1="unset"
                  propMinWidth="8px"
                  propTextDecoration="unset"
                  propColor="#000"
                  propDisplay="inline-block"
                />
              </div>
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
                labelText="2"
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
              <div className="h-[30px] flex-[0.8235] relative">
                <Button
                  labelText="3"
                  propFlex="unset"
                  propHeight="31px"
                  propBackgroundColor="rgba(234, 221, 255, 0.08)"
                  propBorder="1px solid #000"
                  propPosition="absolute"
                  propTop="0px"
                  propLeft="0px"
                  propWidth="29px"
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
                  labelText="3"
                  propFlex="unset"
                  propHeight="31px"
                  propBackgroundColor="rgba(234, 221, 255, 0.08)"
                  propBorder="1px solid #000"
                  propPosition="absolute"
                  propTop="0px"
                  propLeft="0px"
                  propWidth="29px"
                  propAlignSelf="unset"
                  propFlexDirection="row"
                  propPadding="5px 9px"
                  propFlex1="1"
                  propMinWidth="9px"
                  propTextDecoration="unset"
                  propColor="#000"
                  propDisplay="inline-block"
                />
              </div>
              <div className="h-[30px] flex-[0.8529] flex flex-col items-start justify-start py-0 pl-0 pr-[7px] box-border">
                <Button
                  labelText={`>`}
                  propFlex="unset"
                  propHeight="31px"
                  propBackgroundColor="rgba(234, 221, 255, 0.08)"
                  propBorder="1px solid #000"
                  propPosition="unset"
                  propTop="unset"
                  propLeft="unset"
                  propWidth="unset"
                  propAlignSelf="stretch"
                  propFlexDirection="row"
                  propPadding="5px 10px"
                  propFlex1="unset"
                  propMinWidth="8px"
                  propTextDecoration="unset"
                  propColor="#000"
                  propDisplay="inline-block"
                />
              </div>
              <Button
                labelText="33"
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
                propPadding="5px"
                propFlex1="1"
                propMinWidth="17px"
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

export default Sistema;
