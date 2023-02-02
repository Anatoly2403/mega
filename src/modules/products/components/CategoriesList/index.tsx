import { useGetCategoriesQuery } from "modules/products/api";
import { memo } from "react";
import style from "./style.module.scss";
import { Typography } from "components/ui/Typography";
import { ProductList } from "../ProductList";
import { Spinner } from "components/Spinner";

export const CategoriesList = memo(({}) => {
  const { isLoading, data } = useGetCategoriesQuery();

  if (isLoading) return <Spinner />;

  return (
    <>
      {data?.map((category) => {
        return (
          <div key={category} className={style.category}>
            <Typography
              className={style.title}
              variant='contentTitle'
              element='h2'
            >
              {category}
            </Typography>
            <ProductList category={category} />
          </div>
        );
      })}
    </>
  );
});
