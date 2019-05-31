import React from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { withRouter } from "react-router-dom";
const TabBar = ({ history }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    history.push(`/${newValue > 0 ? `category/${newValue}` : ""}`);
  };

  return (
    <Paper>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Home" />
        <Tab label="Política" />
        <Tab label="Internacionales" />
        <Tab label="Tecnología" />
        <Tab label="Espectáculos" />
        <Tab label="Deportes" />
      </Tabs>
    </Paper>
  );
};

export default withRouter(TabBar);
