/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { IconProps, ImageProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type ImageUploadedOverridesProps = {
    ImageUploaded?: PrimitiveOverrideProps<ViewProps>;
    Rectangle?: PrimitiveOverrideProps<ImageProps>;
    Ellipse?: PrimitiveOverrideProps<IconProps>;
    "Group 4.11"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 2"?: PrimitiveOverrideProps<ViewProps>;
    "Icons / Actions / Close"?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type ImageUploadedProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: ImageUploadedOverridesProps | undefined | null;
}>;
export default function ImageUploaded(props: ImageUploadedProps): React.ReactElement;
