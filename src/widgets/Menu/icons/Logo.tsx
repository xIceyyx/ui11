import React from "react";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = () => {
  return (
    <img
      alt="CubFinance"
      src="/images/cub/token.png"
      style={{ width: "auto", height: "30px" }}
    />
  );
};

export default Logo;
