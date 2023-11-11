/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Text, View } from "@aws-amplify/ui-react";
import ControlsSelectDefault from "./ControlsSelectDefault";
export default function PopoversLargeButton(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="256px"
      height="256px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "PopoversLargeButton")}
      {...rest}
    >
      <View
        width="256px"
        height="256px"
        {...getOverrideProps(overrides, "Popovers / Settings / Default")}
      ></View>
      <ControlsSelectDefault
        width="224px"
        height="56px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="16px"
        left="16px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Controls / Select / Default")}
      ></ControlsSelectDefault>
      <View
        padding="0px 0px 0px 0px"
        width="224px"
        height="64px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="168px"
        left="16px"
        {...getOverrideProps(overrides, "Group 4")}
      >
        <Text
          fontFamily="Avenir Next"
          fontSize="14px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="224px"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          bottom="40px"
          left="0px"
          right="0px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Background colour"
          {...getOverrideProps(overrides, "Background colour")}
        ></Text>
        <View
          width="32px"
          height="32px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          bottom="0px"
          left="0px"
          right="192px"
          borderRadius="4px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(68,61,246,1)"
          {...getOverrideProps(overrides, "Rectangle 2.21143822")}
        ></View>
        <Text
          fontFamily="Avenir Next"
          fontSize="12px"
          fontWeight="500"
          color="rgba(141,144,145,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="88px"
          height="32px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          bottom="0px"
          left="40px"
          right="96px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Choose"
          {...getOverrideProps(overrides, "Choose1143823")}
        ></Text>
      </View>
      <View
        padding="0px 0px 0px 0px"
        width="224px"
        height="64px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="88px"
        left="16px"
        {...getOverrideProps(overrides, "Group 4.1")}
      >
        <Text
          fontFamily="Avenir Next"
          fontSize="14px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="224px"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          bottom="40px"
          left="0px"
          right="0px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Text colour"
          {...getOverrideProps(overrides, "Text colour")}
        ></Text>
        <View
          width="32px"
          height="32px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          bottom="0px"
          left="0px"
          right="192px"
          border="1px SOLID rgba(239,239,239,1)"
          borderRadius="4px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Rectangle 2.21143872")}
        ></View>
        <Text
          fontFamily="Avenir Next"
          fontSize="12px"
          fontWeight="500"
          color="rgba(141,144,145,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="88px"
          height="32px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          bottom="0px"
          left="40px"
          right="96px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Choose"
          {...getOverrideProps(overrides, "Choose1143873")}
        ></Text>
      </View>
    </View>
  );
}
