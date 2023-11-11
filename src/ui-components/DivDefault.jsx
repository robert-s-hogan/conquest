/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Icon, Text, View } from "@aws-amplify/ui-react";
export default function DivDefault(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="504px"
      height="24px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "DivDefault")}
      {...rest}
    >
      <Icon
        width="504px"
        height="0px"
        viewBox={{ minX: 0, minY: 0, width: 504, height: 1 }}
        paths={[
          {
            d: "M0 0L504 0L504 -1L0 -1L0 0Z",
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
        {...getOverrideProps(overrides, "Line")}
      ></Icon>
      <Text
        fontFamily="Avenir Next"
        fontSize="12px"
        fontWeight="500"
        color="rgba(141,144,145,1)"
        lineHeight="16px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="488px"
        height="16px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="0%"
        bottom="33.33%"
        left="1.59%"
        right="1.59%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Hover"
        {...getOverrideProps(overrides, "Hover")}
      ></Text>
    </View>
  );
}
