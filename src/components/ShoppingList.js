import React from "react";
import Axios from "axios";
import "../App.css";
class ShoppingList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stock: [
        { productName: "ipadPRO", keywords: "TABLET" },
        { productName: "Iphone X", keywords: "CELLPHONE" },
        { productName: "Samsung Galaxi Tab", keywords: "TABLET" },
        { productName: "Samsung S9", keywords: "CELLPHONE" },
        { productName: "ASUS", keywords: "LAPTOP" }
      ]
    };
    setTimeout(() => {
      this.setState(this.state.stock);
    }, 7000);
    console.log("constructor");
    this.clickOnCellphones = this.clickOnCellphones.bind(this);
    this.clickOnSoftware = this.clickOnSoftware.bind(this);
  }

  clickOnCellphones() {
    Axios.get("/api/stock/cellphones")
      .then(res => {
        const stock = res.data;
        this.setState({ stock });
        console.log(stock);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  clickOnSoftware() {
    Axios.get("/api/stock/software")
      .then(res => {
        const stock = res.data;
        this.setState({ stock });
        console.log(stock);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  componentDidMount() {
    Axios.get("/api/stock")
      .then(res => {
        const stock = res.data;
        this.setState({ stock });
        console.log(stock);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    console.log(this.state.stock);
    return (
      <div className="grid-container">
        <input
          type="text"
          id="filter"
          value={this.state.stock}
          onChange={this.handleChange}
        />
        <button onClick={this.clickOnCellphones}>CELLPHONES</button>
        <button onClick={this.clickOnSoftware}>SOFTWARE</button>
        <div className="grid">
          {this.state.stock.map(
            ({ productName, description, keywords, image, price }) => (
              <div className="card">
                <h2>{productName}</h2>
                <img
                  src={image}
                  title={productName}
                  height={180}
                  width={180}
                  alt={"Sorry!, this toy has an error!"}
                />
                <div>{description}</div>
                <div>{keywords}</div>
                <div>{price}</div>
                <button>Comprar</button>
              </div>
            )
          )}
        </div>
      </div>
    );
  }
}
export default ShoppingList;
