import React, { useState } from 'react';

function isValidHttpUrl(string) {
	let url;

	try {
		url = new URL(string);
	} catch (_) {
		return false;
	}

	return url.protocol === 'http:' || url.protocol === 'https:';
}

const FactForm = ({ categories, setFacts, setShowForm }) => {
	const [text, setText] = useState('');
	const [source, setSource] = useState('');
	const [category, setCategoty] = useState('');

	function handleSubmit(e) {
		e.preventDefault();
		console.log(text, source, category);

		if (text && category && isValidHttpUrl(source) && text.length <= 200) {
			const newFact = {
				id: Math.round(Math.random() * 10000000),
				text: text,
				source: source,
				category: category,
				votesInteresting: 0,
				votesMindblowing: 0,
				votesFalse: 0,
				createdIn: new Date().getFullYear(),
			};
			setFacts((facts) => [newFact, ...facts]);

			setText('');
			setSource('');
			setCategoty('');

			setShowForm(false);
		}
	}

	return (
		<form className="fact-form" onSubmit={handleSubmit}>
			<input
				type="text"
				placeholder="Share a fact with the world..."
				value={text}
				onChange={(e) => setText(e.target.value)}
			/>
			<span>{200 - text.length}</span>
			<input
				type="text"
				placeholder="http://example.com"
				value={source}
				onChange={(e) => setSource(e.target.value)}
			/>
			<select value={category} onChange={(e) => setCategoty(e.target.value)}>
				<option value="">Choose category:</option>
				{categories.map((cat) => (
					<option key={cat.name} value={cat.name}>
						{cat.name.toUpperCase()}
					</option>
				))}
			</select>
			<button className="btn btn-large">Post</button>
		</form>
	);
};

export default FactForm;
