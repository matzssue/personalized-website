import { NavLink } from "react-router-dom";
import styles from "./NavLinks.module.scss";

type NavigationLinks = {
  link: string;
  linkName: string;
};

export const NavLinks = ({
  navigationLinks,
}: {
  navigationLinks: NavigationLinks[];
}) => {
  return (
    <ul className={styles["link-list"]}>
      {navigationLinks.map(({ link, linkName }) => (
        <li key={linkName}>
          <NavLink
            to={`${link}`}
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            {linkName}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
