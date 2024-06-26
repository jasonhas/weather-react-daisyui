import { Link } from "react-router-dom"

function Navigation() {
  return (
    <div className="navbar bg-base-100">
    <div className="flex-1">
        <Link to="/" className="text-xl hover:font-bold">My Weather</Link>
    </div>
    <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
        <li><Link to="/about">About</Link></li>
        <li>
            <details>
            <summary>
                Useful Links
            </summary>
            <ul className="p-2 bg-base-100 rounded-t-none">
                <li><Link to="/locations">Locations</Link></li>
                <li><a>Link 2</a></li>
            </ul>
            </details>
        </li>
        </ul>
    </div>
    </div>
  )
}

export default Navigation