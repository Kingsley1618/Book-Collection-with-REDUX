import "./styles.css";
import Book from "./Books/Books.js";
import { Routes, Route } from "react-router-dom";
import Error from "./Error";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import Favorite from "./Favorite/Favorite";
import BookInfo from "./BookInfo/BookInfo";
import { persistor, store } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <Routes>
            <Route path="/" element={<Book />} />
            <Route path="/fav" element={<Favorite />} />

            <Route path="/info/:bookId" element={<BookInfo />} />
            <Route path="/*" element={<Error />} />
          </Routes>
        </div>
      </PersistGate>
    </Provider>
  );
}
