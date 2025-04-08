
// dichiarazione variabili
const title = 'Learn Web development'

export default function Header() {
    return (
        <header className="bg-body-tertiary p-4 mb-3">
            <div className="container">
                <h1>{title}</h1>
            </div>
        </header>
    )
}