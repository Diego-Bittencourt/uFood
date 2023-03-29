import HeaderCartButton from "./HeaderCartButton";
import Cart from "../Cart/Cart";
import { useState } from "react";

//importing the image and inserting in the img tag
import  donutBuffet from "../../assets/background.jpg";

import styles from "./Header.module.css";

const Header = props => {

    const [isCartVisible, setIsCartVisible] = useState(false);

    const toggleCart = () => {
        console.log("working")
        setIsCartVisible(() => {return !isCartVisible})
    };

    return (
        <>
        <header className={styles.header}>
            <h1>uFood{isCartVisible}</h1>
            <HeaderCartButton onClick={toggleCart}>Cart</HeaderCartButton>
        </header>
        <div className={styles['main-image']}>
            <img src={donutBuffet} alt="uFood" />
        </div>
        { isCartVisible && <Cart toggleCart={toggleCart}/> }
        </>
    )
};

export default Header;