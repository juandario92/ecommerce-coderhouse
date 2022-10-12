import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="header">
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
      <main className='products'>
        <div className='card'>
          <span className='card__name'> Zapato Deportivo</span>
          <p className='card__description'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque quod, accusantium iure maiores repellat corrupti?</p>
          <span>$55</span>
          <span>Quedan 5</span>
        </div>
        <div className='card'>
          <span className='card__name'> Zapato Deportivo</span>
          <p className='card__description'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque quod, accusantium iure maiores repellat corrupti?</p>
          <span>$55</span>
          <span>Quedan 5</span>
        </div>
        <div className='card'>
          <span className='card__name'> Zapato Deportivo</span>
          <p className='card__description'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque quod, accusantium iure maiores repellat corrupti?</p>
          <span>$55</span>
          <span>Quedan 5</span>
        </div>
        <div className='card'>
          <span className='card__name'> Zapato Deportivo</span>
          <p className='card__description'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque quod, accusantium iure maiores repellat corrupti?</p>
          <span>$55</span>
          <span>Quedan 5</span>
        </div>
      </main>
      <footer className='footer'>
        <h3 className='footer__item'>Politica de privacidad</h3>
        <h3 className='footer__item'>Terminos y Condiciones</h3>
        <h3 className='footer__item'>Otra Cosa</h3>
      </footer>
    </div>
  );
}

export default App;
