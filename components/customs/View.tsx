import { Box } from "native-base";
import { View as RNView } from "react-native";
import { ComponentProps } from "react";

export type ViewProps = RNView["props"] & Partial<ComponentProps<typeof Box>>;

export const View = (props: ViewProps) => (
  <Box {...props}>
    {props.children}
  </Box>
);
