/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Text, View } from "@aws-amplify/ui-react";
export default function PopoversTooltipDefaul(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="64px"
      height="28px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "PopoversTooltipDefaul")}
      {...rest}
    >
      <View
        width="64px"
        height="28px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        boxShadow="0px 2px 5px rgba(0, 0, 0, 0.28999999165534973)"
        borderRadius="4px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(27,33,36,1)"
        {...getOverrideProps(overrides, "Rectangle 3")}
      ></View>
      <Text
        fontFamily="Avenir Next"
        fontSize="12px"
        fontWeight="500"
        color="rgba(255,255,255,1)"
        lineHeight="16px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="52px"
        height="16px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="6px"
        bottom="6px"
        left="6px"
        right="6px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Message"
        {...getOverrideProps(overrides, "Message")}
      ></Text>
    </View>
  );
}
