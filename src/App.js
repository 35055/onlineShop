function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
        <div className="align-center d-flex">
          <img width={40} height={40} src="/img/logo.png" alt=""></img>
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Магазин лучших крососвок</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img width={18} height={18} src="/img/card.svg" alt=""></img>
            <span>1250 руб.</span>
          </li>
          <li>
          <img width={18} height={18} src="/img/user.svg" alt=""></img>
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <h1 className="mb-40">Все кросовки</h1>

        <div className="d-flex">
        <div className="card">
          <img width={133} height={112} src="img/1.jpg" alt=""></img>
          <h5>Мужские Кросовки nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>12 999 руб.</b>
            </div>
            <button className="button"><img width={11} height={11} src="/img/plus.svg" alt=""></img></button>
          </div>
        </div>

        <div className="card">
          <img width={133} height={112} src="img/2.jpg" alt=""></img>
          <h5>Мужские Кросовки nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>12 999 руб.</b>
            </div>
            <button className="button"><img width={11} height={11} src="/img/plus.svg" alt=""></img></button>
          </div>
        </div>

        <div className="card">
          <img width={133} height={112} src="img/3.jpg" alt=""></img>
          <h5>Мужские Кросовки nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>12 999 руб.</b>
            </div>
            <button className="button"><img width={11} height={11} src="/img/plus.svg" alt=""></img></button>
          </div>
        </div>

        <div className="card">
          <img width={133} height={112} src="img/4.jfif" alt=""></img>
          <h5>Мужские Кросовки nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>12 999 руб.</b>
            </div>
            <button className="button"><img width={11} height={11} src="/img/plus.svg" alt=""></img></button>
          </div>
        </div>
        </div>
        
      </div>
    </div>
  );
}

export default App;
