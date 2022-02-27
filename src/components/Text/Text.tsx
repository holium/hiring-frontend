import styled, { css } from "styled-components";
import { variant } from "styled-system";
import { ThemeType } from "../../theme";
import {
  TypographyFunctionsProps,
  typographyFunctions,
} from "./typography-functions";

export type TextProps = {
  fontByName?: "Inter" | "Source Code Pro";
  fontByType?: "body" | "heading" | "monospace";
  variant?:
    | "body"
    | "caption"
    | "hint"
    | "label"
    | "patp"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "inherit";
  theme?: ThemeType;
} & TypographyFunctionsProps;

const defaultTextStyles = {
  fontFamily: "body",
  fontWeight: "regular",
  lineHeight: "solid",
  color: "text.primary",
  mt: 0,
  mb: 0,
};

const textVariants = variant({
  variants: {
    h1: {
      ...defaultTextStyles,
      fontWeight: "bold",
      lineHeight: "copy",
      fontSize: 8,
    },
    h2: {
      ...defaultTextStyles,
      fontWeight: "semiBold",
      lineHeight: "copy",
      fontSize: 7,
    },
    h3: {
      ...defaultTextStyles,
      fontWeight: "semiBold",
      lineHeight: "title",
      fontSize: 6,
    },
    h4: {
      ...defaultTextStyles,
      fontWeight: "medium",
      lineHeight: "title",
      fontSize: 5,
    },
    h5: {
      ...defaultTextStyles,
      fontWeight: "medium",
      lineHeight: "title",
      fontSize: 4,
    },
    h6: {
      ...defaultTextStyles,
      fontWeight: "regular",
      lineHeight: "normal",
      fontSize: 3,
    },
    body: {
      ...defaultTextStyles,
      fontSize: 3,
    },
    caption: {
      ...defaultTextStyles,
      fontSize: 2,
    },
    hint: {
      ...defaultTextStyles,
      fontSize: 0,
    },
    label: {
      ...defaultTextStyles,
      fontFamily: "heading",
      fontSize: 1,
      fontWeight: "medium",
    },
    inherit: {
      mt: 0,
      mb: 0,
      color: "text.primary",
    },
    patp: {
      mt: 0,
      mb: 0,
      fontWeight: 500,
      color: "text.primary",
      fontFamily: "monospace",
      fontSize: 2,
    },
  },
});

export const Text = styled.p<TextProps>`
  ${textVariants}
  ${typographyFunctions};
  ${(props) =>
    props.fontByName &&
    css`
      font-family: ${props.theme.fontByName[props.fontByName]};
    `};
  ${(props) =>
    props.fontByType &&
    css`
      font-family: ${props.theme.fonts[props.fontByType]};
    `}
`;

Text.defaultProps = {
  variant: "inherit",
};
