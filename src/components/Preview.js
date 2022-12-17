import React from 'react';

class Preview extends React.Component{
	constructor(props){
		super(props)
	}

	render(){
		return(
			<div className='preview'>
				<p className='secondary-title'>Informations personnelles</p>
				<p>Nom: {this.props.name}</p>
				<p>Prénom: {this.props.prenom}</p>
				<p>Addresse mail: {this.props.mail}</p>
				<p>Numéro de téléphone: {this.props.tel}</p>

				<p className='secondary-title'>Éxperience éducative</p>
				<p>Nom de l'institution: {this.props.nomEcole}</p>
				<p>Titre de l'étude: {this.props.titreEtude}</p>
				<p>Années d'études:{this.props.annee1} à {this.props.annee2}</p>


				<p className='secondary-title'>Éxperience éducative</p>
				<p>Nom de l'entreprise: {this.props.entreprise}</p>
				<p>Intitulé de poste: {this.props.poste}</p>
				<p>Tache principale de poste: {this.props.tache}</p>
				<p>Période de travail:{this.props.year1} à {this.props.year2}</p>
			</div>
		)
	}
}

export default Preview 