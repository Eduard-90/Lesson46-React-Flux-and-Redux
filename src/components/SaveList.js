import React from "react";
import { useSelector } from "react-redux";

const SaveList = () => {
  const coffee = useSelector((state) => state.coffee);
  const sugar = useSelector((state) => state.sugar);
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  const save = () => {
    localStorage.setItem("coffee", coffee);
    localStorage.setItem("sugar", sugar);
  };
  const clear = () => {
    localStorage.removeItem("coffee");
    localStorage.removeItem("sugar");
  };
  return (
    <div className="save">
      {!isLoggedIn && <p>You must be logged in to save the list.</p>}
      {isLoggedIn && <button onClick={save}>SAVE</button>}
      {isLoggedIn && <button onClick={clear}>CLEAR</button>}
    </div>
  );
};

export default SaveList;
