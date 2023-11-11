/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { InputDefaultProps } from "./InputDefault";
import { FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type InputActiveOverridesProps = {
    InputActive?: PrimitiveOverrideProps<ViewProps>;
    "Input / Default"?: InputDefaultProps;
    "Frame 28"?: PrimitiveOverrideProps<FlexProps>;
    Label?: PrimitiveOverrideProps<TextProps>;
    "Type indicator"?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type InputActiveProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: InputActiveOverridesProps | undefined | null;
}>;
export default function InputActive(props: InputActiveProps): React.ReactElement;
