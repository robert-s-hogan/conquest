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
export declare type PopoversMediumActionsOverridesProps = {
    PopoversMediumActions?: PrimitiveOverrideProps<ViewProps>;
    Rectangle?: PrimitiveOverrideProps<ViewProps>;
    "Items mask"?: PrimitiveOverrideProps<ViewProps>;
    "Item 8"?: PrimitiveOverrideProps<ViewProps>;
    "Icons / Actions / Component6884"?: PrimitiveOverrideProps<ViewProps>;
    Code6885?: PrimitiveOverrideProps<TextProps>;
    "Item 7"?: PrimitiveOverrideProps<ViewProps>;
    "Icons / Actions / Component740712"?: PrimitiveOverrideProps<ViewProps>;
    Code740713?: PrimitiveOverrideProps<TextProps>;
    "Item 6"?: PrimitiveOverrideProps<ViewProps>;
    "Icons / Actions / Component740439"?: PrimitiveOverrideProps<ViewProps>;
    Code740440?: PrimitiveOverrideProps<TextProps>;
    "Item 5"?: PrimitiveOverrideProps<ViewProps>;
    "Icons / Actions / Component740202"?: PrimitiveOverrideProps<ViewProps>;
    Code740203?: PrimitiveOverrideProps<TextProps>;
    "Item 4"?: PrimitiveOverrideProps<ViewProps>;
    "Icons / Actions / Component7401"?: PrimitiveOverrideProps<ViewProps>;
    Code7402?: PrimitiveOverrideProps<TextProps>;
    "Item 3"?: PrimitiveOverrideProps<ViewProps>;
    "Icons / Actions / Layers"?: PrimitiveOverrideProps<ViewProps>;
    Object?: PrimitiveOverrideProps<TextProps>;
    "Item 2"?: PrimitiveOverrideProps<ViewProps>;
    "Icons / Actions / Image"?: PrimitiveOverrideProps<ViewProps>;
    Image?: PrimitiveOverrideProps<TextProps>;
    "Item 1"?: PrimitiveOverrideProps<ViewProps>;
    "Icons / Actions / Text-block"?: PrimitiveOverrideProps<ViewProps>;
    Text?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type PopoversMediumActionsProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: PopoversMediumActionsOverridesProps | undefined | null;
}>;
export default function PopoversMediumActions(props: PopoversMediumActionsProps): React.ReactElement;
