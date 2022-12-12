//module for navbar
import {EmployeeNav} from "./EmployeeNav" 
import {CustomerNav} from "./CustomerNav"
import { Link, useNavigate } from 'react-router-dom'
import BisonLogo2 from '../../assets/BisonLogo2.png'

export const NavBar = () => {

    const localBisonUser = localStorage.getItem("bison_user")
    const bisonUserObject = JSON.parse(localBisonUser)

    if (bisonUserObject.staff) {
        return <EmployeeNav/>
    } else {
        return <CustomerNav />
    }

    }
