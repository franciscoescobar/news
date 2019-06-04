import React, { Component } from 'react'
import Title from "../../components/Title"
import Grilla from "../../components/Grilla"
import dayjs from 'dayjs'


class Home extends Component {
    constructor() {  
        super()
        this.state = {
            noticias: null
        }
    }

    componentDidMount = async () => {
        let date = dayjs().format('YYYY-MM-DD')
        let data = await fetch(`https://api.canillitapp.com/latest/${date}`)
        data = await data.json()
        this.setState( {
            noticias: data.slice(0,30)
        } )
      }

    render() {
        return (
            <div>
                <Title title="Hoy" />
                <Grilla noticias={this.state.noticias}/>
            </div>
        )
    }
}

export default Home;
