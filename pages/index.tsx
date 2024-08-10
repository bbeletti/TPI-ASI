import type { NextPage } from "next";
import IconButton from "../components/icon-button";
import UserForm from "../components/user-form";

const Login: NextPage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-row items-start justify-between pt-[228px] pb-[259px] pl-[249px] pr-[190px] box-border leading-[normal] tracking-[normal] gap-5 mq450:pl-5 mq450:pr-5 mq450:box-border mq900:flex-wrap mq900:pl-[124px] mq900:pr-[95px] mq900:box-border">
      <IconButton icon="/icon.svg" />
      <form className="m-0 w-[362px] flex flex-col items-end justify-start gap-[134px] max-w-full mq450:gap-[67px]">
        <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
          <h1 className="m-0 flex-1 relative text-26xl leading-[52px] font-normal font-m3-label-large text-darkslategray text-center inline-block max-w-full z-[1] mq450:text-[27px] mq450:leading-[31px] mq900:text-[36px] mq900:leading-[42px]">
            iniciar sesión
          </h1>
          <div className="h-[649px] w-[1061px] absolute !m-[0] bottom-[-556px] left-[-682px]">
            <img
              className="absolute top-[0px] left-[0px] rounded-[77px] w-full h-full object-cover"
              alt=""
              src="/image-5@2x.png"
            />
            <img
              className="absolute top-[211px] left-[179px] w-[335px] h-[227px] object-cover z-[1]"
              loading="lazy"
              alt=""
              src="/itvremovebgpreview-1@2x.png"
            />
            <div className="absolute top-[259px] left-[719px] rounded-8xs bg-grays-gray-6 border-gray-200 border-[1px] border-solid box-border w-72 h-[42px] z-[1]" />
            <div className="absolute top-[357px] left-[719px] rounded-8xs bg-grays-gray-6 border-gray-200 border-[1px] border-solid box-border w-72 h-[42px] z-[1]" />
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-end py-0 pl-[37px] pr-9">
          <UserForm />
        </div>
      </form>
    </div>
  );
};

export default Login;
