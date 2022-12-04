import { CustomerViews } from "./CustomerViews"
import { EmployeeViews } from "./EmployeeViews"

export const ApplicationViews = () => {

	const localBisonUser = localStorage.getItem("bison_user")
    const bisonUserObject = JSON.parse(localBisonUser)
    
    if (bisonUserObject.staff) {
        //return employee view
        return <EmployeeViews />
    } else {
        //return customer view
        return <CustomerViews />
    }
}