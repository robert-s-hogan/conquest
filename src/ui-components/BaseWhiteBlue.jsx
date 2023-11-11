/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import BaseWhite from "./BaseWhite";
import { View } from "@aws-amplify/ui-react";
export default function BaseWhiteBlue(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="312px"
      height="168px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "BaseWhiteBlue")}
      {...rest}
    >
      <BaseWhite
        width="312px"
        height="168px"
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
        {...getOverrideProps(overrides, "Base / White + Blue")}
      ></BaseWhite>
      <View
        width="312px"
        height="168px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        borderRadius="4px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(68,61,246,1)"
        opacity="0.05000000074505806"
        {...getOverrideProps(overrides, "Base / Grey")}
      ></View>
    </View>
  );
}
