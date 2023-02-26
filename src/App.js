import Home  from "./components/Home";
import "./App.css";
import "./fonts/Syne-Bold.ttf";
import "./fonts/Syne-ExtraBold.ttf";
import "./fonts/Syne-Italic.ttf";
import "./fonts/Syne-Regular.ttf";
import "./fonts/SyneMono-Regular.ttf";
import {useEffect, useState} from 'react';
 

function App() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  })
  const [cursorVariant, setCursorVariant] = useState("default")


  useEffect(() => {

    const mouseMove = (e) => {
      setMousePosition({
        x : e.clientX,
        y : e.clientY
      })
    }
    window.addEventListener("mousemove", mouseMove)
    return () => {
      window.removeEventListener('mousemove', mouseMove)
    }
  }, [])
  const variants = {
    default : {
      x : mousePosition.x -16,
      y : mousePosition.y -16,
      backgroundColor : "#111",
      backgroundImage : "repeating-linear-gradient(45deg, #111 0, #111 0.4px, #111 0, #111 50%)",
      backgroundSize: "4px 4px",
    },
    text : {
      x : mousePosition.x -16,
      y : mousePosition.y -16,
      // height : 150,
      // width : 150, 
      backgroundColor : "#f6f1e0",
      backgroundImage : "repeating-linear-gradient(45deg, #d8d2cc 0, #d8d2cc 0.4px, #f6f1e0 0, #f6f1e0 50%)",
      backgroundSize: "4px 4px",
      mixBlendMode : "difference"

    }
  }


  return (
    <div>
      <Home cursorVariant={cursorVariant} setCursorVariant={setCursorVariant} variants={variants} />
    </div>
  );
}

export default App;
