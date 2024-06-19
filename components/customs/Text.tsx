import React, { ComponentProps, ReactNode } from "react";
import { Text as Typography } from "native-base";
import { RFValue } from "react-native-responsive-fontsize";

type Variant =
  | "bigTitle"
  | "title"
  | "bigText"
  | "subtitle1"
  | "subtitle2"
  | "body"
  | "info"
  | "description"
  | "caption";

type FontFamily =
  | "Poppins-Bold"
  | "Poppins-ExtraLight"
  | "Poppins-Light"
  | "Poppins-Medium"
  | "Poppins-Regular"
  | "Poppins-SemiBold";

export type TypographyProps = {
  variant?: Variant;
  color?: string;
  children?: ReactNode | string;
  fontFamily?: FontFamily;
  paddingTop?: string | number;
  // fontSize?: number | string;
} & Partial<ComponentProps<typeof Typography>>;

const typographyMap: Record<
  Variant,
  Pick<ComponentProps<typeof Typography>, "lineHeight" | "fontSize">
> = {
  bigTitle: {
    fontSize: "6xl",
    lineHeight: 30,
  },
  title: {
    fontSize: "4xl",
    lineHeight: 30,
  },
  bigText: {
    fontSize: "2xl",
    lineHeight: 25,
  },
  subtitle1: {
    fontSize: "xl",
    lineHeight: 23,
  },
  subtitle2: {
    fontSize: "lg",
    lineHeight: 21,
  },
  body: {
    fontSize: "md",
    lineHeight: 18,
  },
  info: {
    fontSize: "sm",
    lineHeight: 16,
  },
  description: {
    fontSize: "xs",
    lineHeight: 14,
  },
  caption: {
    fontSize: "2xs",
    lineHeight: 12,
  },
};

export const Text = ({
  variant = "subtitle2",
  color,
  children,
  paddingTop,
  ...props
}: TypographyProps) => {
  let textFontSize: { fontSize: number; lineHeight: number } = {
    fontSize: 0,
    lineHeight: 0,
  };
  if (
    typeof props.fontSize === "number" ||
    typeof props.fontSize === "string"
  ) {
    textFontSize.fontSize = RFValue(Number(props.fontSize) - 2);
    textFontSize.lineHeight = RFValue(Number(props.fontSize) - 2) + 3;
  }
  return (
    <Typography
      fontWeight="normal"
      color={color ?? "gray.900"}
      {...typographyMap[variant]}
      {...props}
      paddingTop={paddingTop ?? 2}
      style={[
        props.style,
        Boolean(textFontSize.fontSize) && {
          fontSize: textFontSize.fontSize,
          lineHeight: textFontSize.lineHeight,
        },
      ]}
      // _dark={{ color: 'rgba(255, 255, 255, 0.7)' }}
      // _light={{ color: '#000' }}
    >
      {children}
    </Typography>
  );
};
