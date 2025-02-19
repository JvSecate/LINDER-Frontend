import {AuthRoutes} from "./auth.routes";
import {AuthContext} from "../contexts/auth";
import {useContext} from "react";
import AppRoutes from "./app.routes";

export const Routes = () => {
    const {signed} = useContext(AuthContext);
    return !signed ? <AuthRoutes/> : <AppRoutes/>;
}
