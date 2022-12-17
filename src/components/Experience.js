import React from "react"

class Experience extends React.Component{
	constructor(props){
		super(props)
	}

	render(){
		return(
			<div className='personal'>
				<form className='contents'>
				<h3>Expérience pratique</h3>
					<div>
						<label htmlFor='name' className='label-personal'>Nom de l'entreprise</label>
						<input type='text' id='name' name='nomEntreprise' className='element' onChange={this.props.change} value={this.props.entreprise} required></input>
					</div>

					<div>
						<label htmlFor='sec-name' className='label-personal'>Intitulé de poste</label>
						<input type='text' id='sec-name' name='nomPoste' onChange={this.props.change} value={this.props.poste} className='element' required></input>
					</div>

					<div>
						<label htmlFor='sec-name' className='label-personal'>Tache principale</label>
						<input type='text' id='sec-name' name='tache' onChange={this.props.change} value={this.props.tache} className='element' required></input>
					</div>

					<div>
						<label htmlFor='' className='label-personal'>Période de travail</label>
						<div className="all-dates">
							<input type='date' id='years-1' name='anneesTravail' onChange={this.props.change} value={this.props.year1} className='element years' required></input>
							<input type='date' id='years-2' name='anneesTravail2' onChange={this.props.change} value={this.props.year2} className='element years' required></input>
						</div>
					</div>


				</form>
			</div>
		)
	}
}

export  default Experience