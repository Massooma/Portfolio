import React, { PropsWithChildren } from "react";
import cn from "classnames";
export const Section = (props : PropsWithChildren<{className?:string}>) => {
    return (
        <section className = {cn("max-w-4xl px-4 m-auto", props.className)}>
            {props.children}
        </section>
    );
};