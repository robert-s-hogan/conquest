/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
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
export declare type ControlsSelectListOverridesProps = {
    ControlsSelectList?: PrimitiveOverrideProps<FlexProps>;
    "Item 1"?: PrimitiveOverrideProps<ViewProps>;
    "Option 121805388"?: PrimitiveOverrideProps<TextProps>;
    "Item 2"?: PrimitiveOverrideProps<ViewProps>;
    "Option 121805390"?: PrimitiveOverrideProps<TextProps>;
    "Item 3"?: PrimitiveOverrideProps<ViewProps>;
    "Option 121805392"?: PrimitiveOverrideProps<TextProps>;
    "Item 4"?: PrimitiveOverrideProps<ViewProps>;
    "Option 121805394"?: PrimitiveOverrideProps<TextProps>;
    "Item 5"?: PrimitiveOverrideProps<ViewProps>;
    "Move under"?: PrimitiveOverrideProps<TextProps>;
    "Item 6"?: PrimitiveOverrideProps<ViewProps>;
    Delete?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ControlsSelectListProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: ControlsSelectListOverridesProps | undefined | null;
}>;
export default function ControlsSelectList(props: ControlsSelectListProps): React.ReactElement;
