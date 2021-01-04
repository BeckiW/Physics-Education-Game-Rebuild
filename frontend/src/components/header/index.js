import React from "react";
import "./style.scss";

class Header extends React.Component {
  state = {
    updateCounter: 0
  };

  updateHeaderCallback = () => {
    this.setState({
      updateCounter: this.state.updateCounter + 1
    });
  };

  render() {
    return (
      <header>
        <div className="headerContent">
          <div className="logoContainer">
            <a href="/">
              <img src="/logo.png" alt="Logo" />
            </a>
          </div>
          <div className="siteTitle">
            <a href="/">Duophysics</a>
          </div>
          <div className="userInfo">Hello Becca</div>
          <nav className="headerLinks">
            <ul>
              <li>
                <a href="/dashboard">Dashboard</a>
              </li>
              <li>Hello User</li>
              <li>
                <a href="/stats">Stats</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
