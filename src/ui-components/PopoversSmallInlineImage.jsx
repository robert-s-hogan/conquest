/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import PopoversSmallIcons from "./PopoversSmallIcons";
import { View } from "@aws-amplify/ui-react";
export default function PopoversSmallInlineImage(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="256px"
      height="40px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "PopoversSmallInlineImage")}
      {...rest}
    >
      <PopoversSmallIcons
        width="256px"
        height="40px"
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
        {...getOverrideProps(overrides, "Editor / Popovers / Text editor")}
      ></PopoversSmallIcons>
    </View>
  );
}
