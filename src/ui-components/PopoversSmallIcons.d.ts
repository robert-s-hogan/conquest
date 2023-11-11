/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ViewProps } from "@aws-amplify/ui-react";
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
export declare type PopoversSmallIconsOverridesProps = {
    "1"?: PrimitiveOverrideProps<ViewProps>;
    "2"?: PrimitiveOverrideProps<ViewProps>;
    "3"?: PrimitiveOverrideProps<ViewProps>;
    "4"?: PrimitiveOverrideProps<ViewProps>;
    "5"?: PrimitiveOverrideProps<ViewProps>;
    "6"?: PrimitiveOverrideProps<ViewProps>;
    "7"?: PrimitiveOverrideProps<ViewProps>;
    "8"?: PrimitiveOverrideProps<ViewProps>;
    PopoversSmallIcons?: PrimitiveOverrideProps<ViewProps>;
    Rectangle?: PrimitiveOverrideProps<ViewProps>;
    Icons?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type PopoversSmallIconsProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: PopoversSmallIconsOverridesProps | undefined | null;
}>;
export default function PopoversSmallIcons(props: PopoversSmallIconsProps): React.ReactElement;
