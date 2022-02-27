import React, { forwardRef, useState } from "react";
import styled from "styled-components";
import {
  compose,
  space,
  color,
  layout,
  typography,
  SpaceProps,
  ColorProps,
  LayoutProps,
  TypographyProps,
} from "styled-system";
import { uuid } from "../uuid";
export type IconProps = SpaceProps & ColorProps & LayoutProps & TypographyProps;

const SvgComponent = forwardRef<
  SVGSVGElement,
  React.SVGProps<SVGSVGElement> & {
    title?: any;
  }
>(({ title, ...props }, svgRef) => {
  const [titleId] = useState(() => (title ? uuid() : undefined));
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      width="1em"
      height="1em"
      fill="currentcolor"
      ref={svgRef}
      viewBox="0 0 24 24"
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}

      <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z" />
    </svg>
  );
});
const SvgIcon = styled(SvgComponent)<IconProps>(
  {
    flex: "none",
    verticalAlign: "middle",
  },
  compose(space, color, layout, typography)
);
export default SvgIcon;
