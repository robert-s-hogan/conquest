/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { View } from "@aws-amplify/ui-react";
export default function ModalsMinimodalButtons(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="384px"
      height="584px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "ModalsMinimodalButtons")}
      {...rest}
    >
      <View
        width="384px"
        height="584px"
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
        borderRadius="4px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Rectangle")}
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
        top="520px"
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
  );
}
