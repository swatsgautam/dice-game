import React, {useState} from 'react'

const TwoDice = () => {
    const [dice1, setDice1] = useState(4);
    const [dice2, setDice2] = useState(5);
    const [message, setMessage] = useState('');

    // Function to roll the dice
    const rollDice = () => {
        // Generate random values for dice (1-6)
        const roll1 = Math.floor(Math.random() * 6) + 1;
        const roll2 = Math.floor(Math.random() * 6) + 1;

        // Update state with dice values
        setDice1(roll1);
        setDice2(roll2);

        // Calculate the total and set the message
        const total = roll1 + roll2;
        if (total < 4) {
        setMessage('You Win!');
        } else {
        setMessage('Try Again!');
        }
    };
    return (
        <div className="dice_roller">
            <h3><span>Roll Less than 4 </span>{message}</h3>
            <div className="dice-container">
                {dice1 !== null && dice2 !== null && ( // Checks if both dice values are not null
                <>
                    <div className="dice">{dice1}</div>
                    <div className="dice">{dice2}</div>
                </>
                )}
            </div>
            <button onClick={rollDice}>Roll Dice</button>
        </div>
    )
}

export default TwoDice
