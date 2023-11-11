/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { PopoversSmallText2IconsProps } from "./PopoversSmallText2Icons";
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
export declare type PopoversSmallMapOverridesProps = {
    PopoversSmallMap?: PrimitiveOverrideProps<ViewProps>;
    "Popovers / Small / Text + 2 Icons"?: PopoversSmallText2IconsProps;
    "Icons / Editor / Image-Scale"?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type PopoversSmallMapProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: PopoversSmallMapOverridesProps | undefined | null;
}>;
export default function PopoversSmallMap(props: PopoversSmallMapProps): React.ReactElement;
