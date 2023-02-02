import { memo } from "react";
import style from "./style.module.scss";
import { CategoriesList } from "modules/products/components/CategoriesList";

export const Products = memo(() => {
  return (
    <div className={style.main}>
      <CategoriesList />
    </div>
  );
});
