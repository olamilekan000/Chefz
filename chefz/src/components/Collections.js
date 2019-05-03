import React from 'react'

const ChefsCollection = ({chefs, deleteAChef}) => {

	if (chefs.length < 1) {
		return (
			<div className="center">
				<h5>The chef list is empty... Add One!</h5>
			</div>
		)
	}else {
		return (
			<ul className="collection">
				{chefs.map(chef => {
					return (
						<li className="collection-item" 
								key={chef.id} 
								onClick={() => deleteAChef(chef.id) }>
							{chef.name}
						</li>
					)
				})}
			</ul>
		)
	}
}

export default ChefsCollection
