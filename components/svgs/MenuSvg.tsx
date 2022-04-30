import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

function MenuSvg(props: SvgProps) {
  return (
    <Svg
      width={22}
      height={26}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M4.026.001L2.407 3.736H0v3.359h.921l.943 5.975H.391l1.948 10.973 1.249-.015 1.256 7.973h11.891l.083-.531 1.172-7.443 1.188.015 1.943-10.973h-1.407l.937-5.975h1.011V3.735h-2.557L17.48 0 4.026.001zm.704 1.073h12.057l1.025 2.375H3.697L4.73 1.074zm-3.666 3.73h19.525v1.228H1.064V4.804zm.604 9.333h18.183l-1.568 8.823-7.536-.079-7.511.079-1.568-8.823z"
        fill="#000"
      />
    </Svg>
  );
}

export default MenuSvg;
