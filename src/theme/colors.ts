import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#52868a",
  primaryBright: "#52868a",
  primaryDark: "#351617",
  secondary: "#97161e",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  backgroundAlt: "#FFFFFF",
  contrast: "#191326",
  dropdown: "#190602",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  inputSecondary: "#d7caec",
  tertiary: "#EFF4F5",
  text: "#52868a",
  textDisabled: "#BDC2C4",
  textSubtle: "#52868a",
  borderColor: "#E9EAEB",
  gradients: {
    bubblegum:
      "#353547",
    cardHeader: "linear-gradient(111.68deg, #F2ECF2 0%, #E8F2F6 100%)",
    blue: "linear-gradient(180deg, #A7E8F1 0%, #94E1F2 100%)",
    violet: "linear-gradient(180deg, #E2C9FB 0%, #CDB8FA 100%)",
    violetAlt: "linear-gradient(180deg, #CBD7EF 0%, #9A9FD0 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#97161e",
  background: "#070707",

  backgroundDisabled: "#3c3742",
  backgroundAlt: "#070707",
  contrast: "#FFFFFF",
  dropdown: "#1E1D20",
  invertedContrast: "#191326",
  input: "#190602",
  inputSecondary: "#52868a",
  primaryDark: "#97161e",
  tertiary: "#353547",
  text: "#ffeeda",
  textDisabled: "#666171",
  textSubtle: "#52868a",
  borderColor: "#524B63",
  gradients: {
    bubblegum:
      "#353547",
    cardHeader: "linear-gradient(166.77deg, #070707 0%, #3A3045 100%)",
    blue: "linear-gradient(180deg, #070707 0%, #19778C 100%)",
    violet: "linear-gradient(180deg, #070707 0%, #6D4DB2 100%)",
    violetAlt: "linear-gradient(180deg, #070707 0%, #52868a 100%)",
  },
};
