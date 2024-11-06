import { useState } from "react"
import './bgChanger.css';

function BgChanger(){

    const [color, setColor] = useState("Black");

    return <>
        <div className="main-container" style={{backgroundColor: color}}>
            <div className="changer-tool">
                <div className="btns">
                    <button className="btn" style={{backgroundColor: "red"}} onClick={() => setColor("red")}>Red</button>
                    <button className="btn" style={{backgroundColor: "green"}} onClick={() => setColor("green")}>Green</button>
                    <button className="btn" style={{backgroundColor: "blue"}} onClick={() => setColor("blue")}>Blue</button>
                    <button className="btn" style={{backgroundColor: "white"}} onClick={() => setColor("white")}>White</button>
                    <button className="btn" style={{backgroundColor: "yellow"}} onClick={() => setColor("yellow")}>Yellow</button>
                </div>
            </div>
        </div>
    </>
}

export default BgChanger;