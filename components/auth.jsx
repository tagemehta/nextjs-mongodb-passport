import * as React from 'react';
import Input from './input';
import Link from 'next/link';

function Auth({login, register, name, setName, email, setEmail, password, setPassword, onSubmit, error}) {
  return(
      <div className='flex items-center justify-center w-full h-screen' style={{backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>
        <div className={`flex flex-col items-center w-4/12 h-auto ${login ? '-mt-40' : ''} space-y-10 bg-white py-14 rounded-xl`}>
          <h1 className="text-3xl font-semibold">{login ? "Log In": "Sign Up"}</h1>
          
          <form className="w-6/12 space-y-6" onSubmit={onSubmit}>
            {register &&           
              <Input id="name" label="Name" placeholder="Name" stacked type="text" value={name} onChange={(e) => setName(e.target.value)} border/>
            }
            <Input id="email" label="Email" placeholder="user@school.com" stacked type="email" value={email} onChange={(e) => setEmail(e.target.value)} border/>
            <Input id="password" label="Password" stacked type="password" value={password} onChange={(e) => setPassword(e.target.value)} border/>
            <p className="font-medium text-center text-yellow-600">{error}</p>
            <button className="block px-10 mx-auto mt-5 btn btn-indigo" type="submit">{login ? "Log In": "Sign Up"} </button>
            <p className="inline-block text-sm">{login ? "Don't have an account?": "Already have an account?"} {' '}
              <strong className="inline font-semibold text-indigo-500">{login ? <Link href="/auth/signup">Sign Up</Link> : <Link href="/auth/login">Log In</Link> }</strong>
            </p>
          </form>
        </div>
      </div>
  )
}

export default Auth;