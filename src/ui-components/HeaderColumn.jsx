/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, Text, View } from "@aws-amplify/ui-react";
export default function HeaderColumn(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="8px"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      overflow="hidden"
      position="relative"
      padding="8px 0px 8px 0px"
      {...getOverrideProps(overrides, "HeaderColumn")}
      {...rest}
    >
      <Text
        fontFamily="Avenir Next"
        fontSize="12px"
        fontWeight="600"
        color="rgba(141,144,145,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Name"
        {...getOverrideProps(overrides, "Name")}
      ></Text>
      <View
        width="24px"
        height="24px"
        {...getOverrideProps(overrides, "Icons / Table / Sort")}
      ></View>
    </Flex>
  );
}
