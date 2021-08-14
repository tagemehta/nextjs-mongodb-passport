import axios from 'axios';
import { useRouter } from 'next/dist/client/router';
import React from 'react';
import Auth from '../../components/auth';
import { useUser } from '../../components/user-context';

function Login() {
  const router = useRouter();
  const { setUser } = useUser();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('../../api/auth/login', { email, password });

      if (data.result) {
        setUser(data.result);
        router.push('../../success');
      } else setError(data.error);
    } catch (err) {
      // Make sure that your env file is set up correctly
      setError('Username or password invalid');
    }
  };
  return (
    <Auth
      login
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      onSubmit={onSubmit}
      error={error}
    />
  );
}

export default Login;
