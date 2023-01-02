import { authActions } from "./auth-reducer";
import { toast } from 'react-toastify';



export const login = (userData, history, target) => {
    return async (dispatch) => {
        dispatch(authActions.loginReducer(
            {token:null, loginLoading:true, loginError:""}
        ));
        try {
            const response = await fetch('https://fakestoreapi.com/auth/login',{
                method:'POST',
                body:JSON.stringify(userData),
                headers: {
                    'Content-Type': 'application/json',
                }
            }
            );
            if(!response.ok) {
                throw new Error('Failed to login');
            }
            const tokenData = await response.json();
            localStorage.setItem('token', tokenData.token)
            dispatch(authActions.loginReducer(
                {token:tokenData.token, loginLoading:false, loginError:""}));
            toast.success('Loggedin Successfully');
            history.push(target);
        }
        catch(error) {
            dispatch(authActions.loginReducer(
            {token:null, loginLoading:false, loginError:error.message}
            ));
            toast.error(error.message);
        }
    }
}

export const logout = () => {
    return async (dispatch) => {
        dispatch(authActions.logoutReducer(
            {token:null, loginLoading:false, loginError:''}
        ));
        localStorage.removeItem('token');
        toast.success('Loggedout Successfully');
    }
}