import React from "react";
import { Flex } from "../";
import { Sigil } from "./Sigil";

export default {
  title: "Components/Sigil",
  component: Sigil,
  // add docs
  parameters: {},
};

export const Simple = () => (
  <Flex style={{ gap: 8 }} alignItems="center">
    <Sigil
      clickable
      size={30}
      patp="~lomder-librun"
      color={["#ff810a", "white"]}
    />
  </Flex>
);

export const Full = () => (
  <Flex style={{ gap: 8 }} alignItems="center">
    <Sigil
      clickable
      size={120}
      patp="~lomder-librun"
      color={["#ff810a", "white"]}
      simple={false}
    />
  </Flex>
);
