/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ImageProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type ImageCropOverridesProps = {
    ImageCrop?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 2"?: PrimitiveOverrideProps<ImageProps>;
    "Rectangle 3"?: PrimitiveOverrideProps<ViewProps>;
    "Group 8"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 4282617"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 4.1282618"?: PrimitiveOverrideProps<ViewProps>;
    "Group 8.4"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 42861"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 4.12862"?: PrimitiveOverrideProps<ViewProps>;
    "Group 8.5"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 42864"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 4.12865"?: PrimitiveOverrideProps<ViewProps>;
    "Group 8.6"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 42867"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 4.12868"?: PrimitiveOverrideProps<ViewProps>;
    "Group 8.7"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 428610"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 4.128611"?: PrimitiveOverrideProps<ViewProps>;
    "Group 8.1"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 4282621"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 4.1282622"?: PrimitiveOverrideProps<ViewProps>;
    "Group 8.2"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 4282624"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 4.1282625"?: PrimitiveOverrideProps<ViewProps>;
    "Group 8.3"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 4282627"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 4.1282628"?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type ImageCropProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: ImageCropOverridesProps | undefined | null;
}>;
export default function ImageCrop(props: ImageCropProps): React.ReactElement;
