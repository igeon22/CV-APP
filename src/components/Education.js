import React from "react"

class Education extends React.Component{
	constructor(props){
		super(props)
	}

	render(){
		return(
			<div className='personal'>
				<form className='contents'>
				<h3>Expérience éducative</h3>
					<div>
						<label htmlFor='name' className='label-personal'>Nom école</label>
						<input type='text' id='name' name='nomEcole' className='element' onChange={this.props.change} value={this.props.name} required></input>
					</div>

					<div>
						<label htmlFor='sec-name' className='label-personal'>Titre de l'étude</label>
						<input type='text' id='sec-name' name='nomEtude' className='element' onChange={this.props.change} value={this.props.etude} required></input>
					</div>

					<div>
						<label htmlFor='' className='label-personal'>Années d'études</label>
						<div className="all-dates">
							<input type='date' id='years-1' name='anneeEtude' className='element years' onChange={this.props.change} value={this.props.annee1} required></input>
							<input type='date' id='years-2' name='anneeEtude2' className='element years' onChange={this.props.change} value={this.props.annee2} required></input>
						</div>
					</div>


				</form>
			</div>
		)
	}
}

export  default Education