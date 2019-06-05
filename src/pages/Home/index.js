import React, { Component } from "react";
import Title from "../../components/Title";
import Grilla from "../../components/Grilla";
import dayjs from "dayjs";
import LoadingLine from "../../components/LoadingLine";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      noticias: null,
      loading: false
    };
  }

  setLoading = value => {
    this.setState({
      loading: value
    });
  };

  componentDidMount = async () => {
    let date = dayjs().format("YYYY-MM-DD");
    try {
      this.setLoading(true);
      let data = await fetch(`https://api.canillitapp.com/latest/${date}`);
      data = await data.json();
      this.setState({
        noticias: data
      });
    } catch (error) {
      console.log(error);
    } finally {
      this.setLoading(false);
    }
  };

  render() {
    return (
      <div>
        {this.state.loading ? <LoadingLine /> : null}
        <Title title="Hoy" />
        <Grilla noticias={this.state.noticias} />
      </div>
    );
  }
}

export default Home;
