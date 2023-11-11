/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Icon, Image, View } from "@aws-amplify/ui-react";
export default function ImageUploaded(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="424px"
      height="248px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "ImageUploaded")}
      {...rest}
    >
      <Image
        width="100%"
        height="100%"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        borderRadius="8px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "Rectangle")}
      ></Image>
      <Icon
        width="24px"
        height="24px"
        viewBox={{ minX: 0, minY: 0, width: 24, height: 24 }}
        paths={[
          {
            d: "M22 12C22 17.5228 17.5228 22 12 22L12 26C19.732 26 26 19.732 26 12L22 12ZM12 22C6.47715 22 2 17.5228 2 12L-2 12C-2 19.732 4.26801 26 12 26L12 22ZM2 12C2 6.47715 6.47715 2 12 2L12 -2C4.26801 -2 -2 4.26801 -2 12L2 12ZM12 2C17.5228 2 22 6.47715 22 12L26 12C26 4.26801 19.732 -2 12 -2L12 2Z",
            stroke: "rgba(255,255,255,1)",
            fillRule: "nonzero",
            strokeWidth: 2,
          },
          {
            d: "M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12Z",
            fill: "rgba(0,0,0,0.5)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="calc(50% - 12px - 0px)"
        left="calc(50% - 12px - 0px)"
        {...getOverrideProps(overrides, "Ellipse")}
      ></Icon>
      <View
        padding="0px 0px 0px 0px"
        width="32px"
        height="32px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="6.45%"
        bottom="80.65%"
        left="88.68%"
        right="3.77%"
        {...getOverrideProps(overrides, "Group 4.11")}
      >
        <View
          width="32px"
          height="32px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          right="0px"
          boxShadow="0px 0px 5px rgba(0, 0, 0, 0.05000000074505806)"
          borderRadius="4px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(0,0,0,1)"
          {...getOverrideProps(overrides, "Rectangle 2")}
        ></View>
        <View
          width="24px"
          height="24px"
          {...getOverrideProps(overrides, "Icons / Actions / Close")}
        ></View>
      </View>
    </View>
  );
}
