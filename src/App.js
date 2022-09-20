import { useState, useEffect, createElement } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const [cartOpened, setCartOpened] = useState(false);

  useEffect(() => {
    axios
      .get("https://6316da7fcb0d40bc41450420.mockapi.io/items")
      .then((res) => {
        setItems(res.data);
      });
    axios
      .get("https://6316da7fcb0d40bc41450420.mockapi.io/cart")
      .then((res) => {
        setCartItems(res.data);
      });
  }, []);

  const onRemoveItem = async (id) => {
    await setCartItems((prev) => prev.filter((item) => item.id !== id));
    await axios.delete(
      `https://6316da7fcb0d40bc41450420.mockapi.io/cart/${id}`
    );
  };

  const onAddToCart = async (obj) => {
    await setCartItems((prev) => [...prev, obj]);
    await axios.post("https://6316da7fcb0d40bc41450420.mockapi.io/cart", obj);
  };

  const onAddToFavorite = (obj) => {
    setFavorites((prev) => [...prev, obj]);
    axios.post("https://6316da7fcb0d40bc41450420.mockapi.io/favorites", obj);
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer
          onRemove={onRemoveItem}
          items={cartItems}
          onCloseCart={() => setCartOpened(false)}
        />
      )}

      {createElement("h2", {
        children: "",
      })}

      <Header onClickCart={() => setCartOpened(true)} />
      <Routes>
        <Route
          path="/element"
          element={<div>Murat is good boy, good boys just sucks</div>}
        />
      </Routes>

      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>
            {searchValue.length === 0
              ? "Все кроссовки"
              : `Поиск по запросу: "${searchValue}"`}
          </h1>
          <div className="search-block d-flex align-center">
            <img width={15} height={15} src="/img/search.svg" alt=""></img>
            {searchValue && (
              <img
                onClick={() => setSearchValue("")}
                className="clear removeBtn cu-p"
                width={18}
                height={18}
                src="/img/times-regular.svg"
                alt="Clear"
              ></img>
            )}
            <input
              onChange={onChangeSearchInput}
              value={searchValue}
              placeholder="Поиск..."
            ></input>
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {items
            .filter((item) =>
              item.imgUrl.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((item) => (
              <Card
                key={item.imgUrl}
                title={item.name}
                price={item.price}
                imgUrl={item.imgUrl}
                onFavorite={(obj) => onAddToFavorite(obj)}
                onPlus={(obj) => onAddToCart(obj)}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
