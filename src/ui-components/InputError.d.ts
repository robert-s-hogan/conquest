/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { InputActiveProps } from "./InputActive";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type InputErrorOverridesProps = {
    InputError?: PrimitiveOverrideProps<ViewProps>;
    "Input / Active"?: InputActiveProps;
    Error?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type InputErrorProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: InputErrorOverridesProps | undefined | null;
}>;
export default function InputError(props: InputErrorProps): React.ReactElement;
