import {motion} from "framer-motion";
import  Headband  from "./Headband";
import "../fonts/Syne-Bold.ttf";
import "../fonts/Syne-ExtraBold.ttf";
import "../fonts/Syne-Italic.ttf";
import "../fonts/Syne-Regular.ttf";
import "../fonts/SyneMono-Regular.ttf";


function Home({cursorVariant, setCursorVariant, variants,}) {
    const textEnter = () => { setCursorVariant("text")}
    const textLeave = () => { setCursorVariant("default")}

    return (
        <div className="App">
        <Headband setCursorVariant={setCursorVariant} />
        <div className="insideApp">
          <p className="titre" onMouseEnter={textEnter} onMouseLeave={textLeave} >
            <center>THIS IS ONLY A TEST </center>
          </p>
          <motion.div className="cursor" variants={variants} animate={cursorVariant} />
        </div>
      </div>
    )
}

export default Home