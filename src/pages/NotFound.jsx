
import { useRouteError, Link } from "react-router-dom";

const NotFound = () => { 
    const error = useRouteError();
    console.log(error);

    return (
            <div>
                <h1>404</h1>
                <p>page not found</p>
                <p>{error.statusText || error.message} </p>
                <Link to="/">volver al Home</Link>
            </div>




    )
};
export default NotFound;