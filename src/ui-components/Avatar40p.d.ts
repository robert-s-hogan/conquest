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
export declare type Avatar40pOverridesProps = {
    Avatar40p?: PrimitiveOverrideProps<ViewProps>;
    "Ellipse 1"?: PrimitiveOverrideProps<IconProps>;
    JM?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Avatar40pProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Avatar40pOverridesProps | undefined | null;
}>;
export default function Avatar40p(props: Avatar40pProps): React.ReactElement;
