/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type ComponentsSearchDefaultOverridesProps = {
    ComponentsSearchDefault?: PrimitiveOverrideProps<ViewProps>;
    Rectangle?: PrimitiveOverrideProps<ViewProps>;
    Search?: PrimitiveOverrideProps<ViewProps>;
    "Stockholm icons / General / Search"?: PrimitiveOverrideProps<ViewProps>;
    "Path 2"?: PrimitiveOverrideProps<IconProps>;
    Path?: PrimitiveOverrideProps<IconProps>;
    "Search components"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ComponentsSearchDefaultProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: ComponentsSearchDefaultOverridesProps | undefined | null;
}>;
export default function ComponentsSearchDefault(props: ComponentsSearchDefaultProps): React.ReactElement;
