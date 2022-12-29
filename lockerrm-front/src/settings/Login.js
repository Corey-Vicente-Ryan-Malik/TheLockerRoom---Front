import { useNavigate } from 'react-router-dom';

const Login = (props, {}) => {
  const navigate = useNavigate();
  const onClick = (e) => {
    e.preventDefault();
    navigate('/');
    console.log('Click Check.');
  };
};
// function  Login () {
//     return (
//         <div className="Login">
//             <h1>This is the [ Log in page]</h1>
//         </div>
//     );
// }

export default Login;
