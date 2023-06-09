import Login  from "../../../components/login/Login"
import { Helmet } from 'react-helmet';
import Heroimage from '../../../components/assets/background.png'
const LoginPage =()=>{
    return(
        <div className="justify-content-center d-flex" style={{backgroundImage: `url(${Heroimage}`, height:'100vh', backgroundSize:'cover'}}>
            <Helmet>
                <title >Login Page</title>
            </Helmet>
            <div>
                <Login/>
            </div>
        </div>
    )
}
export default LoginPage