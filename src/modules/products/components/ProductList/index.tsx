import { memo } from "react";
import style from "./style.module.scss";
import { ProductCard } from "modules/products/components/ProductCard";
import { useGetProductsByCategoryQuery } from "modules/products/api";
import { Spinner } from "components/Spinner";

interface IProps {
  category: string;
}

export const ProductList = memo<IProps>(({ category }) => {
  const { isLoading, data } = useGetProductsByCategoryQuery(category);

  if (isLoading) return <Spinner />;

  return (
    <div className={style.list}>
      {data?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
});
