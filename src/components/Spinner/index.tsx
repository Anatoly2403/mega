import { memo } from "react";
import style from "./style.module.scss";

export const Spinner = memo(() => {
  return <span className={style.spinner} />;
});
