/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Text, View } from "@aws-amplify/ui-react";
export default function FormsSearchDefault(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="104px"
      height="24px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "FormsSearchDefault")}
      {...rest}
    >
      <View
        width="24px"
        height="24px"
        {...getOverrideProps(overrides, "Icons / Actions / Search")}
      ></View>
      <Text
        fontFamily="Avenir Next"
        fontSize="14px"
        fontWeight="500"
        color="rgba(141,144,145,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="64px"
        height="24px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="calc(50% - 12px - 0px)"
        left="40px"
        right="0px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Search..."
        {...getOverrideProps(overrides, "Search...")}
      ></Text>
    </View>
  );
}
