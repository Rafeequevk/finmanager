import React from 'react'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'


const Home = () => {
  return (
    <div className=' bg-black w-full h-screen'>
         <h1 class=" text-3xl font-bold underline">
    Hello world!
  </h1>
  
      <SignedOut>
        <SignInButton className="bg-white text-gray-950 py-1 px-2 rounded-md" />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
  

    </div>
  )
}

export default Home