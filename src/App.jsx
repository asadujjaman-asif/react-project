import { useState } from 'react'
import './App.css'
import Input from './components/input';
import Textarea from './components/textarea';
import Button from './components/button';

function App() {

  return (
    <>
      <div className="h-screen w-full flex items-center flex-col pt-32">
        <h1 className="font-bold text-xl">Higher Order Component patterns</h1>
        <div className='mt-4 max-w-lg space-y-4'>
          <Input type="text" placeholder='Enter your name' />
          <Input type="email" placeholder='Enter your Email Address' />
          <Input type="password" placeholder='Enter your password' />
          <Input type="password" placeholder='Enter your confirm password' />
          <Textarea placeholder='Enter your message' />
          <Button>Submit</Button>
        </div>
      </div>
    </>
  )
}

export default App
