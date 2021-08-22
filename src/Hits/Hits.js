import React, { useState, useEffect } from 'react';
import './Hits.css';

function Hits() {

	const [hits, setHits] = useState([]);

	useEffect(() => {
		fetch('https://netcraft2.s3-eu-west-1.amazonaws.com/users.json')
		.then(res => res.json())
		.then(data => setHits(data));
		}, []);
	
	return (
		<div className="Hits">
			<h3>Hits:</h3>
			<p>
				Use the following API to make a list of hit titles:<br />
				<code>https://netcraft2.s3-eu-west-1.amazonaws.com/hits.json</code>
			</p>
			<ul>
			{hits.map((hit, i) => (
				<li>{hit.name}</li>	
				))}

			</ul>
		</div>
	)
}

export default Hits;
