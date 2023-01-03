//module for navbar views
import {EmployeeNav} from "./EmployeeNav" 
import {CustomerNav} from "./CustomerNav"

export const NavBar = () => {
    const localBisonUser = localStorage.getItem("bison_user")
    const bisonUserObject = JSON.parse(localBisonUser)

    if (bisonUserObject.staff) {
        return <EmployeeNav/>
    } else {
        return <CustomerNav />
    }

    }
