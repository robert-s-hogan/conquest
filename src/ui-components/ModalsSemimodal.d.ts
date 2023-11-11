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
export declare type ModalsSemimodalOverridesProps = {
    ModalsSemimodal?: PrimitiveOverrideProps<ViewProps>;
    "Group 2"?: PrimitiveOverrideProps<ViewProps>;
    Rectangle?: PrimitiveOverrideProps<ViewProps>;
    Title?: PrimitiveOverrideProps<TextProps>;
    "Icons / Actions / Close"?: PrimitiveOverrideProps<ViewProps>;
    Group?: PrimitiveOverrideProps<ViewProps>;
    "Small / Primary"?: PrimitiveOverrideProps<ViewProps>;
    "Small / Alternative"?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type ModalsSemimodalProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: ModalsSemimodalOverridesProps | undefined | null;
}>;
export default function ModalsSemimodal(props: ModalsSemimodalProps): React.ReactElement;
