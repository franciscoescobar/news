import React from "react";
import "./index.css";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";

const GridCard = props => {
  const goTo = url => {
    window.open(url);
  };

  return (
    <div>
      <Card className="card" onClick={() => goTo(props.url)}>
        <CardActionArea>
          <CardMedia
            className="img"
            image={props.img_url}
            title={props.source_name}
          >
            <div className="info">
              <p>{props.title}</p>
              <p className="source">Fuente: {props.source_name}</p>
            </div>
          </CardMedia>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default GridCard;
