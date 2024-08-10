import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type IconButtonType = {
  className?: string;
  icon?: string;

  /** Style props */
  stateLayerBorder?: CSSProperties["border"];
  iconBackgroundColor?: CSSProperties["backgroundColor"];
  propOverflow?: CSSProperties["overflow"];
};

const IconButton: NextPage<IconButtonType> = ({
  className = "",
  stateLayerBorder,
  iconBackgroundColor,
  icon,
  propOverflow,
}) => {
  const containerStyle: CSSProperties = useMemo(() => {
    return {
      border: stateLayerBorder,
    };
  }, [stateLayerBorder]);

  const stateLayerStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: iconBackgroundColor,
    };
  }, [iconBackgroundColor]);

  const iconStyle: CSSProperties = useMemo(() => {
    return {
      overflow: propOverflow,
    };
  }, [propOverflow]);

  return (
    <div
      className={`flex flex-col items-center justify-center p-1 z-[1] ${className}`}
    >
      <div
        className="w-10 h-10 rounded-81xl border-schemes-outline border-[1px] border-solid box-border overflow-hidden shrink-0 flex flex-row items-center justify-center"
        style={containerStyle}
      >
        <div
          className="flex flex-row items-center justify-center p-2"
          style={stateLayerStyle}
        >
          <img
            className="h-6 w-6 relative"
            loading="lazy"
            alt=""
            src={icon}
            style={iconStyle}
          />
        </div>
      </div>
    </div>
  );
};

export default IconButton;
