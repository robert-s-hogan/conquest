/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Text, View } from "@aws-amplify/ui-react";
export default function LabelsSmallDefaul(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="48px"
      height="24px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "LabelsSmallDefaul")}
      {...rest}
    >
      <View
        width="48px"
        height="24px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        borderRadius="5px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(68,61,246,1)"
        opacity="0.10000000149011612"
        {...getOverrideProps(overrides, "Rectangle")}
      ></View>
      <Text
        fontFamily="Avenir Next"
        fontSize="12px"
        fontWeight="500"
        color="rgba(68,61,246,1)"
        lineHeight="16px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="48px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="16.67%"
        bottom="16.67%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Label"
        {...getOverrideProps(overrides, "Label")}
      ></Text>
    </View>
  );
}
