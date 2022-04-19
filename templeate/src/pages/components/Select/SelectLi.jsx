import React, { Component } from "react";
import axios from "axios";

export default class SelectLi extends Component {
  state = {
    Country: null,
    Cities: [],
  };


  componentDidMount() {
    axios
      .get("https://isnft-prod.azurewebsites.net/api/country")
      .then((resp) => {
        this.setState({ Country: 0 });
        this.setState({ Cities: Number(resp.data[this.state.Country].cities) });
      })
      .catch((er) => {
        console.log(er);
      });
  }

  render() {
    return (
      <div>
        <select name="city" type="submit" className="form-control">
          {this.state.Cities.map((item, index) => (
            <>
              <option key={index} value={item.id}>
                {item.name}
              </option>
            </>
          ))}
        </select>
      </div>
    );
  }
}
