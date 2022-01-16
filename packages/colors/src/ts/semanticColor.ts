import {
  alertColor,
  black,
  grayColor,
  pointColor,
  priamryColor,
  white,
} from "./basicColor";

export const success = {
  main: priamryColor[400],
  sub: priamryColor[50],
};

export const warning = {
  main: alertColor[600],
  sub: alertColor[50],
};

export const informative = {
  main: pointColor[600],
  sub: pointColor[50],
};

export const background = {
  primary: white,
  secondary: grayColor[50],
};

export const divider = {
  section: grayColor[200],
  item: grayColor[50],
};

export const modal = "";

export const skeleton = grayColor[200];

export const enabled = {
  primary: priamryColor[400],
  secondary: white,
  tertiary: pointColor[600],
};

export const pressed = {
  primary: priamryColor[800],
  secondary: grayColor[200],
  tertiary: pointColor[900],
};

export const disabled = grayColor[400];

export const text = {
  primary: grayColor[900],
  secondary: grayColor[700],
  tertiary: grayColor[600],
  disabled: grayColor[400],
};

export const buttonText = {
  primary: white,
  secondary: grayColor[900],
  tertiary: white,
  disabled: grayColor[400],
};
