import HeaderCartButton from "./HeaderCartButton";

//importing the image and inserting in the img tag
import  donutBuffet from "../../assets/background.jpg";

import styles from "./Header.module.css";

const Header = props => {
    return (
        <>
        <header className={styles.header}>
            <h1>uFood</h1>
            <HeaderCartButton >Cart</HeaderCartButton>
        </header>
        <div className={styles['main-image']}>
            <img src={donutBuffet} alt="uFood" />
        </div>
        </>
    )
};

export default Header;