/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { LabelsSmallGreyProps } from "./LabelsSmallGrey";
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
export declare type LabelsSmallGreenOverridesProps = {
    LabelsSmallGreen?: PrimitiveOverrideProps<ViewProps>;
    "Labels / Small / Green"?: LabelsSmallGreyProps;
} & EscapeHatchProps;
export declare type LabelsSmallGreenProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: LabelsSmallGreenOverridesProps | undefined | null;
}>;
export default function LabelsSmallGreen(props: LabelsSmallGreenProps): React.ReactElement;
