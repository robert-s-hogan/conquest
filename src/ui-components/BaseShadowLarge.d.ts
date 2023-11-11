/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { BaseGreyProps } from "./BaseGrey";
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
export declare type BaseShadowLargeOverridesProps = {
    BaseShadowLarge?: PrimitiveOverrideProps<ViewProps>;
    "Base / Shadow"?: BaseGreyProps;
} & EscapeHatchProps;
export declare type BaseShadowLargeProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: BaseShadowLargeOverridesProps | undefined | null;
}>;
export default function BaseShadowLarge(props: BaseShadowLargeProps): React.ReactElement;
