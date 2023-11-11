/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { View } from "@aws-amplify/ui-react";
export default function PopoversSmallText2Icons(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="128px"
      height="40px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "PopoversSmallText2Icons")}
      {...rest}
    >
      <View
        width="128px"
        height="40px"
        {...getOverrideProps(overrides, "Popovers / Small / One action")}
      ></View>
      <View
        width="24px"
        height="24px"
        {...getOverrideProps(overrides, "Icons / Actions / Reorder")}
      ></View>
    </View>
  );
}
