
// dichiarazione variabili
const title = 'Learn Web development'

export default function Header() {
    return (
        <header className="bg-body-tertiary p-4">
            <div className="container">
                <h1>{title}</h1>
            </div>
        </header>
    )
}