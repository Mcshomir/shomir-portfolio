import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";


const Main = () => {
    return (
        <div className="px-8 md:px-14 lg:px-36  min-h-screen bg-gradient-to-tr from-[#60072c] via-[#12082E] to-[#091498] pt-10 pb-10">
            <Header></Header>
            <Outlet></Outlet>

        </div>
    );
};

export default Main;