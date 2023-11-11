/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Text, View } from "@aws-amplify/ui-react";
export default function PopoversSmallTextIcon(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="152px"
      height="40px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "PopoversSmallTextIcon")}
      {...rest}
    >
      <View
        width="152px"
        height="40px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0px"
        left="0px"
        right="0px"
        boxShadow="0px 0px 5px rgba(0, 0, 0, 0.05000000074505806)"
        borderRadius="4px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(27,33,36,1)"
        {...getOverrideProps(overrides, "Rectangle")}
      ></View>
      <Text
        fontFamily="Avenir Next"
        fontSize="14px"
        fontWeight="500"
        color="rgba(255,255,255,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="104px"
        height="24px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="8px"
        left="10px"
        right="38px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Something here"
        {...getOverrideProps(overrides, "Label")}
      ></Text>
      <View
        width="24px"
        height="24px"
        {...getOverrideProps(overrides, "Icons / Actions / More")}
      ></View>
    </View>
  );
}
