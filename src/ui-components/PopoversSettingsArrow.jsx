/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Icon } from "@aws-amplify/ui-react";
export default function PopoversSettingsArrow(props) {
  const { overrides, ...rest } = props;
  return (
    <Icon
      width="256px"
      height="480px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      viewBox={{ minX: 0, minY: 0, width: 256, height: 480 }}
      paths={[
        {
          d: "M10.0446 1.51865C10.8363 0.692595 12.1583 0.697787 12.9434 1.53004L22.8205 12L0 12L10.0446 1.51865Z",
          fill: "rgba(196,196,196,1)",
          fillRule: "nonzero",
          style: {
            transform: "translate(calc(50% - 11.41px - -0.41px), undefined)",
          },
        },
      ]}
      {...getOverrideProps(overrides, "PopoversSettingsArrow")}
      {...rest}
    ></Icon>
  );
}
