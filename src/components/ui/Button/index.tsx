import { ButtonHTMLAttributes, memo } from "react";
import style from "./style.module.scss";
import cn from "classnames";
import { Typography } from "components/ui/Typography";

export const Button = memo<ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, children, ...rest }) => {
    return (
      <button {...rest} className={cn(className, style.button)}>
        <Typography variant='textBold'>{children}</Typography>
      </button>
    );
  },
);
