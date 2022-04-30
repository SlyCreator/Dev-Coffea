import * as React from "react";
import Svg, {
  SvgProps,
  Path,
  Defs,
  Pattern,
  Use,
  Image,
} from "react-native-svg";

function Icon(props: SvgProps) {
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
          <Use xlinkHref="#prefix__image0_159_7" transform="scale(.01111)" />
        </Pattern>
        <Image
          id="prefix__image0_159_7"
          width={30}
          height={30}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAABmJLR0QA/wD/AP+gvaeTAAADXklEQVR4nO2cO2sUURiGH43ZqDFBDFGjhhA7QREsLUQRwUaNneIvULSxsBdBIqhoaa12FjY2ErRSQQmxSLyhNpoEDQq5eL8WZ4IS9jJncs63M5v3gY8sy8y83zw7OWd2Z3ZBCCGEEEIIIYQQonFYFHHbPcAmoCup1Ul1Au1AC9AGLE8eA5SA1kj9fAK+J48/AhP/1VvgOfAMeAp8CR0eSnQvsBPYDmzBCW4PtG1rfgMvgTvA7eTvZD0bWgWcAoaAPw1cP3DCDwHNQcylZClwGpgJsBNFq9fAkfkrrE0PMGy8c3msW8DKebqsyAbcpFHvncxLjQAdaeWlnQwX48ap3Wk3DHzGzeAvgHfAe2AcN8vPJDUNfE3+zjKJm5Dm0g40JY+bgRXAMtxQNnv20oGbOzqS6gS6cZP1Go/e0zIA7Am5wb3UfoXfAFeAg8BG3IuTJ1qBzUAfcAYnaYr5H9l9IZu8USXoLrAjZJghTcBW4CzZh8WbIRt6VSHkZMiQOtME7KfyvlaqsZBNfKsQ0hYyJCd04Sc61bvItOPoTIXn96Vcv0gc8Fx+NGT4AOVfzZ/AJYzfMUWiBFzGnfH4HNEXQjZxuEbY+ZBhdeIi/hPhBLAuZBPNwGCNwKLzAT/J08CuGI304s6VKwUXHd+jeVvMZrqrBBcdX9FeZPk8ulJIzIsIFvjK89rfvL1Nblgk2giJNkKijZBoIyTaCIk2QqKNkGgjJNoIiTZCoo2wEF0CzuEuYo4C/clzjZobDN+PDfvLLNsfuccsuVE/Js2Cb/BYmWXHI/eYJTeqaIuho1xTvxo4tywWoq+mfK5RcoPh+69Uwo2No9hPhj65hR+jfZmukjG3Qn7lofBjtC9PIi1bV/Io+nqkZQtH7KGjBXhcJWe2hgg71i+4MRrc1ziqyR4C1gfOXJCiwR3ZJ4AHuAlyGrgPHCfOWUtU0bqB5h++8nQDTR6RaCMk2giJNkKijZBoIyTaCIk2QqKNkGgjJNoIiTZCoo2QaCMk2giJNkKijViSYZ0Z3C90zcXkOlpOmPJdIcsRPZxhnUZjxHeFLKILdf9aJK5ZhJSAR/hfNW6UGsTwhva1wMPIO5THGiTwT/ukoRk4CtzD78bEotXs/STHKNhXM4QQQgghhBBCCCFi8RcXnWm6wY9lhwAAAABJRU5ErkJggg=="
        />
      </Defs>
    </Svg>
  );
}

export default Icon;
