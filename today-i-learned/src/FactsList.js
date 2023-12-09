import React from 'react';
import Fact from './Fact';

const FactsList = ({ facts, categories }) => {
	if (facts.length === 0) {
		return <p className="loader">No facts for this category YET! Add your own! 🔥</p>;
	}
	return (
		<section>
			<ul className="facts-list">
				{facts.map((fact) => (
					<Fact key={fact.id} fact={fact} categories={categories} />
				))}
			</ul>
			<p>There are {facts.length} facts in the database. Add Your Own!</p>
		</section>
	);
};

export default FactsList;
