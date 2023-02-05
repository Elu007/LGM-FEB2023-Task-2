import logo from "./Assets/logo.jpg"

const Navbar = ({ onSetIsClicked }) => {
    const clicked = () => {
        onSetIsClicked(1);
    }
    return (
        <nav class="navbar bg-light">
            <div class="container">
                <a class="navbar-brand" href="/">
                    <img src={logo} alt="Bootstrap" width="90" height="50" />
                </a>
                <button onClick={clicked} className="btn btn-primary">Get Users</button>
            </div>
        </nav>
    )
}
export default Navbar;