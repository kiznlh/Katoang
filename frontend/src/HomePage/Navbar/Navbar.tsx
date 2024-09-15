import React from 'react';
import styles from './Navbar.module.css';
type NavbarProps = {
    username: string;
}
const Navbar: React.FC<NavbarProps> = ({ username }) => {
    return (
        <div className={styles.navbar}>
            <span>Welcome, {username}!</span>
            <button>Logout</button>
        </div>
    );
};

export default Navbar;