
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div className="flex sticky h-1/10 bg-slate-300 w-full z-10">
        <div className="pr-5 pl-1 pt-5 text-xl">
            <Link to="/">Home</Link>
        </div>
        <div className="p-5 text-xl">
            <Link to="/Projects">Projects</Link>
        </div>
        <div className="p-5 text-xl">
            <a href="https://github.com/nickdip">GitHub</a>
        </div>
        <div className="pl-5 pr-1 pt-5 text-xl">
            <Link to="/Contact">Contact</Link>
        </div>
      </div>

    )
}