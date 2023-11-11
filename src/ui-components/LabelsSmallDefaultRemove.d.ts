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
export declare type LabelsSmallDefaultRemoveOverridesProps = {
    LabelsSmallDefaultRemove?: PrimitiveOverrideProps<ViewProps>;
    Rectangle?: PrimitiveOverrideProps<ViewProps>;
    Label?: PrimitiveOverrideProps<TextProps>;
    "Icons / Actions / Close"?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type LabelsSmallDefaultRemoveProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: LabelsSmallDefaultRemoveOverridesProps | undefined | null;
}>;
export default function LabelsSmallDefaultRemove(props: LabelsSmallDefaultRemoveProps): React.ReactElement;
