// importazione file
import Button from "./Button";


export default function Main(props) {

    const languages = props.languages;
    return (
        <div className="container">
            <ul className="vt-ul">
                <Button languages= {languages}/>
            </ul>
        </div>
    )
}