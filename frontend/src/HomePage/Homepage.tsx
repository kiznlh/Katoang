import React from 'react';
import Navbar from './Navbar/Navbar';
import styles from './Homepage.module.css';
const HomePage: React.FC = () => {
    return (
        <>
            <Navbar username="Alice" />
            {/* Create Room Button */}
            <button className={styles.button}>Create Room</button>
            
            {/* Room List */}
            <ul>
                {/* Room list items */}
            </ul>
        </>
    );
};

export default HomePage;