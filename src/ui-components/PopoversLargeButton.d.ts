/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
import { ControlsSelectDefaultProps } from "./ControlsSelectDefault";
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
export declare type PopoversLargeButtonOverridesProps = {
    PopoversLargeButton?: PrimitiveOverrideProps<ViewProps>;
    "Popovers / Settings / Default"?: PrimitiveOverrideProps<ViewProps>;
    "Controls / Select / Default"?: ControlsSelectDefaultProps;
    "Group 4"?: PrimitiveOverrideProps<ViewProps>;
    "Background colour"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 2.21143822"?: PrimitiveOverrideProps<ViewProps>;
    Choose1143823?: PrimitiveOverrideProps<TextProps>;
    "Group 4.1"?: PrimitiveOverrideProps<ViewProps>;
    "Text colour"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 2.21143872"?: PrimitiveOverrideProps<ViewProps>;
    Choose1143873?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type PopoversLargeButtonProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: PopoversLargeButtonOverridesProps | undefined | null;
}>;
export default function PopoversLargeButton(props: PopoversLargeButtonProps): React.ReactElement;
