import  Register  from "../../../components/register/Register"
import { Helmet } from 'react-helmet';
import Heroimage from '../../../components/assets/background.png'
const RegisterPage =()=>{
    return(
        <div className="justify-content-center d-flex" style={{backgroundImage: `url(${Heroimage}`, height:'100vh', backgroundSize:'cover'}}>
            <Helmet>
                <title>Register Page</title>
            </Helmet>
            <div>
                <Register/>
            </div>
        </div>
    )
}
export default RegisterPage