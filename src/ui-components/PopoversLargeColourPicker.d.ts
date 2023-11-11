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
export declare type PopoversLargeColourPickerOverridesProps = {
    PopoversLargeColourPicker?: PrimitiveOverrideProps<ViewProps>;
    "Popovers / Large / Colour Picker"?: PrimitiveOverrideProps<ViewProps>;
    "Popovers / Settings / Default"?: PrimitiveOverrideProps<ViewProps>;
    "Frame 16"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 316834949"?: PrimitiveOverrideProps<ViewProps>;
    Black?: PrimitiveOverrideProps<TextProps>;
    "#000000"?: PrimitiveOverrideProps<TextProps>;
    "Frame 16.1"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 316834953"?: PrimitiveOverrideProps<ViewProps>;
    "Woody Brown"?: PrimitiveOverrideProps<TextProps>;
    "#4A2C2C"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 4"?: PrimitiveOverrideProps<ViewProps>;
    "Frame 16.2"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 316834958"?: PrimitiveOverrideProps<ViewProps>;
    Roman?: PrimitiveOverrideProps<TextProps>;
    "Icons / Actions / More"?: PrimitiveOverrideProps<ViewProps>;
    "Frame 16.3"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 316834962"?: PrimitiveOverrideProps<ViewProps>;
    "Silver Rust"?: PrimitiveOverrideProps<TextProps>;
    "#CFC4C416834964"?: PrimitiveOverrideProps<TextProps>;
    "Frame 16.4"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 316834966"?: PrimitiveOverrideProps<ViewProps>;
    "Swiss Coffee"?: PrimitiveOverrideProps<TextProps>;
    "#CFC4C416834968"?: PrimitiveOverrideProps<TextProps>;
    "Frame 16.5"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 316834970"?: PrimitiveOverrideProps<ViewProps>;
    "Add new color"?: PrimitiveOverrideProps<TextProps>;
    "Icons / Actions / Add"?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type PopoversLargeColourPickerProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: PopoversLargeColourPickerOverridesProps | undefined | null;
}>;
export default function PopoversLargeColourPicker(props: PopoversLargeColourPickerProps): React.ReactElement;
