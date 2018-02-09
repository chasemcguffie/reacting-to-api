import React, { Component, Fragment } from 'react';
import 'isomorphic-fetch';
import 'es6-promise';



class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            films: [],
            people: [],
            load: false,

        }
    }    
    componentDidMount () {
        fetch('https://ghibliapi.herokuapp.com/films')
        .then(res => res.json())
    }
    onFilmClick () {
        fetch('https://ghibliapi.herokuapp.com/films')
        .then(res => res.json())
        .then(obj => this.setState({films: obj}))
    }
    onPeopleClick () {
        fetch('https://ghibliapi.herokuapp.com/people')
        .then(res => res.json())
        .then(obj => this.setState({people: obj}))
    }
    render() {
        const people = this.state.people.map ( (person) => {
            return(
                <div>
                    <h3>{person.name}</h3>
                    <p>{person.age}</p>
                    <p>{person.gender}</p>
                    <a href={person.url}>{person.url}</a>
                </div>
            )
        })
        const card = this.state.films.map ( (film) => {
            return(
            <div className="card" Style="width: 20rem;">
                <div className="card-block">
                <h4 className="card-title">{film.title}</h4>
                <p className="card-text">{film.description}</p>
                </div>
            </div>
            );
        })
        return(
            <Fragment>
                <img src={require('./logo.png')} alt="meme"></img>
                <button onClick={(event) => this.onFilmClick()}>Load Movies</button>
                <button onClick={(event) => this.onPeopleClick()}>Load People</button>
                { card }
                { people }
            </Fragment>
        )
    }
}

export default App;