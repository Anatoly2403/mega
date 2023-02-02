import { MouseEventHandler, memo } from "react";
import style from "./style.module.scss";
import { Typography } from "components/ui/Typography";
import { Button } from "components/ui/Button";
import { IProduct } from "modules/products/types";
import { updateCart } from "modules/products/slices";
import { useDispatch } from "react-redux";

interface IProps {
  product: IProduct;
}

export const ProductCard = memo<IProps>(({ product }) => {
  const dispatch = useDispatch();
  const { description, image, price, rating, title, id } = product;

  const handleButtonClick: MouseEventHandler<HTMLButtonElement> = () => {
    dispatch(
      updateCart({
        price,
        productId: id,
      }),
    );
  };

  return (
    <div className={style.card}>
      <div className={style.product}>
        <div className={style.product__mainInfo}>
          <div className={style.product__image}>
            <img src={image} alt='product' />
          </div>

          <Typography
            className={style.product__title}
            variant='title'
            element='h2'
          >
            {title}
          </Typography>
          <Typography
            className={style.product__text}
            variant='text'
            element='p'
          >
            {description}
          </Typography>
        </div>
        <div className={style.product__info}>
          <Typography className={style.product__price} variant='title'>
            {price}&nbsp;$
          </Typography>
          <Typography className={style.product__rating} variant='textBold'>
            {rating.rate}
          </Typography>
        </div>
      </div>
      <Button className={style.card__button} onClick={handleButtonClick}>
        Купить
      </Button>
    </div>
  );
});
