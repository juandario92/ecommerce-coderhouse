import React from "react";
const NavBar = () => {

return (
<div><header className="header">
        <img src={"https://adidas.mx/glass/react/c478798/assets/img/icon-adidas-logo.svg"} className="header__logo" alt="logo" />
        <div className='header__nav'>
          <h3>Hombre</h3>
          <h3>Mujer</h3>
          <h3>Niños</h3>
        </div>
        <div className='header__buttons'>
          <button>Carrito</button>
        </div>
      </header>
</div>
)
}

export default NavBar;