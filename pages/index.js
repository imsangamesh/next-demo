import Image from "next/image";
import styles from "../styles/Home.module.css";
import diva from "../public/diva.jpg";
import beyond from "../public/beyond.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import the library
import { library } from "@fortawesome/fontawesome-svg-core";

// import your icons
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faCompass, faBell } from "@fortawesome/free-regular-svg-icons";

library.add(
  faBars,
  faCompass,
  faMagnifyingGlass,
  faBell
  // more icons go here
);

import { Nunito_Sans } from "@next/font/google";

const nunito_sans = Nunito_Sans({
  weight: "700",
});

export default function Home() {
  return (
    <div className={styles.box}>
      <div className={styles.row}>
        {/* -------------------- nav bar ---------------- */}
        <nav className={styles.navbar}>
          <div className={styles.navElementsBlock}>
            <div className={styles.navElm}>
              <h1>
                <FontAwesomeIcon icon={faBars} />
              </h1>
            </div>
            <div className={styles.navElm}>
              <Image src={beyond} width={50} height={50} />
            </div>
            <div className={styles.navSelectors}>
              <h1>
                <FontAwesomeIcon className={styles.icon} icon={faCompass} />
              </h1>
            </div>
            <div className={styles.navSelectors}>
              <h1>
                <FontAwesomeIcon className={styles.icon} icon={faCompass} />
              </h1>
            </div>
          </div>
          <div className={styles.navElm}>
            <span className={styles.profile}>
              <Image
                className={styles.profileImage}
                src={diva}
                width={50}
                height={50}
              />
            </span>
          </div>
        </nav>
        {/* -------------------- body ---------------- */}
        <div className={styles.body}>
          <div className={styles.header}>
            <div className={styles.nameSection}>
              <span className={styles.doctor}>Hi Dr. Rajeev Premnath,</span>
              <br />
              <span className={`${nunito_sans.className} ${styles.welcome}`}>
                Welcome back 👋
              </span>
            </div>
            <div className={styles.headerEnd}>
              <span className={styles.searchBar}>
                <span>
                  <FontAwesomeIcon
                  icon="magnifying-glass"
                  // className={styles.searchIcon}
                />
                </span>
                <input
                  type="text"
                  placeholder="Search"
                  className={styles.input}
                />
              </span>
              <span className={styles.bell}>
                <FontAwesomeIcon icon={faBell} className={styles.bellIcon} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
