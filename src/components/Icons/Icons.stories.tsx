import React from "react";

import { Icons } from ".";
import { Flex } from "..";

export default {
  title: "Components/Icons",
  component: Icons,
  parameters: {},
};

export const Directory = () => (
  <>
    <Icons.Plus fontSize={3} mr={2} color="text.primary" aria-hidden />
    <Icons.Heart fontSize={3} mr={2} color="text.primary" aria-hidden />
    <Icons.HeartFilled fontSize={3} mr={2} color="text.primary" aria-hidden />
  </>
);

// The components support `space`, `color`, `layout` & `typography` styled-system props.
export const Sizing = () => (
  <>
    <Icons.Heart fontSize={0} mr={2} color="text.primary" aria-hidden />
    <Icons.Heart fontSize={1} mr={2} color="text.primary" aria-hidden />
    <Icons.Heart fontSize={2} mr={2} color="text.primary" aria-hidden />
    <Icons.Heart fontSize={3} mr={2} color="text.primary" aria-hidden />
    <Icons.Heart fontSize={4} mr={2} color="text.primary" aria-hidden />
    <Icons.Heart fontSize={5} mr={2} color="text.primary" aria-hidden />
    <Icons.Heart fontSize={6} mr={2} color="text.primary" aria-hidden />
    <Icons.Heart fontSize={7} mr={2} color="text.primary" aria-hidden />
  </>
);

export const Color = () => (
  <Flex alignItems="center">
    <Icons.HeartFilled color="red" mr={2} aria-hidden />
    <Icons.HeartFilled color="orange" mr={2} aria-hidden />
    <Icons.HeartFilled color="gold" mr={2} aria-hidden />
    <Icons.HeartFilled color="green" mr={2} aria-hidden />
    <Icons.HeartFilled color="blue" mr={2} aria-hidden />
    <Icons.HeartFilled color="indigo" mr={2} aria-hidden />
    <Icons.HeartFilled color="violet" mr={2} aria-hidden />
  </Flex>
);
