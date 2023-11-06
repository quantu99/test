import styles from './Navbar.module.css';
function Navbar({ setX, handle }) {
    return (
        <div className={styles.container}>
            <div className={styles.navbar}>
                <ul className={styles.list}>
                    <li onClick={() => setX(3)} className={styles.line}>
                        3 lines
                    </li>
                    <li onClick={() => setX(5)} className={styles.line}>
                        5 lines
                    </li>
                    <li onClick={() => setX(7)} className={styles.line}>
                        7 lines
                    </li>
                    <li onClick={() => setX(10)} className={styles.line}>
                        10 lines
                    </li>
                    <li onClick={() => setX(15)} className={styles.line}>
                        15 lines
                    </li>
                    <li onClick={() => setX(20)} className={styles.line}>
                        20 lines
                    </li>
                    <li onClick={() => setX(25)} className={styles.line}>
                        25 lines
                    </li>
                    <button onClick={handle} className={styles.btnAll}>
                        Quick choose all
                    </button>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
