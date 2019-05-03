import React from 'react'

class Form extends React.Component {

	state = {
		name: ''
	}

	changeInputValue = (e) => {
		this.setState({
			name: e.target.value
		})
	}

	addChef = (e) => {
		e.preventDefault()
		this.props.addAChef(this.state)
		this.setState({
			name: ''
		})
	}

	render() {
		return (
			<div id="form" onSubmit={this.addChef} >
			  <div className="row">
			    <form className="col s12">
			      <div className="row">
			        <div className="input-field col s12">
			          <input 
			          	id="text" 
			          	type="text" 
			          	onChange={this.changeInputValue} 
			          	name="name"
			          	value={this.state.name}
			          />
			          <label htmlFor="text">Enter a chef name</label>
			        </div>
			        <div className="center">
			        	<button className="btn purple darken-3">Add Chef</button>
			        </div>
			      </div>
			    </form>
			  </div>				
			</div>
  	)
	} 
}

export default Form
