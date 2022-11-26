import {AiOutlineUser, AiOutlineBell} from "react-icons/ai"

const routesNavbar = [
    {
        url: "/",
        title: "Home Page",
        tipo: "main",
    },
    {
        url: "/petform",
        title: "Pet Form",
        tipo: "main",
    },
    {
        url: "/signup",
        title: "sign Up",
        tipo: "main",
    },
    {
        url: <AiOutlineUser/>,
        title: "Perfil de usuario",
        tipo: "icon",
    },
    {
        url: <AiOutlineBell/>,
        title: "Otro Link",
        tipo: "icon",
    },
]

export {routesNavbar}