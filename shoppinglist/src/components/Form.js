import React from 'react';

class Form extends React.Component {
	state = {
		name:'',
		quantity:0
	};
	render() {
		return (
			<div>
				<h3>Ajouter des Articles</h3>
				<form>
					<input type="number" placeholder="quantité"/>
					<input type="text" placeholder="article"/>
					<button type="submit">Ajouter</button>

				</form>

			</div>
		);
	}
	
};

export default Form;

