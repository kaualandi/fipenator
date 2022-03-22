import logo from '../logo.svg';
import './Styles/Header.css';

function Header({setPage, page}) {
    function backToHome() {
        setPage(0);
    }
    function previousPage() {
        page > 0 && setPage(page - 1);
    }

    return (
        <nav className="">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="header-logo">
                        <h1><img src={logo} alt="fipenator" /></h1>
                    </div>
                    <div className="icons">
                        <button onClick={previousPage} className="icon"><i className="fa-solid fa-left"></i></button>
                        <button onClick={backToHome} className="icon"><i className="fa-solid fa-house"></i></button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;