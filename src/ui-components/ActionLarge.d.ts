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
export declare type ActionLargeOverridesProps = {
    ActionLarge?: PrimitiveOverrideProps<ViewProps>;
    Rectangle?: PrimitiveOverrideProps<ViewProps>;
    Items?: PrimitiveOverrideProps<ViewProps>;
    Frame804538?: PrimitiveOverrideProps<ViewProps>;
    Structure?: PrimitiveOverrideProps<TextProps>;
    "Reorder pages & languages"?: PrimitiveOverrideProps<TextProps>;
    "Icons / Actions / Text-block"?: PrimitiveOverrideProps<ViewProps>;
    Frame804542?: PrimitiveOverrideProps<ViewProps>;
    Blogs?: PrimitiveOverrideProps<TextProps>;
    "Manage blog posts"?: PrimitiveOverrideProps<TextProps>;
    "Icons / Actions / Page"?: PrimitiveOverrideProps<ViewProps>;
    Frame804546?: PrimitiveOverrideProps<ViewProps>;
    Forms?: PrimitiveOverrideProps<TextProps>;
    "Review form entries"?: PrimitiveOverrideProps<TextProps>;
    "Icons / Actions / Form"?: PrimitiveOverrideProps<ViewProps>;
    Frame804550?: PrimitiveOverrideProps<ViewProps>;
    Catalogs?: PrimitiveOverrideProps<TextProps>;
    "Manage content databases"?: PrimitiveOverrideProps<TextProps>;
    "Icons / Actions / Data"?: PrimitiveOverrideProps<ViewProps>;
    Frame804554?: PrimitiveOverrideProps<ViewProps>;
    Store?: PrimitiveOverrideProps<TextProps>;
    "Review orders & products"?: PrimitiveOverrideProps<TextProps>;
    "Icons / Actions / Cart"?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type ActionLargeProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: ActionLargeOverridesProps | undefined | null;
}>;
export default function ActionLarge(props: ActionLargeProps): React.ReactElement;
