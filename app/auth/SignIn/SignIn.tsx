'use client'
import React from 'react'
import { signIn } from 'next-auth/react'

const SignIn = () => {
    return (
        <button onClick={() => signIn('google')}>Login</button>
      )
    }

export default SignIn

