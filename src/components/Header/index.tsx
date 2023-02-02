import style from "./style.module.scss";
import { memo } from "react";
import { ReactComponent as Logo } from "assets/icons/logo.svg";
import { Cart } from "modules/products/components/Cart";

export const Header = memo(() => {
  return (
    <div className={style.header}>
      <Logo className={style.header__logo} />
      <Cart />
    </div>
  );
});
