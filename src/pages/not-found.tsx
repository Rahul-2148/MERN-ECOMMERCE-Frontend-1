import { MdError } from "react-icons/md";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="container not-found">
        <MdError />
        <h1>Page Not Found</h1>
        <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. <Link className="text-blue-500 hover:text-blue-800 hover:underline text-2xl " to="/">Go to Home</Link></p>
    </div>
  )
}

export default NotFound;