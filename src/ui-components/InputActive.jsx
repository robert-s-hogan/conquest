/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import InputDefault from "./InputDefault";
import { Flex, Text, View } from "@aws-amplify/ui-react";
export default function InputActive(props) {
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
      {...getOverrideProps(overrides, "InputActive")}
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
        top="0px"
        bottom="0px"
        left="0px"
        right="0px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Input / Default")}
      ></InputDefault>
      <Flex
        gap="10px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        overflow="hidden"
        position="absolute"
        top="0px"
        left="8px"
        padding="0px 4px 0px 4px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Frame 28")}
      >
        <Text
          fontFamily="Avenir Next"
          fontSize="12px"
          fontWeight="600"
          color="rgba(68,61,246,1)"
          lineHeight="16px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Label"
          {...getOverrideProps(overrides, "Label")}
        ></Text>
      </Flex>
      <View
        width="1px"
        height="24px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="20px"
        left="14px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(68,61,246,1)"
        opacity="0.20000000298023224"
        {...getOverrideProps(overrides, "Type indicator")}
      ></View>
    </View>
  );
}
