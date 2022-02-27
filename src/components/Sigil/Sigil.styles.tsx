import styled, { css } from "styled-components";
import {
  compose,
  space,
  layout,
  flexbox,
  border,
  position,
  color,
  BorderProps,
} from "styled-system";

export type SigilStyleProps = BorderProps & {
  clickable?: boolean;
  sigilColor: string;
  sigilSize: number;
  borderRadiusOverride?: string;
  theme: any;
};

export const SigilStyle = styled(
  styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: ${(props: SigilStyleProps) => props.sigilSize}px;
    width: ${(props: SigilStyleProps) => props.sigilSize}px;
    background-color: ${(props: SigilStyleProps) => props.sigilColor};
    border-width: 0px;
    border-radius: ${(props: SigilStyleProps) =>
      props.borderRadiusOverride || "3px"};
    transition: ${(props: SigilStyleProps) => props.theme.transition};
    svg {
      pointer-events: none;
    }
    ${(props: SigilStyleProps) =>
      props.clickable &&
      css`
        cursor: pointer;
      `}
  `
)<SigilStyleProps>(compose(space, layout, flexbox, border, position, color));
