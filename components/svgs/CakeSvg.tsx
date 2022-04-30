import * as React from "react";
import Svg, {
  SvgProps,
  Path,
  Defs,
  Pattern,
  Use,
  Image,
} from "react-native-svg";

function CakeSvg(props: SvgProps) {
  return (
    <Svg
      width={30}
      height={30}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <Path fill="url(#prefix__pattern0)" d="M0 0h90v90H0z" />
      <Defs>
        <Pattern
          id="prefix__pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <Use xlinkHref="#prefix__image0_159_6" transform="scale(.01111)" />
        </Pattern>
        <Image
          id="prefix__image0_159_6"
          width={30}
          height={30}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAABmJLR0QA/wD/AP+gvaeTAAAFMUlEQVR4nO3c3YtVVRjH8Y86GjpqaWJkBZqZLxkmRW+MaVkXXfQHBNFl4I2XRVcFZURQUfbidXWZ3YQQFJUzCRZGL0qTo5Kho1Tm+wupZRfPPswwzpnZ+7zsc2ZmfWFdzHbO3r/1O3ut9aznWQ6JRCKRSCQSiUQikaibediM41nbnF1LNIgOPIO/cGVIO4HnMK1l6sYJD+NnVxs8tP2Kx1ukcUxzMz4wusFD26e4tQV6xxwz8CIuKG5ypf2DtzCrZO1jhidwUO0GD239eBqTyuxEO7Ma3fIb2F3D768urTdtyFwxxC+r7Q0tMgL+FXP+/OZ3q30YKVwrOucWndMnTDiYN1wrGkUUjVLGbThYlhHN+iLbnlYM7UZOTWOCVi9W9S62bU8t4Vozw6/V+L2N9NTNPGyR/w06hCeV8wb9nVNTpV3O+tJW2cEObBSpyzyduICX0Jnj3q/gLDbVqbE/p7ah7XjWt446n18367FHfuGfYFGB+5/JPne6Tp2vDqNlfwHde0RfS2cRtpYgdJMw++U69U4TZveLaeT17Nqjir0oWxV7UWpmPO7E2i4cbHW41mxaHg7epVi49i3ua9TDW0Dp/b1GFEDbMVxrNpNEXw7J1/fLeFt4Vpg3cz6kSLg21ugUfcu7Jr1Ry0PyBPlFw7WxyiLR19H8OFbtBiMN8ysNkzmxGNbTyWWrmKgko0siGV0SyeiSSEaXRDK6JJLRJZGMLolGVg6uoA/foRf7snYaJ3Eu+71OXIfZuA1LsBwPZj83kr2D9PRles5kes6KzUUn5oi055JBeu7F0kYJqXdnuBdfZK1blH7q4UasQRfWYqVio24fPs9aj0gj1MP1mZ7HRJHg9hyfGdbTvEZfxCn8hp+wHV/hSI4H18Nc0dF1In25FNeKQsJJkR/fja/xJQ43Wc8CcUhnLVaJHEhFT4XC2csNWGF8ZuUaTafwakOrhSQS5dDoasgUccpnDe4Qi8dNYlWvTEHnxPzaLyKBXuzALlxqkZ4TYn7vwy9iIf1B1D4bQr1Gd+AePCQWiC4RttXCeew0cKJ/p6hsFGEK7s60rBUG16rnNL4RC/92fC9KVjWR1+hpmIkbRKy7UpjblV1vBhdFDNyNH8XbdlTEwZdE3DtfHLu9M9NTj7GjcVYY3y3OguzHH9n1i/XceAbeFcM8b0V4orYTeAfTazF6Sxt0YKy1LdXMrDZ1TBZDoqZvaAJzXkxp/w39h2ackhw8l+0W2+I/s+vEnD4fi8Vc35W1OU3QUtGzQyxo1fRU1p7KXN/Mtecq8k4dp7ANz4oTO7V8eZPFlnYjPhaLTK3D9ww+w/N4oEY9Hbg/69M20cc8z36/2g1Hijqm4zU8JRbGswbizX2aFG8OYrl4s1aJjNpCkfWbhakGsnBHxX8u6hUjaZc6wrAqDI7HV2R6bsn0zBSx+EfiQGfRkDSRSCSq0ayTnwvwiKvztlfE1vag2F31iGjgQJN0DNWzLtOzMNPD8Hn2/kYLaJTR80RYtF7+SsRgDotO9mStV3wptVIpGFQqI0VLUn0GKkc9Rji8mJeRjN4gYuGDIrcwU6yyc0R+YQmWiZCuqLGjcUxEELtFpw+IkO+MgdzCbAO1x8VD9CzT2NHaJw6c94ocxwER8VRqj1PFKFmL94a7QTpN2njSadJWkowuiWR0SSSjSyIZXRIjGX20NBXjh6obnZGM/rAJQsY7VT2bMsKHekRRdpEx/GdwSuKI2Ki8oDkp40QikUgkEolEIpFIJBKJRCKRSCQSiQnI/8Jec9nVtCvuAAAAAElFTkSuQmCC"
        />
      </Defs>
    </Svg>
  );
}

export default CakeSvg;
