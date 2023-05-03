import React, {useState} from 'react'

export default function FontSize(){
    let [size, setSize] = useState(16)
    let [color, setColor] = useState()


    const onClickUp = () => {
        setSize(size + 1)
    }
    const onClickDown = () => {
        if (size > 0){
            setSize(size - 1)
        }
    }
    const onClickColor = (ev) => {
        let c = ev.target.innerText
        setColor(c)
    }
    const dStyle={
        fontSize: size,
        color: color
        }

    return(
        <div>
            <div style={dStyle}>ขนาด Font size :{size}</div>
            <button onClick={onClickUp}>เพิ่มsize</button>
            <button onClick={onClickDown}>ลดsize</button>
            <button onClick={onClickColor}>pink</button>
            <button onClick={onClickColor}>purple</button>
            <button onClick={onClickColor}>blue</button>
        </div>
    )
}