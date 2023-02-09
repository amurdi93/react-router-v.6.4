import { Outlet, useNavigation } from 'react-router-dom'
import Navbar from '../componentes/Navbar';


const LayoutPublic = () => { 

const navigation = useNavigation();




    return (
        <>
        <Navbar />
        <main>
            {navigation.state === "loading" && (
                <div>Loading...</div>
            )}
            <Outlet />
        </main>
        <footer>footer</footer>
        </>
       
    ) 
};
export default LayoutPublic;