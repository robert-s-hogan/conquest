/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
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
export declare type PopoversLargeTextOverridesProps = {
    "0"?: PrimitiveOverrideProps<TextProps>;
    "1"?: PrimitiveOverrideProps<TextProps>;
    "2"?: PrimitiveOverrideProps<TextProps>;
    "20"?: PrimitiveOverrideProps<TextProps>;
    "40"?: PrimitiveOverrideProps<TextProps>;
    "60"?: PrimitiveOverrideProps<TextProps>;
    "80"?: PrimitiveOverrideProps<TextProps>;
    PopoversLargeText?: PrimitiveOverrideProps<ViewProps>;
    "Popovers / Settings / Default"?: PrimitiveOverrideProps<ViewProps>;
    "Background image"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 2"?: PrimitiveOverrideProps<ViewProps>;
    "Text colour"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 2.1"?: PrimitiveOverrideProps<ViewProps>;
    Choose241165?: PrimitiveOverrideProps<TextProps>;
    "Background colour"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 2.2"?: PrimitiveOverrideProps<ViewProps>;
    Choose241168?: PrimitiveOverrideProps<TextProps>;
    Padding?: PrimitiveOverrideProps<TextProps>;
    Group241170?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 2.3241171"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 3241172"?: PrimitiveOverrideProps<ViewProps>;
    Enter?: PrimitiveOverrideProps<TextProps>;
    "Order on mobile"?: PrimitiveOverrideProps<TextProps>;
    Group28435?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 2.328436"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 328437"?: PrimitiveOverrideProps<ViewProps>;
    "Icons / Actions / Image"?: PrimitiveOverrideProps<ViewProps>;
    "Icons / Actions / Arrow-Up"?: PrimitiveOverrideProps<ViewProps>;
    "Icons / Actions / Arrow-Down"?: PrimitiveOverrideProps<ViewProps>;
    "Icons / Actions / Duplicate"?: PrimitiveOverrideProps<ViewProps>;
    "Icons / Actions / Delete"?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type PopoversLargeTextProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: PopoversLargeTextOverridesProps | undefined | null;
}>;
export default function PopoversLargeText(props: PopoversLargeTextProps): React.ReactElement;
