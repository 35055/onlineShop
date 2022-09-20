function Drawer({ onCloseCart, onRemove, items = [] }) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="mb-30 d-flex justify-between">
          Корзина
          <img
            className="removeBtn cu-p"
            width={18}
            onClick={onCloseCart}
            height={18}
            src="/img/times-regular.svg"
            alt=""
          ></img>
        </h2>

        {items.length > 0 ? (
          <div>
            <div className="items">
              {items.map((obj) => (
                <div className="cartItem d-flex align-center mb-20">
                  <div
                    style={{ backgroundImage: `url(${obj.imgUrl})` }}
                    className="cartItemImg"
                  ></div>

                  <div className="mr-20">
                    <p className="mb-5">{obj.title}</p>
                    <b>{obj.price} руб</b>
                  </div>
                  <img
                    onClick={() => onRemove(obj.id)}
                    className="removeBtn"
                    height={18}
                    src="/img/times-regular.svg"
                    alt=""
                  ></img>
                </div>
              ))}
            </div>

            <div className="cartTotalBlock">
              <ul>
                <li>
                  <span>Итого:</span>
                  <div></div>
                  <b>21 498 руб</b>
                </li>
                <li>
                  <span>Налог 5%: </span>
                  <div></div>
                  <b>1074 руб</b>
                </li>
              </ul>
              <button className="greenButton">
                Оформить заказ
                <img src="/img/arrow-right.svg" alt=""></img>
              </button>
            </div>
          </div>
        ) : (
          <div className="cartEmpty d-flex align-center justify-center flex-column">
            <img src="/img/box.png" alt=""></img>
            <h1>Корзина пустая</h1>
            <p>Вы не можете позволить себе купить кроссовки, вы НИЩЕБРОД ???</p>
            <button onClick={onCloseCart} className="greenButton">
              Вернуться назад
              <img src="/img/arrow-left.svg" alt=""></img>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Drawer;
