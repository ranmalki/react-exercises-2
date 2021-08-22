import React, {useState} from 'react';
import logo from './logo.svg';
import './Toggle.css';

function Toggle() {

	const [isShown, setIsShown] = useState(true);

	function showHide() {
		setIsShown(!isShown);
	}

	return (
		<div className="Toggle">
			<p>Make the logo show and disappear when clicking on the button.</p>
			<button onClick={showHide}>Show / Hide</button>
			<div className="Toggle__logo-wrapper">
			{isShown && <img src={logo} alt="logo" />}
			</div>
		</div>
	)
}

export default Toggle;
