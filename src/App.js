import { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import styles from './App.module.css';

function App() {
    const [box, setBox] = useState(6);
    const [y, setY] = useState(70);
    const [z, setZ] = useState(25);
    const [selectedNumbers, setSelectedNumbers] = useState([]);
    const [selectedNumbersSecond, setSelectedNumbersSecond] = useState([]);
    const handleQuickChoose = () => {
        const newSelectedNumbers = [];
        const newSelectedNumbersSecond = [];
        for (let i = 0; i < box; i++) {
            const randomNumbers = [];
            const randomNumbersSecond = [];
            while (randomNumbers.length < 5) {
                const randomNumber = Math.floor(Math.random() * y) + 1;
                if (!randomNumbers.includes(randomNumber)) {
                    randomNumbers.push(randomNumber);
                }
            }
            while (randomNumbersSecond < 1) {
                const randomNumberSecond = Math.floor(Math.random() * z) + 1;
                if (!randomNumbersSecond.includes(randomNumberSecond)) {
                    randomNumbersSecond.push(randomNumberSecond);
                }
            }
            newSelectedNumbers.push(randomNumbers);
            newSelectedNumbersSecond.push(randomNumbersSecond);
        }
        setSelectedNumbers(newSelectedNumbers);
        setSelectedNumbersSecond(newSelectedNumbersSecond);
    };
    const handleQuickChooseForPer = (index) => {
        const randomNumbers = [];
        const randomNumbersSecond = [];
        while (randomNumbers.length < 5) {
            const randomNumber = Math.floor(Math.random() * y) + 1;
            if (!randomNumbers.includes(randomNumber)) {
                randomNumbers.push(randomNumber);
            }
        }
        while (randomNumbersSecond < 1) {
            const randomNumberSecond = Math.floor(Math.random() * z) + 1;
            if (!randomNumbersSecond.includes(randomNumberSecond)) {
                randomNumbersSecond.push(randomNumberSecond);
            }
        }
        const updatedSelectedNumbers = [...selectedNumbers];
        const updatedSelectedNumbersSecond = [...selectedNumbersSecond];
        updatedSelectedNumbers[index] = randomNumbers;
        updatedSelectedNumbersSecond[index] = randomNumbersSecond;
        setSelectedNumbers(updatedSelectedNumbers);
        setSelectedNumbersSecond(updatedSelectedNumbersSecond);
    };

    const handleItemSelection = (itemIndex, j, n) => {
        const selectedItems = selectedNumbers[itemIndex] || [];
        const isSelected = selectedItems.includes(j + 1);
        if (isSelected) {
            const updatedSelectedItems = selectedItems.filter((item) => item !== j + 1);
            setSelectedNumbers((prevSelectedNumbers) => {
                const updatedSelectedNumbersCopy = [...prevSelectedNumbers];
                updatedSelectedNumbersCopy[itemIndex] = updatedSelectedItems;
                return updatedSelectedNumbersCopy;
            });
        } else {
            if (selectedItems.length === 5) {
                return;
            }
            const updatedSelectedItems = [...selectedItems];
            updatedSelectedItems.push(j + 1);
            setSelectedNumbers((prevSelectedNumbers) => {
                const updatedSelectedNumbersCopy = [...prevSelectedNumbers];
                updatedSelectedNumbersCopy[itemIndex] = updatedSelectedItems;
                return updatedSelectedNumbersCopy;
            });
        }
    };
    const handleItemSelectionSecond = (itemIndex, n) => {
        const selectedItemsSecond = selectedNumbersSecond[itemIndex] || [];
        const isSelectedSecond = selectedItemsSecond.includes(n + 1);
        if (isSelectedSecond) {
            const updatedSelectedItemsSecond = selectedItemsSecond.filter((item) => item !== n + 1);
            setSelectedNumbersSecond((prevSelectedNumbersSecond) => {
                const updatedSelectedNumbersSecondCopy = [...prevSelectedNumbersSecond];
                updatedSelectedNumbersSecondCopy[itemIndex] = updatedSelectedItemsSecond;
                return updatedSelectedNumbersSecondCopy;
            });
        } else {
            if (selectedItemsSecond.length === 1) {
                return;
            }
            const updatedSelectedItemsSecond = [...selectedItemsSecond];
            updatedSelectedItemsSecond.push(n + 1);
            setSelectedNumbersSecond((prevSelectedNumbersSecond) => {
                const updatedSelectedNumbersSecondCopy = [...prevSelectedNumbersSecond];
                updatedSelectedNumbersSecondCopy[itemIndex] = updatedSelectedItemsSecond;
                return updatedSelectedNumbersSecondCopy;
            });
        }
    };
    return (
        <div>
            <h1 className={styles.title}>TEST</h1>
            <div className={styles.container}>
                <Navbar handleSelect={setSelectedNumbers} handle={handleQuickChoose} setBox={setBox} />
                <div className={styles.boxContainer}>
                    {Array.from({ length: box }, (_, i) => (
                        <div className={styles.box} key={i}>
                            <button onClick={() => handleQuickChooseForPer(i)} className={styles.btn}>
                                Quick choose
                            </button>
                            <div className={styles.itemContainer}>
                                <p>+ Choose 5</p>
                                <div className={styles.numberContainer}>
                                    {Array.from({ length: y }, (_, j) => (
                                        <div
                                            onClick={() => {
                                                handleItemSelection(i, j);
                                            }}
                                            className={`${styles.item} ${
                                                selectedNumbers[i] && selectedNumbers[i].includes(j + 1)
                                                    ? styles.active
                                                    : ''
                                            }`}
                                        >
                                            {j + 1}
                                        </div>
                                    ))}
                                </div>
                                <p style={{ marginTop: '5px' }}>+ Choose 1</p>
                                <div className={styles.secondNumberContainer}>
                                    {Array.from({ length: z }, (_, n) => (
                                        <div
                                            onClick={() => {
                                                handleItemSelectionSecond(i, n);
                                            }}
                                            className={`${styles.item} ${
                                                selectedNumbersSecond[i] && selectedNumbersSecond[i].includes(n + 1)
                                                    ? styles.activeSecond
                                                    : ''
                                            }`}
                                        >
                                            {n + 1}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
