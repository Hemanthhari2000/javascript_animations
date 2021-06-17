import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import Hamburger from './Hamburger'

const Header = ({ history }) => {


  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: "Menu"
  });

  const [disabled, setDisable] = useState(false);

  useEffect(()=>{
    history.listen(() => {
      setState({clicked: false, menuName: 'Menu'})
    })
  })


  const handleMenu = () => {
    disableMenu();
    if (state.initial === false){
      setState({
        initial: null,
        clicked: true,
        menuName: "Close" 
      });
      console.log(1);
    }
    else if (state.clicked === true){
      setState({
        clicked: !state.clicked,
        menuName: "Menu"
      });
      console.log(2);
    }else if (state.clicked === false){
      setState({
        clicked: !state.clicked,
        menuName: "Close"
      });  
      console.log(3);
    }
  }

  // Menu Disable and Enable
  const disableMenu = () => {
    setDisable(!disabled);
    setTimeout(() => {
      setDisable(false);
    }, 1200);
  };

  return (
    <header>
      <div className="container">
        <div className="wrapper">
          <div className="inner-header">
            <div className="logo">
              <Link to='/'> HAMBRG. </Link>
            </div>
            <div className="menu">
              <button disabled = {disabled} onClick = {handleMenu}>{state.menuName}</button>
            </div>
          </div>
        </div>
      </div>
      <Hamburger state = {state} />
    </header>
  );
};

export default withRouter(Header);
