import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import IconButton from "./icon-button";
import TextField from "./text-field";
import Button from "./button";

export type InputDatePickerType = {
  className?: string;
  showClearButton?: boolean;
  headline?: string;
  supportingText?: string;
  icon?: string;
  stateLayerBorder?: string;
  iconBackgroundColor?: string;
  propOverflow?: string;
  inputText?: string;
  labelText?: string;
  supportingText1?: string;
  showSupportingText?: boolean;
  propFlex2?: string;
  propTextDecoration?: string;
  propDisplay?: string;
  propMinWidth1?: string;
  propMinWidth11?: string;
  labelText1?: string;
  labelText2?: string;
  propFlex3?: string;
  propFlex4?: string;
  propHeight2?: string;
  propHeight3?: string;
  propBackgroundColor?: string;
  propBackgroundColor1?: string;
  propBorder?: string;
  propBorder1?: string;
  propPosition?: string;
  propPosition1?: string;
  propTop?: string;
  propTop1?: string;
  propLeft?: string;
  propLeft1?: string;
  propWidth?: string;
  propWidth1?: string;
  propAlignSelf1?: string;
  propAlignSelf2?: string;
  propFlexDirection?: string;
  propFlexDirection1?: string;
  propPadding?: string;
  propPadding1?: string;
  propFlex11?: string;
  propFlex12?: string;
  propMinWidth2?: string;
  propMinWidth3?: string;
  propTextDecoration1?: string;
  propTextDecoration2?: string;
  propColor?: string;
  propColor1?: string;
  propDisplay1?: string;
  propDisplay2?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
  propMinWidth?: CSSProperties["minWidth"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propHeight?: CSSProperties["height"];
  propHeight1?: CSSProperties["height"];
  propFlex1?: CSSProperties["flex"];
};

const InputDatePicker: NextPage<InputDatePickerType> = ({
  className = "",
  showClearButton = false,
  headline = "Estado",
  supportingText = "Select date",
  propFlex,
  propMinWidth,
  propAlignSelf,
  propHeight,
  propHeight1,
  propFlex1,
  icon,
  stateLayerBorder,
  iconBackgroundColor,
  propOverflow,
  inputText,
  labelText,
  supportingText1,
  showSupportingText,
  propFlex2,
  propTextDecoration,
  propDisplay,
  propMinWidth1,
  propMinWidth11,
  labelText1,
  labelText2,
  propFlex3,
  propFlex4,
  propHeight2,
  propHeight3,
  propBackgroundColor,
  propBackgroundColor1,
  propBorder,
  propBorder1,
  propPosition,
  propPosition1,
  propTop,
  propTop1,
  propLeft,
  propLeft1,
  propWidth,
  propWidth1,
  propAlignSelf1,
  propAlignSelf2,
  propFlexDirection,
  propFlexDirection1,
  propPadding,
  propPadding1,
  propFlex11,
  propFlex12,
  propMinWidth2,
  propMinWidth3,
  propTextDecoration1,
  propTextDecoration2,
  propColor,
  propColor1,
  propDisplay1,
  propDisplay2,
}) => {
  const inputDatePickerStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
      alignSelf: propAlignSelf,
      height: propHeight,
    };
  }, [propFlex, propMinWidth, propAlignSelf, propHeight]);

  const dateStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight1,
      flex: propFlex1,
    };
  }, [propHeight1, propFlex1]);

  return (
    <div
      className={`flex-1 rounded-9xl bg-schemes-surface-container-high overflow-hidden flex flex-col items-center justify-start min-w-[199px] text-left text-sm text-schemes-on-surface-variant font-m3-label-large ${className}`}
      style={inputDatePickerStyle}
    >
      <div className="self-stretch border-schemes-outline-variant border-b-[1px] border-solid flex flex-col items-start justify-start pt-4 pb-1.5 pl-6 pr-3 gap-9 mq450:gap-[18px]">
        <div className="w-[72px] relative tracking-[0.1px] leading-[20px] font-medium hidden">
          {supportingText}
        </div>
        <div className="self-stretch flex flex-row items-center justify-start gap-2 text-13xl text-schemes-on-surface">
          <a className="[text-decoration:none] h-12 flex-1 relative leading-[40px] text-[inherit] flex items-center mq450:text-lgi mq450:leading-[24px] mq800:text-7xl mq800:leading-[32px]">
            {headline}
          </a>
          <IconButton
            stateLayerBorder={stateLayerBorder}
            iconBackgroundColor={iconBackgroundColor}
            icon={icon}
            propOverflow={propOverflow}
          />
        </div>
      </div>
      <div
        className="self-stretch h-[90px] flex flex-col items-center justify-start pt-[18px] px-6 pb-4 box-border text-base text-schemes-on-surface"
        style={dateStyle}
      >
        <TextField
          supportingText={supportingText1}
          inputText={inputText}
          labelText={labelText}
          showSupportingText={showSupportingText}
          propFlex={propFlex2}
          propTextDecoration={propTextDecoration}
          propDisplay={propDisplay}
          propMinWidth={propMinWidth1}
          propMinWidth1={propMinWidth11}
        />
      </div>
      <div className="self-stretch flex flex-row items-start justify-center pt-2 px-3 pb-3 text-center text-schemes-primary">
        {showClearButton && (
          <div className="self-stretch rounded-81xl overflow-hidden flex-col items-center justify-center z-[1]">
            <div className="w-[59px] flex-1 flex flex-row items-center justify-center py-2.5 px-3 box-border">
              <div className="self-stretch flex-1 relative tracking-[0.1px] leading-[20px] font-medium flex items-center justify-center">
                Clear
              </div>
            </div>
          </div>
        )}
        <div className="flex-1 flex flex-row items-end justify-end py-0 pl-[107px] pr-0 gap-2">
          <Button
            labelText={labelText1}
            propFlex={propFlex3}
            propHeight={propHeight2}
            propBackgroundColor={propBackgroundColor}
            propBorder={propBorder}
            propPosition={propPosition}
            propTop={propTop}
            propLeft={propLeft}
            propWidth={propWidth}
            propAlignSelf={propAlignSelf1}
            propFlexDirection={propFlexDirection}
            propPadding={propPadding}
            propFlex1={propFlex11}
            propMinWidth={propMinWidth2}
            propTextDecoration={propTextDecoration1}
            propColor={propColor}
            propDisplay={propDisplay1}
          />
          <Button
            labelText={labelText2}
            propFlex={propFlex4}
            propHeight={propHeight3}
            propBackgroundColor={propBackgroundColor1}
            propBorder={propBorder1}
            propPosition={propPosition1}
            propTop={propTop1}
            propLeft={propLeft1}
            propWidth={propWidth1}
            propAlignSelf={propAlignSelf2}
            propFlexDirection={propFlexDirection1}
            propPadding={propPadding1}
            propFlex1={propFlex12}
            propMinWidth={propMinWidth3}
            propTextDecoration={propTextDecoration2}
            propColor={propColor1}
            propDisplay={propDisplay2}
          />
        </div>
      </div>
    </div>
  );
};

export default InputDatePicker;
