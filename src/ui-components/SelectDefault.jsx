/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Text, View } from "@aws-amplify/ui-react";
export default function SelectDefault(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="72px"
      height="40px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "SelectDefault")}
      {...rest}
    >
      <View
        width="72px"
        height="40px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0px"
        bottom="0px"
        left="0px"
        right="0px"
        borderRadius="8px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(239,239,239,1)"
        {...getOverrideProps(overrides, "Rectangle 4")}
      ></View>
      <Text
        fontFamily="Avenir Next"
        fontSize="12px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="40px"
        height="40px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="calc(50% - 20px - 0px)"
        left="11px"
        right="21px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Dates"
        {...getOverrideProps(overrides, "Labels")}
      ></Text>
      <View
        width="16px"
        height="16px"
        {...getOverrideProps(overrides, "Icons / Actions / Arrow-Down")}
      ></View>
    </View>
  );
}
