import type { NextPage } from "next";
import Button from "./button";

export type UserFormType = {
  className?: string;
};

const UserForm: NextPage<UserFormType> = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start gap-[66px] text-center text-5xl text-darkslategray font-m3-label-large mq450:gap-[33px] ${className}`}
    >
      <h2 className="m-0 w-[84px] relative text-inherit leading-[32px] font-normal font-[inherit] inline-block z-[1] mq450:text-lgi mq450:leading-[26px]">
        <p className="m-0">Usuario</p>
      </h2>
      <div className="w-[124px] flex flex-row items-start justify-start pt-0 px-0 pb-4 box-border">
        <h2 className="m-0 flex-1 relative text-inherit leading-[32px] font-normal font-[inherit] z-[1] mq450:text-lgi mq450:leading-[26px]">
          <p className="m-0">Contraseña</p>
        </h2>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0">
        <div className="flex-1 flex flex-col items-end justify-start gap-[65px] mq450:gap-8">
          <div className="h-[30px] flex flex-row items-start justify-end py-0 pl-0 pr-px box-border">
            <Button
              labelText="Siguiente"
              propFlex="unset"
              propHeight="31px"
              propBackgroundColor="#f2f2f7"
              propBorder="1px solid #777"
              propPosition="unset"
              propTop="unset"
              propLeft="unset"
              propWidth="unset"
              propAlignSelf="unset"
              propFlexDirection="row"
              propPadding="5px 9px"
              propFlex1="unset"
              propMinWidth="60px"
              propTextDecoration="unset"
              propColor="#000"
              propDisplay="inline-block"
            />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[13px]">
            <div className="self-stretch h-px relative border-dimgray border-t-[1px] border-solid box-border z-[1]" />
            <div className="self-stretch h-[30px] flex flex-row items-start justify-start py-0 pl-[63px] pr-[62px] box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
              <Button
                labelText="Reportar un problema"
                propFlex="unset"
                propHeight="31px"
                propBackgroundColor="#f2f2f7"
                propBorder="1px solid #000"
                propPosition="unset"
                propTop="unset"
                propLeft="unset"
                propWidth="unset"
                propAlignSelf="unset"
                propFlexDirection="row"
                propPadding="5px 11px"
                propFlex1="unset"
                propMinWidth="unset"
                propTextDecoration="unset"
                propColor="#000"
                propDisplay="unset"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
