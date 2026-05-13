import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { Eye, EyeOff, ArrowRight } from 'lucide-react';

import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";

import app from '@/firebase/firebase.config';

import Swal from 'sweetalert2';

import { FaGoogle } from 'react-icons/fa';

import { useAuthApp } from '@/lib/AuthAppContext';



export default function Register() {

  const { onLogin } = useAuthApp();

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const auth = getAuth(app);



  // Register

  const handleRegister = (e) => {

    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)

      .then((userCredential) => {

        const user = userCredential.user;

        Swal.fire({
          icon: "success",
          title: "Apply Successfully",
          text: "Your application has been submitted. Please wait for approval.",
        });

        navigate('/');

      })

      .catch((error) => {

        console.error("Error registering user:", error.message);

        Swal.fire({
          icon: "error",
          title: "Apply Failed",
          text: error.message,
        });

      });

  };



  // Google Login

  const GoogleLogin = () => {

    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)

      .then((result) => {

        const user = result.user;

        // Context + localStorage
        

        navigate('/');

        Swal.fire({
          icon: "success",
          title: "Apply Successfully",
          text: "Your application has been submitted. Please wait for approval.",
        });

      })

      .catch((error) => {

        console.error(error);

        Swal.fire({
          icon: "error",
          title: "Sorry...",
          text: "Failed to log in with Google. Please try again.",
        });

      });

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
          Sub Admin<span className="text-primary italic"> Apply</span>
        </h2>

        <p className="text-[20px] text-primary font-mono uppercase tracking-[0.2em] text-muted-foreground mb-5 block">
          Sub-Admin
        </p>

        {/* Register Form */}

        <form onSubmit={handleRegister} className="space-y-6">

          {/* Email */}

          <div>

            <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground mb-2 block">
              Email
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
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
                minLength={8}
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
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

          {/* Register Button */}

          <button
            type="submit"
            className="group w-full mt-4 py-4 bg-primary text-primary-foreground font-black text-xs uppercase tracking-[0.2em] hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary/20"
          >

            Register

            <ArrowRight
              size={14}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />

          </button>

        </form>

        {/* Bottom */}

        <div className="mt-10 pt-6 border-t border-border">

          <p className="text-[10px] font-mono text-muted-foreground/40 uppercase tracking-wider text-center">

            Already have an Apply?

            <a className='text-primary ml-1' href="/login">
              Access
            </a>

          </p>

        </div>

      </div>

    </div>

  );
}