import React from 'react';
import Form from './Form';
import ChefsCollection from './Collections'

class Main extends React.Component {

	state = {
		chefs: [
			{
			  id: 1,
			  name: "Monique Black"
			},
			{
			  id: 2,
			  name: "Chidinma Madukwe"
			} 	
		]
	}

	deleteAChef = (id) => {
		this.setState({
			chefs: this.state.chefs.filter(chef => {
				return chef.id !== id
			})
		})
	}

	addAChef = (aChef) => {
		aChef.id = Math.random()
		this.setState({
			chefs: [...this.state.chefs, aChef]
		})
	}

	render() {
		return (
			<div className="container">
				<Form addAChef={this.addAChef} />
				<ChefsCollection 
					chefs={this.state.chefs}
					deleteAChef={this.deleteAChef}
				/>
			</div>
		)
	}
}

export default Main
