import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const imgArry = [
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*",
    "https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=300&quality=45&auto=format&fit=max&dpr=2&s=20c1a08d26568b0d2623dfc8a59c0e44",
    "https://images.theconversation.com/files/319375/original/file-20200309-118956-1cqvm6j.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=900.0&fit=crop",
  ];

  const [img, setimg] = useState("");
  useEffect(() => {
    getImg();
  }, []);

  const getImg = () => {
    let upperRange = imgArry.length;
    let randIndex = Math.floor(Math.random() * Math.floor(upperRange));
    setimg(imgArry[randIndex]);
  };
  return (
    <div className="App">
      <h1>random image picker</h1>
      <p>Click on the button to change the image!</p>
      <img src={img} alt="my image random" />
      <button onClick={getImg}>Random imge</button>
    </div>
  );
}

export default App;
