import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type TextFieldType = {
  className?: string;
  supportingText?: string;
  inputText?: string;
  labelText?: string;
  showSupportingText?: boolean;

  /** Style props */
  propFlex?: CSSProperties["flex"];
  propTextDecoration?: CSSProperties["textDecoration"];
  propDisplay?: CSSProperties["display"];
  propMinWidth?: CSSProperties["minWidth"];
  propMinWidth1?: CSSProperties["minWidth"];
};

const TextField: NextPage<TextFieldType> = ({
  className = "",
  supportingText = "Supporting text",
  inputText = "Pendiente/Aprobado",
  labelText = "Ingrese estado",
  showSupportingText = false,
  propFlex,
  propTextDecoration,
  propDisplay,
  propMinWidth,
  propMinWidth1,
}) => {
  const contentStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  const inputTextStyle: CSSProperties = useMemo(() => {
    return {
      textDecoration: propTextDecoration,
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propTextDecoration, propDisplay, propMinWidth]);

  const labelText1Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div
      className={`self-stretch flex-1 rounded-t rounded-b-none flex flex-col items-start justify-start relative text-left text-base text-schemes-on-surface font-m3-label-large ${className}`}
    >
      <div className="self-stretch flex-1 rounded border-schemes-primary border-[3px] border-solid flex flex-col items-start justify-start">
        <div className="self-stretch flex-1 rounded-t rounded-b-none flex flex-row items-start justify-start py-1 pl-4 pr-0">
          <div
            className="self-stretch flex flex-col items-start justify-center pt-0 pb-3 pl-0 pr-[29px] relative"
            style={contentStyle}
          >
            <div className="flex flex-row items-center justify-start">
              <div
                className="relative tracking-[0.5px] leading-[24px]"
                style={inputTextStyle}
              >
                {inputText}
              </div>
              <img
                className="h-4 w-0 relative hidden"
                alt=""
                src="/caret.svg"
              />
            </div>
            <div className="!m-[0] absolute top-[-12px] left-[-4px] bg-schemes-surface-container-high flex flex-row items-center justify-start py-0 px-1 whitespace-nowrap text-xs text-schemes-primary">
              <div
                className="relative tracking-[0.4px] leading-[16px] inline-block min-w-[85px]"
                style={labelText1Style}
              >
                {labelText}
              </div>
            </div>
          </div>
        </div>
      </div>
      {showSupportingText && (
        <div className="w-full !m-[0] absolute right-[0px] bottom-[-20px] left-[0px] h-5 flex-row items-start justify-start pt-1 px-4 pb-0 box-border z-[1] text-xs text-schemes-on-surface-variant">
          <div className="self-stretch flex-1 relative tracking-[0.4px] leading-[16px]">
            {supportingText}
          </div>
        </div>
      )}
    </div>
  );
};

export default TextField;
