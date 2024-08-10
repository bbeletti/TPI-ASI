import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type ButtonType = {
  className?: string;
  labelText?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
  propHeight?: CSSProperties["height"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propBorder?: CSSProperties["border"];
  propPosition?: CSSProperties["position"];
  propTop?: CSSProperties["top"];
  propLeft?: CSSProperties["left"];
  propWidth?: CSSProperties["width"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propFlexDirection?: CSSProperties["flexDirection"];
  propPadding?: CSSProperties["padding"];
  propFlex1?: CSSProperties["flex"];
  propMinWidth?: CSSProperties["minWidth"];
  propTextDecoration?: CSSProperties["textDecoration"];
  propColor?: CSSProperties["color"];
  propDisplay?: CSSProperties["display"];
};

const Button: NextPage<ButtonType> = ({
  className = "",
  labelText = "Inicio",
  propFlex,
  propHeight,
  propBackgroundColor,
  propBorder,
  propPosition,
  propTop,
  propLeft,
  propWidth,
  propAlignSelf,
  propFlexDirection,
  propPadding,
  propFlex1,
  propMinWidth,
  propTextDecoration,
  propColor,
  propDisplay,
}) => {
  const buttonStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      height: propHeight,
      backgroundColor: propBackgroundColor,
      border: propBorder,
      position: propPosition,
      top: propTop,
      left: propLeft,
      width: propWidth,
      alignSelf: propAlignSelf,
      flexDirection: propFlexDirection,
    };
  }, [
    propFlex,
    propHeight,
    propBackgroundColor,
    propBorder,
    propPosition,
    propTop,
    propLeft,
    propWidth,
    propAlignSelf,
    propFlexDirection,
  ]);

  const stateLayer1Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
      flex: propFlex1,
    };
  }, [propPadding, propFlex1]);

  const labelTextStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
      textDecoration: propTextDecoration,
      color: propColor,
      display: propDisplay,
    };
  }, [propMinWidth, propTextDecoration, propColor, propDisplay]);

  return (
    <div
      className={`h-[31px] rounded-81xl bg-state-layers-primary-container-opacity-08 border-grays-black border-[1px] border-solid box-border overflow-hidden shrink-0 flex flex-row items-start justify-start text-center text-sm text-grays-black font-m3-label-large ${className}`}
      style={buttonStyle}
    >
      <div
        className="flex flex-row items-start justify-start py-[5px] px-[18px]"
        style={stateLayer1Style}
      >
        <div
          className="relative tracking-[0.1px] leading-[20px] font-medium inline-block min-w-[35px]"
          style={labelTextStyle}
        >
          {labelText}
        </div>
      </div>
    </div>
  );
};

export default Button;
