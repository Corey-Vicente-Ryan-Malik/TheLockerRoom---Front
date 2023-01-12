import { useNavigate } from 'react-router-dom';

const Login = (props, {}) => {
  const navigate = useNavigate();
  const onClick = (e) => {
    e.preventDefault();
    navigate('/');
    console.log('Click Check.');
  };
};

export default Login;
