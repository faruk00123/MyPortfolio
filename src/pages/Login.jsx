import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, ArrowRight } from 'lucide-react';
import { useAuthApp } from '@/lib/AuthAppContext';

import {
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup
} from "firebase/auth";

import app from '@/firebase/firebase.config';

import Swal from 'sweetalert2';

import { FaGoogle } from "react-icons/fa";

export default function Login() {

  const { onLogin } = useAuthApp();

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const auth = getAuth(app);



  // Email Login

  const handleLogin = (e) => {

    e.preventDefault();
   if(password === 'admin123' && email === 'omar013faruka@gmail.com' || password === 'admin321' && email === 'omorfaruktamim01788@gmail.com'){
    signInWithEmailAndPassword(auth, email, password)

      .then((userCredential) => {

        const user = userCredential.user;

        // Context + localStorage
        onLogin(user);

        
          navigate('/dashboard');
          Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Logged in successfully",
          showConfirmButton: false,
          timer: 1500
          });
        
      })
    }else{
      Swal.fire({
        icon: "error",
        title: "Sorry...",
        text: "Unfortunately, you are not a sub-admin. Please try again.",
        footer: "<a href=\"/register\">If you haven’t applied for sub-admin, please apply.</a>"
      });
      navigate('/');
    }
  };



  // Google Login

  const GoogleLogin = () => {

    const provider = new GoogleAuthProvider();
    console.log(provider)
    signInWithPopup(auth, provider)
    .then((result) => {

        const user = result.user;
        
       if(user.email === 'omar013faruka@gmail.com' || user.email === 'omorfaruktamim01788@gmail.com'){
        // Context + localStorage
        onLogin(user);
        navigate('/dashboard');

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Logged in successfully",
          showConfirmButton: false,
          timer: 1500
        });
      
      
    }else{
      Swal.fire({
        icon: "error",
        title: "Sorry...",
        text: "Unfortunately, you are not a sub-admin. Please try again.",
        footer: "<a href=\"/register\">If you haven’t applied for sub-admin, please apply.</a>"
      });
      navigate('/');
    }
        
      })

    
  };



  return (

    <div className="min-h-[85vh] flex items-center justify-center px-4 sm:px-6">

      <div className="w-full max-w-md animate-fade-in-up">

        {/* Google Login Button */}

        <button
          onClick={GoogleLogin}
          className='flex justify-center items-center font-bold text-xl m-auto gap-2 mb-3'
        >
          <FaGoogle />
          Sign in with Google
        </button>

        {/* Decorative top line */}

        <div className="w-72 m-auto h-[2px] bg-primary mb-7" />

        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">
          Sub <span className="text-primary italic">Admin</span>
        </h2>

        <p className="text-[20px] text-primary font-mono uppercase tracking-[0.2em] text-muted-foreground mb-5 block">
          dashboard access
        </p>

        {/* Login Form */}

        <form onSubmit={handleLogin} className="space-y-6">

          {/* Email */}

          <div>

            <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground mb-2 block">
              Email
            </label>

            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full bg-transparent border-b border-border py-4 text-sm font-mono placeholder:text-muted-foreground/30 focus:outline-none focus:border-primary transition-colors duration-300"
            />

          </div>

          {/* Password */}

          <div>

            <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground mb-2 block">
              Password
            </label>

            <div className="relative">

              <input
                required
                minLength={8}
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full bg-transparent border-b border-border py-4 text-sm font-mono placeholder:text-muted-foreground/30 focus:outline-none focus:border-primary transition-colors duration-300 pr-10"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-muted-foreground hover:text-primary transition-colors"
              >

                {
                  showPassword
                    ? <EyeOff size={16} />
                    : <Eye size={16} />
                }

              </button>

            </div>

          </div>

          {/* Login Button */}

          <button
            type="submit"
            className="group w-full mt-4 py-4 bg-primary text-primary-foreground font-black text-xs uppercase tracking-[0.2em] hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary/20"
          >

            Login

            <ArrowRight
              size={14}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />

          </button>

        </form>

        {/* Bottom */}

        <div className="mt-10 pt-6 border-t border-border">

          <p className="text-[10px] font-mono text-muted-foreground/40 uppercase tracking-wider text-center">

            Do not have an Apply?
            <a className='text-primary ml-1' href="/register">
              Apply Now
            </a>

          </p>

        </div>

      </div>

    </div>

  );
}