
const Header = ({ title }) => {

    return (
        <header className="bg-info py-3">
            <div className="container px-3 px-lg-3 my-4">
                <div className="text-center text-dark">
                    <h2 className="display-5 fw-bolder">{title}</h2>
                </div>
            </div>
        </header>
    )
}

export default Header;