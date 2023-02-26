import './Headband.css'

function Headband({setCursorVariant}) {
    const textEnter = () => { setCursorVariant("text")}
    const textLeave = () => { setCursorVariant("default")}
    return (
        <div onMouseEnter={textEnter} onMouseLeave={textLeave} className="container">
      <span className="txt t1">- STAY CALM THIS IS ONLY A TEST - STAY CALM THIS IS ONLY A TEST - STAY CALM THIS IS ONLY A TEST - STAY CALM THIS IS ONLY A TEST&nbsp;</span>
      <span className="txt t2">- STAY CALM THIS IS ONLY A TEST - STAY CALM THIS IS ONLY A TEST - STAY CALM THIS IS ONLY A TEST - STAY CALM THIS IS ONLY A TEST&nbsp;</span>
    </div>
    )
}

export default Headband