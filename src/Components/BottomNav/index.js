import {
    Link,
} from "react-router-dom";

function BottomNav() {
    return (
        <nav className="bottom-nav d-flex justify-content-between fixed-bottom w-100">
            <Link to="/" className="icon-home"><span className="sr-only">Home</span></Link>
            <Link to="/available" className="icon-money-bag"></Link>
            <Link to="/" className="icon-credit-card"></Link>
            <Link to="/" className="icon-star"></Link>
            <Link to="/" className="icon-bell"></Link>
        </nav>
    )
}

export default BottomNav