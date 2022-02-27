import styled from "styled-components";
import {
  SpaceProps,
  ColorProps,
  LayoutProps,
  FlexboxProps,
  BorderProps,
  PositionProps,
} from "styled-system";
import { Box } from "../Box";

export type FlexProps = SpaceProps &
  ColorProps &
  LayoutProps &
  FlexboxProps &
  BorderProps &
  PositionProps & { gap?: number };

export const Flex: any = styled(Box)<FlexProps>({
  display: "flex",
  // TODO add gap props or research and document usages
});
