import * as React from "react";
import Svg, {
  SvgProps,
  Path,
  Defs,
  Pattern,
  Use,
  Image,
} from "react-native-svg";

function ColdDrinkSvg(props: SvgProps) {
  return (
    <Svg
      width={28}
      height={28}
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
          <Use xlinkHref="#prefix__image0_159_5" transform="scale(.01111)" />
        </Pattern>
        <Image
          id="prefix__image0_159_5"
          width={30}
          height={30}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAABmJLR0QA/wD/AP+gvaeTAAAFYElEQVR4nO2dS2hdRRjHf0lujKaa1CfqwoJFVy60MbYNFXUnioKgdqGC+MCKoKILpd0ILly0IAgqioJSgxVbFbWtxVcLiraiiMVHtbWLVk0FF2lDG/Qm18Wcq3g7c+6cec/1/OAj5ZD55vv+mTtnXncK+XMC8AwwAxwDXgCGo0bUozwJtDrsuagR9SANYJrjhZ6OGZSM/tgBWDIGjEiez4cOpBu5C32V4vlnQaPQIHehr1A83xE0Cg0asQMo4TTgSmACuAg4HzgD0VXMI0YZsm4DYHuIAHNmEFgJbAP+5PiXnK6tJP9PqxcGgXuBXzAXt9P2AvcAAwHzSJoJ4FvcCdxpXwKXBssmQfqBx4A5/InctiawGugLkllCnAS8iX+BO+3Vou7/BcOIUYGOML8Bk8BdwDhwXlF+jWZ5mW1DrI/0NA3gXbqL8SlwI+oX2VZFuU3A1xr+N5b47gnWUi7AFHBDFx8N4LCi/DJEP3wL8HuXuh53l1ZaXI2YaKgS3wycruFnmaL8EcQwsc1ZlHdRTeByy5ySYxj4GXXSk/xXpDIeUfh4T/K7g4gXoKrefcCQSUKpshp1spuoNotT9c+PKn6/AbxdUv/91VJJlxHgD+RJ/gSMVvDVQHQRqv5ZxWhRl6zcIWBBhRiSZRXyBOeB5RV96fbPMlagfkfcXjGOJPkceXJvGfhS9c9bNctvUJT/0CCWpDgbdSu62MBf1f65kzFF+bki1my5FXli3xn4GsSsf+7kK4WPbuN3K3yv2S5RPH/DwNcYcLLk+QxihU6XdxTPl1aOKDJDwHWIWeBB1MOq1OwgsA64nsTH1gPAg4hpdGzRbG0KeIAE10NORX9FLifbDix0qJMVJwK7iC+KL9tZ5BiddcQXw7etdaaWIecCs8QXwrfNAufYCGU7vLsJ9Rv6KWARYn04B1tUxCxjCLhZWxUPbEHeAtbHDMqS9chz2hIroLKdjolYQTlgOfKcDhPpZNdSRUA6K2kpU9aALjN1atNHr1A8/wT4y8JvbJqIzWEZqpy7YiP0hYrnyZ3kNECVwwWmDm36nDnF8ycK60WMP6k2Lfobi7K5sjtGpWeifmn0ok0jzmxH4T6NAHvFVjnSzJg1iDd1bCF8WRP9rTLvLAFeBvYTXxhXth94CbjEhUCuzws3gKPkPWEBMbpYgMP5gOs9wybimFXu7MXxpMvH5uwPHnyGZo9rhz6Edh5kBJw3llpoOVm06O8tyr5SWGyyaCwLMRtObUCMWgYQQ8WYQ7toM8CqHMJM5DYxxZ5yqoRndqCf2GvIVxFjiZ3VMu/z2IncJobYWd1e8zD2IrcJLfZDFnkH5xrKk9lHtWn6YFEmhNDXGmUcicV0T+hF9IaXfcCzGv5c2WKLvIMzgLgazVbs0CLPkuAJ0m7sRi85ldihRW4RaavKlo3oJ9gpdh/i0sCQIreA1x1r8A8+T95UWZi5o/h5NyLhpxE30oTG28pjKkKDELtV/PtOx7Ho8mOkeq0YJ8zHXQddX+Pm6Zbj8+qbUxBb9L6v19Hxr/sHGUUcoXCOz6+/HUHcIJMLv+JJZPD/PcOctrW8xupb6CwW0AtqoQPhNda66/iXWuhAeI3V99CrHzH68Hnnvovh3THEF/q9XfDtu0XP43+25WJSswfPt6iHuPo3hxei9xhDCJ1DP+09xrpFC+oWHQjvMYa4T3kYMfJI9Sr4FuJuvhmflYRI/ihwIEA9phzAs8gQrpV9EageE3aFqCSU0JOB6jEhhdOrzuhDfTlgTNtMD977PwJ8QHxx2/Y+YheoJ+kHbgM+Rv6/tvm2aeAjxA2TqY6CampqampqampqampqwvI3zWMoKbGY25cAAAAASUVORK5CYII="
        />
      </Defs>
    </Svg>
  );
}

export default ColdDrinkSvg;
