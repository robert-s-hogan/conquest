/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Icon, Text, View } from "@aws-amplify/ui-react";
export default function TabsDefault(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="64px"
      height="40px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "TabsDefault")}
      {...rest}
    >
      <Icon
        width="64px"
        height="0px"
        viewBox={{ minX: 0, minY: 0, width: 64, height: 1 }}
        paths={[
          {
            d: "M0 0L64 0L64 -1L0 -1L0 0Z",
            stroke: "rgba(239,239,239,1)",
            fillRule: "nonzero",
            strokeWidth: 1,
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="100%"
        bottom="0%"
        left="0%"
        right="0%"
        transformOrigin="top left"
        transform="rotate(0deg)"
        {...getOverrideProps(overrides, "Line")}
      ></Icon>
      <Text
        fontFamily="Avenir Next"
        fontSize="14px"
        fontWeight="500"
        color="rgba(0,0,0,1)"
        lineHeight="24px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="64px"
        height="24px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="0%"
        bottom="40%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="General"
        {...getOverrideProps(overrides, "Title")}
      ></Text>
    </View>
  );
}
