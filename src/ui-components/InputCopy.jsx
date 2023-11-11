/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import InputDefault from "./InputDefault";
import { Text, View } from "@aws-amplify/ui-react";
export default function InputCopy(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="296px"
      height="56px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "InputCopy")}
      {...rest}
    >
      <InputDefault
        width="296px"
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
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Input / Default")}
      ></InputDefault>
      <Text
        fontFamily="Avenir Next"
        fontSize="12px"
        fontWeight="500"
        color="rgba(68,61,246,1)"
        lineHeight="16px"
        textAlign="right"
        display="block"
        direction="column"
        justifyContent="unset"
        width="48px"
        height="16px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="24px"
        left="232px"
        right="16px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Copy"
        {...getOverrideProps(overrides, "Copy")}
      ></Text>
    </View>
  );
}
