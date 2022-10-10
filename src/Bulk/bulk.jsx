import React from "react";
import { useState } from "react";
import "./bulk.css";

const Bulk = () => {
  const [Count, setCount] = useState(1);

  const [four, setfour] = useState(false);

  const [text, setText] = useState({
    text1: "",
    text2: "",
    text3: "",
    text4: "",
  });

  const handleTemp = function (e) {
    setText({
      ...text,
      [e.target.name]: e.target.value.replace(/\s+/g, " "),
    });
    let gg = e.target.value.split(" ").length;
    console.log(gg);

    if (gg >= 11) {
      setCount((prev) => prev + 1);
    }

    if (Count == 4 && gg == 11) {
      setfour(!four);
      setCount((xx) => xx - 1);
    }
  };

  const changepage = function (e) {
    setCount((prev) => prev + 1);
  };

  const prevpage = function (e) {
    setCount((prev) => prev - 1);
  };

  const refresh = function () {
    alert("Reset to default?");
    location.reload();
  };

  return (
    <div className="container">
      <div className="desk">
        <div className="textarea">
          <p>Page {Count}</p>
          {Count == 1 && (
            <textarea
              name="text1"
              value={text.text1}
              onChange={handleTemp}
            ></textarea>
          )}
          {Count == 2 && (
            <textarea
              name="text2"
              value={text.text2}
              onChange={handleTemp}
            ></textarea>
          )}
          {Count == 3 && (
            <textarea
              name="text3"
              value={text.text3}
              onChange={handleTemp}
            ></textarea>
          )}
          {Count == 4 && (
            <textarea
              disabled={four}
              name="text4"
              value={text.text4}
              onChange={handleTemp}
            ></textarea>
          )}
        </div>
        <div className="textarea-actions">
          {Count == 4 ? null : <button onClick={changepage}>next</button>}
          {Count == 1 ? null : <button onClick={prevpage}>prev</button>}
          <button onClick={refresh}>submit</button>
        </div>
      </div>
    </div>
  );
};

export default Bulk;
