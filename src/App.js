import { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import styles from './App.module.css';

function App() {
    const [x, setX] = useState(6);
    const [y, setY] = useState(70);
    const [selectedNumbers, setSelectedNumbers] = useState([]);

    const handleQuickChoose = () => {
        const newSelectedNumbers = [];
        for (let i = 0; i < x; i++) {
            const randomNumbers = [];
            while (randomNumbers.length < 5) {
                const randomNumber = Math.floor(Math.random() * y) + 1;
                if (!randomNumbers.includes(randomNumber)) {
                    randomNumbers.push(randomNumber);
                }
            }
            newSelectedNumbers.push(randomNumbers);
        }

        setSelectedNumbers(newSelectedNumbers);
    };
    const handleQuickChooseForPer = (index) => {
        const randomNumbers = [];
        while (randomNumbers.length < 5) {
            const randomNumber = Math.floor(Math.random() * y) + 1;
            if (!randomNumbers.includes(randomNumber)) {
                randomNumbers.push(randomNumber);
            }
        }
        const updatedSelectedNumbers = [...selectedNumbers];
        updatedSelectedNumbers[index] = randomNumbers;
        setSelectedNumbers(updatedSelectedNumbers);
    };
    const handleItemSelection = (itemIndex, j) => {
        if (selectedNumbers.length === 0 || !selectedNumbers[itemIndex]) {
            const updatedSelectedNumbers = [...selectedNumbers];
            updatedSelectedNumbers[itemIndex] = [];
            if (updatedSelectedNumbers[itemIndex].includes(j + 1)) {
                updatedSelectedNumbers[itemIndex] = updatedSelectedNumbers[itemIndex].filter(
                    (number) => number !== j + 1,
                );
            } else {
                updatedSelectedNumbers[itemIndex].push(j + 1);
            }

            setSelectedNumbers(updatedSelectedNumbers);
        } else {
            const updatedSelectedNumbers = [...selectedNumbers];

            if (updatedSelectedNumbers[itemIndex].includes(j + 1)) {
                updatedSelectedNumbers[itemIndex] = updatedSelectedNumbers[itemIndex].filter(
                    (number) => number !== j + 1,
                );
            } else {
                updatedSelectedNumbers[itemIndex].push(j + 1);
            }
            setSelectedNumbers(updatedSelectedNumbers);
        }
    };

    return (
        <div>
            <h1 className={styles.title}>TEST</h1>
            <div className={styles.container}>
                <Navbar handle={handleQuickChoose} setX={setX} />
                <div className={styles.boxContainer}>
                    {Array.from({ length: x }, (_, i) => (
                        <div className={styles.box} key={i}>
                            <button onClick={() => handleQuickChooseForPer(i)} className={styles.btn}>
                                Quick choose
                            </button>
                            <div className={styles.itemContainer}>
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
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
