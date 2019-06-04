import React, { Component } from 'react'
import "./index.css"

import Grid from '@material-ui/core/Grid'
import GridCard from "../../components/GridCard"

class Grilla extends Component {
    constructor(props) {  
        super(props)
    }

    render() {
        return (
            <div >
         
                <Grid container className="root" spacing={2}>
                    <Grid container  justify="center"  alignItems="center" spacing={3}>
                        
                        {
                            (this.props.noticias !== null)
                            ? this.props.noticias.map( (a) => {
                                return (
                                    <Grid item key={a.news_id}>
                                        <GridCard   title={a.title} 
                                                    img_url={a.img_url} 
                                                    name={a.name} 
                                                    source_name={a.source_name} 
                                                    news_id={a.news_id}
                                                    url = {a.url}  />
                                    </Grid>
                                    )
                            } )
                            : ''
                        }
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default Grilla
