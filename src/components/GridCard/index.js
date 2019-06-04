import React, { Component } from 'react'
import "./index.css"

import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'

class GridCard extends Component {
  constructor(props) {  
      super(props)
  }

  render() {
      return (
        <div>
          <Card className="card">
            <CardActionArea>
              <CardMedia
                className="img"
                image={this.props.img_url}
                title={this.props.source_name}
              >
              <div className="info">
                <p>{this.props.title}</p>
                <p className="source">Fuente: {this.props.source_name}</p>
              </div>
              </CardMedia>

            </CardActionArea>
          </Card>
        </div>
      )
  }
}

export default GridCard;
