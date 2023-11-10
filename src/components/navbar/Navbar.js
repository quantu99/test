import styles from './Navbar.module.css';
function Navbar({ setBox, handle, handleSelect, handleSelectSecond }) {
    const handleClick = () => {
        handleSelect([]);
        handleSelectSecond([]);
    };
    return (
        <div className={styles.container}>
            <div className={styles.navbar}>
                <ul className={styles.list}>
                    <li onClick={() => setBox(3)} className={styles.line}>
                        3 lines
                    </li>
                    <li onClick={() => setBox(5)} className={styles.line}>
                        5 lines
                    </li>
                    <li onClick={() => setBox(7)} className={styles.line}>
                        7 lines
                    </li>
                    <li onClick={() => setBox(10)} className={styles.line}>
                        10 lines
                    </li>
                    <li onClick={() => setBox(15)} className={styles.line}>
                        15 lines
                    </li>
                    <li onClick={() => setBox(20)} className={styles.line}>
                        20 lines
                    </li>
                    <li onClick={() => setBox(25)} className={styles.line}>
                        25 lines
                    </li>
                    <button onClick={handle} className={styles.btnAll}>
                        Quick choose all
                    </button>
                    <button onClick={handleClick} className={styles.btnRemove}>
                        Clear
                    </button>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
