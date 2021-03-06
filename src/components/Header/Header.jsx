import { AppBar, Toolbar, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState } from "react";
import styles from "./Header.module.css";
import SideDrawer from "./SideDrawer";

const Header = React.forwardRef((props,ref) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleOpenDrawer = (isOpen) => (event) => {
    if (event &&event.type === "keydown" &&(event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setIsDrawerOpen(isOpen);
  };

  

  return (
    <div className={styles.wrapper} ref={ref}>
      <AppBar className={styles.mobileHeader} style={{ background: "#ffffff" }}>
        <Toolbar>
          <IconButton
            edge="start"
            aria-label="menu"
            onClick={toggleOpenDrawer(true)}
          >
            <MenuIcon className={styles.menuIcon} />
          </IconButton>
          <span className={styles.title}>
            Menu
          </span>
        </Toolbar>
      </AppBar>
      <SideDrawer
        closeDrawer={() => toggleOpenDrawer(false)}
        openDrawer={() => toggleOpenDrawer(true)}
        isDrawerOpen={isDrawerOpen}
        onChooseOptionHandler={props.onScrollHandler}
      />
      <header className={styles.header}>
        <span onClick={()=>props.onScrollHandler("home")}>HOME</span>
        <span onClick={()=>props.onScrollHandler("portfolio")}>PORTFOLIO</span>
        <span onClick={()=>props.onScrollHandler("resume")}>RESUME</span>
        <span onClick={()=>props.onScrollHandler("about")}>ABOUT</span>
        <span onClick={()=>props.onScrollHandler("contact")}>CONTACT</span>
      </header>
      <div className={styles.titles}>
        <span className={styles.helloText}>Hello, I'm</span>
        <span className={styles.nameText}>Kacper Wojak</span>
        <span className={styles.portfolioText}>AND THIS IS MY POTFOLIO</span>
      </div>
    </div>
  );
});
export default Header;
