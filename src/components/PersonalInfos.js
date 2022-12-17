import ReactDOM from 'react-dom/client';
import React from 'react';

class PersonalInfos extends React.Component{
	constructor(props){
		super(props)
	}

	render(){
		return(
			<div className='personal'>
				<form className='contents'>
				<h3>Informations personnelles</h3>
					<div>
						<label htmlFor='name' className='label-personal'>Nom</label>
						<input type='text' id='name' name='name' className='element' onChange={this.props.change} value={this.props.name} required></input>
					</div>

					<div>
						<label htmlFor='sec-name' className='label-personal'>Prénom</label>
						<input type='text' id='sec-name' name='prenom' value={this.props.prenom} onChange={this.props.change} className='element' required></input>
					</div>

					<div>
						<label htmlFor='mail' className='label-personal'>Email</label>
						<input type='mail' id='mail' name='email'value={this.props.mail} onChange={this.props.change} className='element' required></input>
					</div>


					<div>
						<label htmlFor='number' className='label-personal'>Numéro de téléphone</label>
						<input type='tel' id='number' name='number' value={this.props.number} onChange={this.props.change} className='element' required></input>
					</div>

					{/* <div>
						<input type='submit' id='submit' name='submit' className='' onChange={this.props.change} value='Enregistrer'></input>
					</div> */}

				</form>
			</div>
		)
	}
}

export  default PersonalInfos