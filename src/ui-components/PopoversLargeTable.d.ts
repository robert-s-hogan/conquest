/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
import { ControlsToggleOnProps } from "./ControlsToggleOn";
import { ControlsToggleOffProps } from "./ControlsToggleOff";
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
export declare type PopoversLargeTableOverridesProps = {
    "0"?: PrimitiveOverrideProps<TextProps>;
    "16"?: PrimitiveOverrideProps<TextProps>;
    "24"?: PrimitiveOverrideProps<TextProps>;
    "32"?: PrimitiveOverrideProps<TextProps>;
    "40"?: PrimitiveOverrideProps<TextProps>;
    PopoversLargeTable?: PrimitiveOverrideProps<ViewProps>;
    "Popovers / Settings / Default"?: PrimitiveOverrideProps<ViewProps>;
    "Scroll on mobile"?: PrimitiveOverrideProps<TextProps>;
    "Group 20"?: PrimitiveOverrideProps<ViewProps>;
    "Controls / Toggle / On"?: ControlsToggleOnProps;
    "Row hover"?: PrimitiveOverrideProps<TextProps>;
    "Controls / Toggle / Off16853"?: ControlsToggleOffProps;
    "Alternate row colour"?: PrimitiveOverrideProps<TextProps>;
    "Controls / Toggle / Off16859"?: ControlsToggleOffProps;
    "Group 22"?: PrimitiveOverrideProps<ViewProps>;
    "Text colour"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 2.1"?: PrimitiveOverrideProps<ViewProps>;
    Choose16836579?: PrimitiveOverrideProps<TextProps>;
    "Background colour"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 2.2"?: PrimitiveOverrideProps<ViewProps>;
    Choose16836582?: PrimitiveOverrideProps<TextProps>;
    Padding?: PrimitiveOverrideProps<TextProps>;
    Group?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 2.3"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 3"?: PrimitiveOverrideProps<ViewProps>;
    Enter?: PrimitiveOverrideProps<TextProps>;
    "Icons / Actions / Arrow-Up"?: PrimitiveOverrideProps<ViewProps>;
    "Icons / Actions / Arrow-Down"?: PrimitiveOverrideProps<ViewProps>;
    "Icons / Actions / Duplicate"?: PrimitiveOverrideProps<ViewProps>;
    "Icons / Actions / Delete"?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type PopoversLargeTableProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: PopoversLargeTableOverridesProps | undefined | null;
}>;
export default function PopoversLargeTable(props: PopoversLargeTableProps): React.ReactElement;
