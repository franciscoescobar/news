import React from "react";
import "./index.css";

import Grid from "@material-ui/core/Grid";
import GridCard from "../../components/GridCard";

const Grilla = props => {
  return (
    <div>
      <Grid container className="root" spacing={2}>
        <Grid container justify="center" alignItems="center" spacing={3}>
          {props.noticias !== null
            ? props.noticias.map(noticia => {
                return (
                  <Grid item key={noticia.news_id}>
                    <GridCard
                      title={noticia.title}
                      img_url={noticia.img_url}
                      name={noticia.name}
                      source_name={noticia.source_name}
                      news_id={noticia.news_id}
                      url={noticia.url}
                    />
                  </Grid>
                );
              })
            : ""}
        </Grid>
      </Grid>
    </div>
  );
};

export default Grilla;
