import React, { Component } from "react";
import Nav from "./Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";

class Portfolio extends Component {
  state = {
    currentPage: "Home",
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "Home") {
      return <Home />;
    } else if (this.state.currentPage === "About") {
      return <About />;
    } else if (this.state.currentPage === "Services") {
      return <Services />;
    } else {
      return <Contact />;
    }
  };

  render() {
    return (
      <div>
        <Nav
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {this.renderPage()}
      </div>
    );
  }
}

export default Portfolio;
