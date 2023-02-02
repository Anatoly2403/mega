import React, { PropsWithChildren, memo } from "react";
import style from "./style.module.scss";
import cn from "classnames";

export const ELEMENT = {
  p: "p",
  h2: "h2",
  span: "span",
} as const;

export const VARIANT = {
  text: "text",
  textBold: "textBold",
  title: "title",
  contentTitle: "contentTitle",
} as const;

interface IProps {
  className?: string;
  element?: keyof typeof ELEMENT;
  variant?: keyof typeof VARIANT;
}

export const Typography = memo<PropsWithChildren<IProps>>(
  ({ element, children, variant = VARIANT.text, className }) => {
    const Component = element || ELEMENT.span;

    return (
      <Component className={cn(className, style[variant])}>
        {children}
      </Component>
    );
  },
);
