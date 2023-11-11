/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import PopoversSmallText2Icons from "./PopoversSmallText2Icons";
import { View } from "@aws-amplify/ui-react";
export default function PopoversSmallMap(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="144px"
      height="40px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "PopoversSmallMap")}
      {...rest}
    >
      <PopoversSmallText2Icons
        width="144px"
        height="40px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0px"
        left="0px"
        right="0px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Popovers / Small / Text + 2 Icons")}
      ></PopoversSmallText2Icons>
      <View
        width="24px"
        height="24px"
        {...getOverrideProps(overrides, "Icons / Editor / Image-Scale")}
      ></View>
    </View>
  );
}
