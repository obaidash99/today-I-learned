import React, { useState } from 'react';
import supabase from './supabase';

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
	const [isUploading, setIsUploading] = useState(false);

	async function handleSubmit(e) {
		e.preventDefault();
		console.log(text, source, category);

		if (text && category && isValidHttpUrl(source) && text.length <= 200) {
			setIsUploading(true);
			const { data: newFact, error } = await supabase
				.from('facts')
				.insert([{ text, source, category }])
				.select();

			setIsUploading(false);

			setFacts((facts) => [newFact[0], ...facts]);

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
				disabled={isUploading}
			/>
			<span>{200 - text.length}</span>
			<input
				type="text"
				placeholder="http://example.com"
				value={source}
				onChange={(e) => setSource(e.target.value)}
				disabled={isUploading}
			/>
			<select
				value={category}
				onChange={(e) => setCategoty(e.target.value)}
				disabled={isUploading}
			>
				<option value="">Choose category:</option>
				{categories.map((cat) => (
					<option key={cat.name} value={cat.name}>
						{cat.name.toUpperCase()}
					</option>
				))}
			</select>
			<button className="btn btn-large" disabled={isUploading}>
				Post
			</button>
		</form>
	);
};

export default FactForm;
