/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type PopoversLargeInlineImageOverridesProps = {
    "0"?: PrimitiveOverrideProps<TextProps>;
    "20"?: PrimitiveOverrideProps<TextProps>;
    "40"?: PrimitiveOverrideProps<TextProps>;
    "60"?: PrimitiveOverrideProps<TextProps>;
    "80"?: PrimitiveOverrideProps<TextProps>;
    PopoversLargeInlineImage?: PrimitiveOverrideProps<ViewProps>;
    "Popovers / Settings / Default"?: PrimitiveOverrideProps<ViewProps>;
    "Controls / Select / Default"?: ControlsSelectDefaultProps;
    "Edit image"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 2"?: PrimitiveOverrideProps<ImageProps>;
    "Group 4"?: PrimitiveOverrideProps<ViewProps>;
    "Overlay colour"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 2.2"?: PrimitiveOverrideProps<ViewProps>;
    Choose?: PrimitiveOverrideProps<TextProps>;
    "Group 3"?: PrimitiveOverrideProps<ViewProps>;
    Padding?: PrimitiveOverrideProps<TextProps>;
    Group11414640?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 2.311414641"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 311414642"?: PrimitiveOverrideProps<ViewProps>;
    Enter?: PrimitiveOverrideProps<TextProps>;
    "Group 2"?: PrimitiveOverrideProps<ViewProps>;
    Ratio?: PrimitiveOverrideProps<TextProps>;
    Group11414651?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 2.311414652"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 311414653"?: PrimitiveOverrideProps<ViewProps>;
    Auto?: PrimitiveOverrideProps<TextProps>;
    "2:1"?: PrimitiveOverrideProps<TextProps>;
    "3:2"?: PrimitiveOverrideProps<TextProps>;
    "4:3"?: PrimitiveOverrideProps<TextProps>;
    "1:1"?: PrimitiveOverrideProps<TextProps>;
    "Icons / Actions / Edit"?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type PopoversLargeInlineImageProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: PopoversLargeInlineImageOverridesProps | undefined | null;
}>;
export default function PopoversLargeInlineImage(props: PopoversLargeInlineImageProps): React.ReactElement;
