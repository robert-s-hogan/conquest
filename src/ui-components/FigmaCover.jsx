/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Text, View } from "@aws-amplify/ui-react";
export default function FigmaCover(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1064px"
      height="558px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(68,61,246,1)"
      {...getOverrideProps(overrides, "FigmaCover")}
      {...rest}
    >
      <Text
        fontFamily="Avenir Next"
        fontSize="124px"
        fontWeight="500"
        color="rgba(255,255,255,1)"
        lineHeight="119.04000091552734px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="863px"
        height="304px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="127px"
        left="100px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Design&#xA;System"
        {...getOverrideProps(overrides, "Title")}
      ></Text>
      <View
        width="96px"
        height="96px"
        {...getOverrideProps(overrides, "Icons / Logo / Square")}
      ></View>
    </View>
  );
}
