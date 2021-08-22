import React, { useEffect, useState } from 'react';
import './Timer.css';

function Timer() {

	const [time, setTime] = useState(0);
	const [isShown, setIsShown] = useState(true);

	useEffect(() => {
	setInterval(() => {
		setTime((previousValue) => previousValue + 1);
	}, 1000);
	
	return() => clearInterval(time);
	}, []);

	return (
		<div className="Timer">
			<h3>Timer</h3>
			<p>
				Make a timer that counts the seconds.
				Update it every second.
			</p>
			<div className="Timer__value">{time}</div>
		</div>
	)
}

export default Timer;
