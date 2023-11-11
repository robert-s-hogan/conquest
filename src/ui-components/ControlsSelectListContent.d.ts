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
export declare type ControlsSelectListContentOverridesProps = {
    ControlsSelectListContent?: PrimitiveOverrideProps<ViewProps>;
    "Item 1"?: PrimitiveOverrideProps<ViewProps>;
    "Option 123382"?: PrimitiveOverrideProps<TextProps>;
    "Item 6"?: PrimitiveOverrideProps<ViewProps>;
    Delete23384?: PrimitiveOverrideProps<TextProps>;
    "Item 2"?: PrimitiveOverrideProps<ViewProps>;
    "Option 123386"?: PrimitiveOverrideProps<TextProps>;
    "Item 3"?: PrimitiveOverrideProps<ViewProps>;
    "Option 123388"?: PrimitiveOverrideProps<TextProps>;
    "Item 4"?: PrimitiveOverrideProps<ViewProps>;
    "Option 1233810"?: PrimitiveOverrideProps<TextProps>;
    "Item 5"?: PrimitiveOverrideProps<ViewProps>;
    "Move under"?: PrimitiveOverrideProps<TextProps>;
    "Item 7"?: PrimitiveOverrideProps<ViewProps>;
    Delete233814?: PrimitiveOverrideProps<TextProps>;
    "Item 8"?: PrimitiveOverrideProps<ViewProps>;
    Delete233816?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ControlsSelectListContentProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: ControlsSelectListContentOverridesProps | undefined | null;
}>;
export default function ControlsSelectListContent(props: ControlsSelectListContentProps): React.ReactElement;
