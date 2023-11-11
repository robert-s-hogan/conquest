/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Icon, Text, View } from "@aws-amplify/ui-react";
export default function Avatar40p(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="40px"
      height="40px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Avatar40p")}
      {...rest}
    >
      <Icon
        width="40px"
        height="40px"
        viewBox={{ minX: 0, minY: 0, width: 40, height: 40 }}
        paths={[
          {
            d: "M40 20C40 31.0457 31.0457 40 20 40C8.9543 40 0 31.0457 0 20C0 8.9543 8.9543 0 20 0C31.0457 0 40 8.9543 40 20Z",
            fill: "rgba(27,33,36,1)",
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
        right="0%"
        {...getOverrideProps(overrides, "Ellipse 1")}
      ></Icon>
      <Text
        fontFamily="Avenir Next"
        fontSize="12px"
        fontWeight="600"
        color="rgba(255,255,255,1)"
        lineHeight="24px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="40px"
        height="38px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="5%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="JM"
        {...getOverrideProps(overrides, "JM")}
      ></Text>
    </View>
  );
}
