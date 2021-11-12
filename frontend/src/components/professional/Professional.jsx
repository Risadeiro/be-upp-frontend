// import { useLocation } from "react-router-dom";
import styles from './Professional.module.css';

const Professional = () => {
  // const location = useLocation();
  // const doctor = location.state.doctor

  document.addEventListener("DOMContentLoaded", function () {
    const showNavbar = (toggleId, navId, bodyId, headerId) => {
      const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId),
        bodypd = document.getElementById(bodyId),
        headerpd = document.getElementById(headerId)

      console.log(toggle, nav, bodypd, headerpd)

      // Validate that all variables exist
      if (toggle && nav && bodypd && headerpd) {
        toggle.addEventListener('click', () => {
          // show navbar
          nav.classList.toggle(styles.show)

          // change icon
          toggle.classList.toggle('bx-x')

          // add padding to body
          bodypd.classList.toggle(styles.bodyPd)

          // add padding to header
          headerpd.classList.toggle(styles.bodyPd)
        })
      }
    }

    showNavbar('header-toggle', 'nav-bar', 'body-pd', 'header')

    /*===== LINK ACTIVE =====*/
    const linkColor = document.querySelectorAll(styles.navLink)

    function colorLink() {
      if (linkColor) {
        linkColor.forEach(l => l.classList.remove(styles.active))
        this.classList.add(styles.active)
      }
    }
    linkColor.forEach(l => l.addEventListener('click', colorLink))

    // Your code to run since DOM is loaded and ready
  });

  return (
    <body className={styles.body} id="body-pd">

      <header className={styles.header} id="header">
        <div className={styles.headerToggle}>
          <i className='bx bx-menu' id="header-toggle" />
        </div>

        <p className={styles.headerName}>
          W
        </p>
      </header>

      <div className={styles.lNavbar} id="nav-bar">
        <nav className={styles.nav}>
          <div>
            <a href="/login" className={`${styles.a} ${styles.navLogo}`}>
              <i className={`bx bx-layer ${styles.navLogoIcon}`} />
              <span className={styles.navLogoName}>DAVID</span>
            </a>

            <div className={styles.navList}>
              <a href="/login" className={`${styles.a} ${styles.navLink} ${styles.active}`}>
                <i className={`bx bx-grid-alt ${styles.navIcon}`} />
                <span className={`${styles.navName}`}>Dashboard</span>
              </a>
              <a href="/login" className={`${styles.a} ${styles.navLink}`}>
                <i className={`bx bx-user ${styles.navIcon}`} />
                <span className={`${styles.navName}`}>Users</span>
              </a>
              <a href="/login" className={`${styles.a} ${styles.navLink}`}>
                <i className={`bx bx-message-square-detail ${styles.navIcon}`} />
                <span className={`${styles.navName}`}>Messages</span>
              </a>
              <a href="/login" className={`${styles.a} ${styles.navLink}`}>
                <i className={`bx bx-bookmark ${styles.navIcon}`} />
                <span className={`${styles.navName}`}>Bookmark</span>
              </a>
              <a href="/login" className={`${styles.a} ${styles.navLink}`}>
                <i className={`bx bx-folder ${styles.navIcon}`} />
                <span className={`${styles.navName}`}>Files</span>
              </a>
              <a href="/login" className={`${styles.a} ${styles.navLink}`}>
                <i className={`bx bx-bar-chart-alt-2 ${styles.navIcon}`} />
                <span className={`${styles.navName}`}>Stats</span>
              </a>
            </div>
          </div>

          <a href="/login" className={`${styles.a} ${styles.navLink}`}>
            <i className={`bx bx-log-out ${styles.navIcon}`} /> <span className={`${styles.navName}`}>SignOut</span>
          </a>
        </nav>
      </div>

      <div className={`${styles.height100} bg-light`}>
        <h4>Main Components</h4>
      </div>
    </body>
  );
};

export default Professional;