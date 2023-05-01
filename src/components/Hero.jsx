import React from 'react'
import { logo } from '../assets'

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-4'>
        <img className='w-28 object-contain' src={logo} alt="Logo" />

        <button 
        type='button'
        onClick={() => window.open('https://github.com/ahmed20008')}
        className='black_btn'
        >
          Github
        </button>
      </nav>
      <h1 className='head_text'>
        Summarize Articals with <br className='max-md:hidden' />
        <span className='orange_gradient'>Open AI GPT-4</span>
      </h1>
      <h2 className='desc'>
        Simplify your reading with Sumzz. An Open Source articel summarizer that transform lengthly articles into clear and consise summaries. 
      </h2>
    </header>
  )
}

export default Hero