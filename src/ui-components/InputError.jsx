/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import InputActive from "./InputActive";
import { Text, View } from "@aws-amplify/ui-react";
export default function InputError(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="296px"
      height="81px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "InputError")}
      {...rest}
    >
      <InputActive
        width="296px"
        height="56px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="30.86%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Input / Active")}
      ></InputActive>
      <Text
        fontFamily="Avenir Next"
        fontSize="12px"
        fontWeight="500"
        color="rgba(197,41,42,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="280px"
        height="16px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="64px"
        left="8px"
        right="8px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Error message"
        {...getOverrideProps(overrides, "Error")}
      ></Text>
    </View>
  );
}
