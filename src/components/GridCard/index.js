import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./index.css";

const GridCard = () => (
  <Card className="card">
    <CardActionArea>
      <CardMedia
        className="image"
        image="http://mouse.latercera.com/wp-content/uploads/2019/05/godzilla-2.jpg"
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Aqui titulo
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Aqui resumen noticia
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button size="small" color="primary">
        Accion
      </Button>
    </CardActions>
  </Card>
);

export default GridCard;
