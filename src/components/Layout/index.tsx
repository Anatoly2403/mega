import { FC, PropsWithChildren } from "react";
import style from "./style.module.scss";
import { Header } from "components/Header";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={style.layout}>
      <Header />
      <main>{children}</main>
    </div>
  );
};
