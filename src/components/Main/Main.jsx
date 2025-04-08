// importazione file
import Element from "./Element";


export default function Main(props) {

    const languages = props.languages;
    return (
        <main>
            <div className="container">
                <Element languages={languages}/>
            </div>
        </main>

    )
}