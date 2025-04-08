// importazione file
import { useState } from 'react'

export default function Element(props) {
    const languages = props.languages
    const [text, changeText] = useState(<p>Nessun Linguaggio selezionato</p>)
    const [color, setColor] = useState(null)

    const buttons = languages.map(element =>
        <button key={element.id} onClick={() => eventClick(element)} className={`btn ${color === element.id ? 'btn-warning' : 'btn-primary'}`}>{element.title}</button>
    );

    function eventClick(element) {

        changeText(
            <>
                <h2>{element.title}</h2>{element.description}
            </>
        )

        setColor(element.id)

    };



    return (
        <>
            <ul className="vt-ul">
                {buttons}
            </ul>

            <div className="card">
                <div className="card-body">
                    {text}
                </div>
            </div>
        </>
    )
}
// "btn btn-primary"