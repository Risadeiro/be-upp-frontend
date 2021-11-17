import {useState, useEffect} from 'react'
import styles from './Sidebar.module.css'
import {SidebarItems} from './SidebarItems';
import { Link } from 'react-router-dom';

const Sidebar = ({toggleState}) => {
  const [navClass, setNavClass] = useState(styles.lNavbar)
  const [linkActive, setLinkActive] = useState(0)

  useEffect(() => {
    if (toggleState) {
      setNavClass(`${styles.lNavbar} ${styles.show}`)
    }
    else {
      setNavClass(`${styles.lNavbar}`)
    }
  }, [toggleState])

  return (
    <div className={navClass} id="nav-bar">
      <nav className={styles.nav}>
        <div>
          <a href="/login" className={`${styles.a} ${styles.navLogo}`}>
            <i className={`bx bx-layer ${styles.navLogoIcon}`} />
            <span className={styles.navLogoName}>DAVID</span>
          </a>

          <div className={styles.navList}>
            {SidebarItems.map((item, index) => {
              return (
                <Link
                  onClick={() => setLinkActive(index)}
                  key={index} 
                  replace to={item.path} 
                  className={`${styles.a} ${styles.navLink} ${index === linkActive ? styles.active : ""}`}
                >
                  <i className={`bx ${item.icon} ${styles.navIcon}`} />
                  <span className={`${styles.navName}`}>{item.text}</span>
                </Link>
              )
            })}
          </div>
        </div>

        <a href="/login" className={`${styles.a} ${styles.navLink}`}>
          <i className={`bx bx-log-out ${styles.navIcon}`} /> <span className={`${styles.navName}`}>SignOut</span>
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;