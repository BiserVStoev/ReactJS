import React, { Component } from 'react'
import PokemonField from './formFields/PokemonField';
import Input from './formFields/Input'

class Index extends Component {
    constructor(props) {
        super(props)

        this.state = {
            pokemonName: '',
            pokemonImg: '',
            pokemonInfo: '',
            data: []
        }

        this.createPokemon = this.createPokemon.bind(this)
    }

    createPokemon(e) {
        e.preventDefault();
        const payload = {
            pokemonName: this.state.pokemonName,
            pokemonImg: this.state.pokemonImg,
            pokemonInfo: this.state.pokemonInfo,
        }

        this.createPokemonToServer(payload)
    }

    createPokemonToServer(payload) {
        fetch('http://localhost:5000/pokedex/create', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
            .then(res => {
                fetch('http://localhost:5000/pokedex/pokedex')
                    .then(data => {
                        return data.json()
                    })
                    .then(d => {
                        this.setState({ data: d.pokemonColection })
                    })
            })
    }

    componentDidMount() {
        fetch('http://localhost:5000/pokedex/pokedex')
            .then(res => {
                return res.json()
            })
            .then(d => {
                this.setState({ data: d.pokemonColection })
            })
    }

    render() {
        const validName = this.state.pokemonName !== ''
        const validImg = this.state.pokemonImg.startsWith('http')
        const validContent = this.state.pokemonInfo.length > 3 && this.state.pokemonInfo.length < 50

        return (
            <div>
                <form onSubmit={this.createPokemon}>
                    <fieldset className='App'>
                        <Input
                            data='pokeName'
                            name='Pokemon Name'
                            func={e => {
                                this.setState({ pokemonName: e.target.value })
                            }}
                            valid={validName}
                        />
                        <Input
                            data='pokeImage'
                            name='Pokemon Image'
                            func={e => {
                                this.setState({ pokemonImg: e.target.value })
                            }}
                            valid={validImg}
                        />
                        <Input
                            data='pokeBio'
                            name='Pokemon Info'
                            func={e => {
                                this.setState({ pokemonInfo: e.target.value })
                            }}
                            valid={validContent}
                        />
                        <input
                            type='submit'
                            value='Create Pokemon'
                            style={{ display: (validContent && validName && validImg) ? 'inline-block' : 'none' }}
                        />
                    </fieldset>
                </form>
                <div style={{ display: 'inline-block' }}>
                    {this.state.data.map((p, i) => {
                        return <PokemonField key={i} data={p} />
                    })}
                </div>
            </div>
        )
    }
}

export default Index