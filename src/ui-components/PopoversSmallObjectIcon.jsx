/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Icon, Text, View } from "@aws-amplify/ui-react";
export default function PopoversSmallObjectIcon(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="152px"
      height="40px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "PopoversSmallObjectIcon")}
      {...rest}
    >
      <View
        width="152px"
        height="40px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0px"
        left="0px"
        right="0px"
        boxShadow="0px 0px 5px rgba(0, 0, 0, 0.05000000074505806)"
        borderRadius="4px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(27,33,36,1)"
        {...getOverrideProps(overrides, "Rectangle68125")}
      ></View>
      <View
        padding="0px 0px 0px 0px"
        width="96px"
        height="40px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0px"
        left="0px"
        {...getOverrideProps(overrides, "Group")}
      >
        <Icon
          width="96px"
          height="40px"
          viewBox={{ minX: 0, minY: 0, width: 96, height: 40 }}
          paths={[
            {
              d: "M0 4C0 1.79086 1.79086 0 4 0L96 0L96 40L4 40C1.79086 40 0 38.2091 0 36L0 4Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          right="0px"
          {...getOverrideProps(overrides, "Rectangle68126")}
        ></Icon>
        <View
          width="24px"
          height="24px"
          {...getOverrideProps(overrides, "Icons / Actions / More")}
        ></View>
        <Text
          fontFamily="Avenir Next"
          fontSize="14px"
          fontWeight="500"
          color="rgba(255,255,255,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="46px"
          height="24px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="8px"
          left="10px"
          right="40px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Object"
          {...getOverrideProps(overrides, "Objects")}
        ></Text>
      </View>
      <Text
        fontFamily="Avenir Next"
        fontSize="14px"
        fontWeight="500"
        color="rgba(255,255,255,1)"
        lineHeight="24px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="40px"
        height="24px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="20%"
        bottom="20%"
        right="8px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Done"
        {...getOverrideProps(overrides, "Label")}
      ></Text>
    </View>
  );
}
