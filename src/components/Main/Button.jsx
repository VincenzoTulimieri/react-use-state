
export default function Button(props) {

    const languages = props.languages;
    console.log(languages)
    return (
        <>
            {languages.map(language => {
                return <button type="button" className="btn btn-primary">{language.title}</button>
            })}
        </>

    )

}
