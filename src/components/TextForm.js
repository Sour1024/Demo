import React, { useState } from "react";
// import showAlert from ".//////"
// console.log(useState('Enter text here2j'));
export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("UpperCase was clicked." + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Uppercase was clicked.", "success");
  };
  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };

  const dispWords = (txt) => { 
    let arr = txt.split(' ');
      var count=0;
      for(let i=0;i<arr.length;i++){
          if(arr[i]!=""){
              count++;
          }
}
return count;

  }

  const handleOnCopy = () => {
    console.log("I am copy");
    var txt = document.getElementById("Mybox");
    txt.select();
    txt.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(txt.value);
    props.showAlert("Copied to clipboard.","success");
  };

  const dispChar = (txt) => {
    let arr = txt.split('');
      var count=0;
      for(let i=0;i<arr.length;i++){
          if(arr[i]!=" "){
              count++;
          }
      }
return count;


  }

  const handleLowClick = () => {
    console.log("Lowercase was clicked." + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Lower case was clicked.", "success");
    // props.showAlert("Dark Mode has been enabled.", "success")  check 
    // console.log("executed") check
  };

  const handleInverseClick = () => {
    console.log("Inverse click was clicked" + text);

    let result = "";
    let temp = text.split("");
    // let arr = temp.split("");

    for (let i = 0; i < temp.length; i++) {
      const char = temp[i];

      if (i % 2 == 0) {
        if (char.toUpperCase() === char && char.toLowerCase() !== char) {
          result += char.toLowerCase();
        } else {
          result += char.toUpperCase();
        }
      } else {
        result += char;
      }

    }

    // console.log(result);
    setText(result);
    props.showAlert("Invert case was clicked.","success");
  };

  const handleClearClick = () => {
    console.log("Clear text was clicked." + text);
    let newText2 = "";
    setText(newText2);
    props.showAlert("Clear text was clicked.","success");
  };

  const [text, setText] = useState("");
  // setText("new");

  return (
    <>
      <div className="container"  style={{ color: props.mode==="dark"? "white":"black" }}>
        <h1>{props.heading} </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="Mybox"
            rows="8"
            style={{ backgroundColor: props.mode==="dark"? "white":"white", color: props.mode==="black" }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          {" "}
          Convert to upper case
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>
          {" "}
          Convert to lower case
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
          {" "}
          Clear text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleInverseClick}>
          {" "}
          Inverse Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleOnCopy}>
          {" "}
          Copy Text
        </button>
      </div>
      <div className="container my-2"  style={{ color: props.mode==="dark"? "white":"black" }}>
        <h2>Your text summary</h2>
        <p>
          {dispWords(text)} words and {dispChar(text)} characters
        </p>
        <p>time to read : {text.split(" ").length * 0.08} minutes</p>
        <h3>Preview</h3>
        <p>{text.length>0 ? text:""}</p>
      </div>
    </>
  );
}
