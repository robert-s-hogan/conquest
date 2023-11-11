/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Text, View } from "@aws-amplify/ui-react";
export default function MediumDefault(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="120px"
      height="56px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "MediumDefault")}
      {...rest}
    >
      <View
        width="120px"
        height="56px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        borderRadius="8px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(68,61,246,1)"
        {...getOverrideProps(overrides, "Base")}
      ></View>
      <View
        width="120px"
        height="56px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        borderRadius="9px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Overlay")}
      ></View>
      <Text
        fontFamily="Avenir Next"
        fontSize="16px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="32px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="90px"
        height="56px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="0px"
        bottom="0px"
        left="16px"
        right="14px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Let’s do it"
        {...getOverrideProps(overrides, "Label")}
      ></Text>
    </View>
  );
}
