/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import BaseGrey from "./BaseGrey";
import { Text, View } from "@aws-amplify/ui-react";
export default function InformationDefault(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="600px"
      height="96px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "InformationDefault")}
      {...rest}
    >
      <BaseGrey
        width="600px"
        height="96px"
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
        {...getOverrideProps(overrides, "Base / Grey")}
      ></BaseGrey>
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
        width="552px"
        height="16px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="56px"
        bottom="24px"
        left="24px"
        right="24px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Meggings cred before they sold out messenger bag, ugh fashion axe Pitchfork."
        {...getOverrideProps(
          overrides,
          "Meggings cred before they sold out messenger bag, ugh fashion axe Pitchfork."
        )}
      ></Text>
      <Text
        fontFamily="Avenir Next"
        fontSize="16px"
        fontWeight="600"
        color="rgba(0,0,0,1)"
        lineHeight="32px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="552px"
        height="24px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="24px"
        left="24px"
        right="24px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Hello world"
        {...getOverrideProps(overrides, "Hello world")}
      ></Text>
    </View>
  );
}
