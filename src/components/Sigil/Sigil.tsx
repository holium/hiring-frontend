import * as React from "react";
import { sigil, reactRenderer } from "@tlon/sigil-js";
import { SigilStyle } from "./Sigil.styles";

export type SigilProps = {
  patp: string;
  size: number;
  simple?: boolean;
  color: [string, string];
};

export const Sigil: any = (props: SigilProps) => {
  return (
    <>
      <SigilStyle id="ship" sigilColor={props.color[0]} sigilSize={props.size}>
        {sigil({
          patp: props.patp,
          renderer: reactRenderer,
          size: props.size - props.size / 3,
          icon: props.simple,
          colors: props.color,
          margin: false,
        })}
      </SigilStyle>
    </>
  );
};

Sigil.defaultProps = {
  size: 30,
  simple: true,
  clickable: false,
};
