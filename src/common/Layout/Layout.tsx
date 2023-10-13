import { ReactNode } from "react";
import styles from "./Layout.module.scss";
import { NavLinks } from "../NavLinks/NavLinks";
import { navigationLinks } from "../../constants/navigationLinks";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.box}>
      <header>
        <p>Mateusz Kluska - Portfolio</p>
        <nav>
          <NavLinks navigationLinks={navigationLinks} />
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <p>Mateusz Kluska 2023 @ All rights reserved</p>
      </footer>
    </div>
  );
};
