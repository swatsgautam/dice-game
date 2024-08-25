import {useState} from 'react'

const ThreeDice = () => {
    const [dice1, setDice1] = useState(2);
    const [dice2, setDice2] = useState(5);
    const [dice3, setDice3] = useState(6);
    const [message, setMessage] = useState('');

    const rollDice = () => {
        const roll1 = Math.floor(Math.random() * 6) + 1;
        const roll2 = Math.floor(Math.random() * 6) + 1;
        const roll3 = Math.floor(Math.random() * 6) + 1;

        setDice1(roll1);
        setDice2(roll2);
        setDice3(roll3);

        if (roll1 === roll2 && roll2 === roll3) {
        setMessage('You Win!');
        } else {
        setMessage('Try Again!');
        }
    };
    return (
        <div className="dice_roller">
            <h3><span>Roll the same number </span>{message}</h3>
            <div className="dice-container">
                {dice1 !== null && dice2 !== null && dice3 !== null && (
                <>
                    <div className="dice">{dice1}</div>
                    <div className="dice">{dice2}</div>
                    <div className="dice">{dice3}</div>
                </>
                )}
            </div>
            <button onClick={rollDice}>Roll Dice</button>      
        </div>
    )
}

export default ThreeDice
