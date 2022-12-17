import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Head from './components/Head';
import PersonalInfos from './components/PersonalInfos';
import Preview from './components/Preview';
import Education from './components/Education';
import Experience from './components/Experience';


class Final extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			name: '',
			prenom:'',
			email:'',
			number:'',
			nomEcole:'',
			nomEtude:'',
			anneeEtude:'',
			anneeEtude2:'',
			nomEntreprise:'',
			nomPoste:'',
			tache:'',
			anneesTravail:'',
			anneesTravail2:''

		}
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(e){
		let name = e.target.name
		let value = e.target.value
		this.setState({
			[name] : value
		})
	}

	render(){
		return(
			<div>
				<Head></Head>
				<div className='main'>
				<PersonalInfos change={this.handleChange} name={this.state.name} prenom={this.state.prenom} mail={this.state.email} number={this.state.number}></PersonalInfos>
				<Education  change={this.handleChange} name={this.state.nomEcole} etude={this.state.nomEtude} annee1={this.state.anneeEtude} annee2={this.state.anneeEtude2} ></Education>
				<Experience change={this.handleChange} entreprise={this.state.nomEntreprise} poste={this.state.nomPoste} tache={this.state.tache} year1={this.state.anneesTravail} year2={this.state.anneesTravail2}></Experience>
				</div>
				{/* {JSON.stringify(this.state)} */}
				<h3>Résultat final</h3>
				<Preview name={this.state.name} prenom={this.state.prenom} mail={this.state.email} tel={this.state.number} nomEcole={this.state.nomEcole} titreEtude={this.state.nomEtude} annee1={this.state.anneeEtude} annee2={this.state.anneeEtude2} entreprise={this.state.nomEntreprise} poste={this.state.nomPoste} tache={this.state.tache} year1={this.state.anneesTravail} year2={this.state.anneesTravail2}></Preview>
			</div>
		)
	}
}

function App(){
	return(
		<div>
			<Final></Final>
		</div>
	)
}

export default App