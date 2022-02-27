import * as React from "react";
import { Sigil, Flex, Text } from "../";

export type ShipProps = {
  sigilOnly?: boolean;
  patp: string;
  color?: string;
};

export const Ship: any = (props: ShipProps) => {
  return (
    <Flex style={{ gap: 8 }} alignItems="center" padding={[4, 0, 4, 0]}>
      <Sigil
        clickable={false}
        patp={props.patp}
        size={24}
        color={props.color ? [props.color, "white"] : ["black", "white"]}
      />
      <Text style={{ opacity: 0.75 }} variant="patp" fontByType="monospace">
        {props.patp}
      </Text>
    </Flex>
  );
};
