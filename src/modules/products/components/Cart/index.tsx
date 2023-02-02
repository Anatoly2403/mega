import style from "./style.module.scss";
import { memo } from "react";
import { ReactComponent as CartIcon } from "assets/icons/cart.svg";
import { Typography } from "components/ui/Typography";
import { useSelector } from "react-redux";
import { RootState } from "store";

export const Cart = memo(() => {
  const { products, totalPrice } = useSelector(
    (store: RootState) => store.cart,
  );

  return (
    <div className={style.cart}>
      <Typography className={style.cart__price} variant='title'>
        {totalPrice}$
      </Typography>
      <div className={style.cart__divider} />
      <div className={style.cart__items}>
        <CartIcon />
        <Typography variant='title'>{products.length}</Typography>
      </div>
    </div>
  );
});
