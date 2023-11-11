/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Text, View } from "@aws-amplify/ui-react";
export default function ModalsSemimodal(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="560px"
      height="488px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "ModalsSemimodal")}
      {...rest}
    >
      <View
        padding="0px 0px 0px 0px"
        width="560px"
        height="488px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0px"
        left="0px"
        {...getOverrideProps(overrides, "Group 2")}
      >
        <View
          width="560px"
          height="488px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          boxShadow="0px 0px 5px rgba(0, 0, 0, 0.05000000074505806)"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Rectangle")}
        ></View>
        <Text
          fontFamily="Avenir Next"
          fontSize="24px"
          fontWeight="700"
          color="rgba(0,0,0,1)"
          lineHeight="32px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="464px"
          height="24px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="32px"
          left="24px"
          right="72px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Title of the modal"
          {...getOverrideProps(overrides, "Title")}
        ></Text>
        <View
          width="24px"
          height="24px"
          {...getOverrideProps(overrides, "Icons / Actions / Close")}
        ></View>
        <View
          padding="0px 0px 0px 0px"
          width="184px"
          height="40px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="424px"
          left="24px"
          {...getOverrideProps(overrides, "Group")}
        >
          <View
            width="80px"
            height="40px"
            {...getOverrideProps(overrides, "Small / Primary")}
          ></View>
          <View
            width="88px"
            height="40px"
            {...getOverrideProps(overrides, "Small / Alternative")}
          ></View>
        </View>
      </View>
    </View>
  );
}
