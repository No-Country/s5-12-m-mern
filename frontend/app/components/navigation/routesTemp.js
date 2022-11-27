import {AiOutlineUser, AiOutlineBell} from "react-icons/ai"

const routesNavbar = [
    {
        url: "#",
        title: "Inicio",
        type: "main",
        content: null,
    },
    {
        url: "#",
        title: "Mascotas",
        type: "main",
        content: null,
    },
    {
        url: "#",
        title: "Paseadores",
        type: "main",
        content: null,
    },
    {
        url: "#",
        title: "Perfil de usuario",
        type: "icon",
        content: <AiOutlineUser/>,
    },
    {
        url: "#",
        title: "Otro Link",
        type: "icon",
        content: <AiOutlineBell/>,       
    },
]

export {routesNavbar}