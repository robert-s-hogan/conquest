/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Icon, View } from "@aws-amplify/ui-react";
export default function ControlsToggleOff(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="32px"
      height="16px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "ControlsToggleOff")}
      {...rest}
    >
      <View
        width="32px"
        height="16px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        borderRadius="100px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(239,239,239,1)"
        {...getOverrideProps(overrides, "Rectangle")}
      ></View>
      <Icon
        width="16px"
        height="16px"
        viewBox={{ minX: 0, minY: 0, width: 16, height: 16 }}
        paths={[
          {
            d: "M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8Z",
            fill: "rgba(204,204,204,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="50%"
        {...getOverrideProps(overrides, "Ellipse")}
      ></Icon>
    </View>
  );
}
