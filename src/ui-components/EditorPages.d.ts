/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { LabelsSmallGreyProps } from "./LabelsSmallGrey";
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
export declare type EditorPagesOverridesProps = {
    EditorPages?: PrimitiveOverrideProps<ViewProps>;
    Rectangle?: PrimitiveOverrideProps<ViewProps>;
    Group3161278?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 2"?: PrimitiveOverrideProps<ViewProps>;
    "Icons / Actions / More"?: PrimitiveOverrideProps<ViewProps>;
    Homepage?: PrimitiveOverrideProps<TextProps>;
    "Group 23161282"?: PrimitiveOverrideProps<ViewProps>;
    Eng?: PrimitiveOverrideProps<TextProps>;
    "Icons / Actions / Arrow-Down"?: PrimitiveOverrideProps<ViewProps>;
    Group3161286?: PrimitiveOverrideProps<ViewProps>;
    About?: PrimitiveOverrideProps<TextProps>;
    Group3161289?: PrimitiveOverrideProps<ViewProps>;
    Menu?: PrimitiveOverrideProps<TextProps>;
    Group3161292?: PrimitiveOverrideProps<ViewProps>;
    Gallery?: PrimitiveOverrideProps<TextProps>;
    Group3161295?: PrimitiveOverrideProps<ViewProps>;
    Reviews?: PrimitiveOverrideProps<TextProps>;
    Group3161298?: PrimitiveOverrideProps<ViewProps>;
    Resevations?: PrimitiveOverrideProps<TextProps>;
    "Labels / Small / Grey"?: LabelsSmallGreyProps;
    Group3161301?: PrimitiveOverrideProps<ViewProps>;
    "Add page"?: PrimitiveOverrideProps<TextProps>;
    "Icons / Actions / Add"?: PrimitiveOverrideProps<ViewProps>;
    Pages?: PrimitiveOverrideProps<TextProps>;
    "Icons / Actions / Close"?: PrimitiveOverrideProps<ViewProps>;
    "Group 23225"?: PrimitiveOverrideProps<ViewProps>;
    Group3222?: PrimitiveOverrideProps<ViewProps>;
    "VIP Resevations"?: PrimitiveOverrideProps<TextProps>;
    "Line 2"?: PrimitiveOverrideProps<IconProps>;
    "Not in the menu"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type EditorPagesProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: EditorPagesOverridesProps | undefined | null;
}>;
export default function EditorPages(props: EditorPagesProps): React.ReactElement;
