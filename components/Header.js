import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import { XIcon } from '@heroicons/react/solid';
import { MicrophoneIcon } from '@heroicons/react/solid';
import { SearchIcon } from '@heroicons/react/outline';
import Avatar from './Avatar';

function Header() {
  const router = useRouter();
  const searchInputRef = useRef(null);
  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;
    if (!term) return;
    router.push(`/search?term=${term}`);
  };
  return (
    <header className='stick top-0 bg-white'>
      <div className='flex w-full p-6 items-center'>
        <Image
          onClick={() => router.push('/')}
          height={40}
          width={120}
          className='cursor-pointer'
          src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
        />
        <form className='flex flex-grow px-6 py-3 ml-10 mr-5 rounded-full border border-gray-200 rouded-full shadow-lg max-w-3xl items-center'>
          <input
            type='text'
            ref={searchInputRef}
            className='flex-grow w-full focus:outline-none'
          />
          <XIcon
            onClick={() => (searchInputRef.current.value = '')}
            className='h-7 sm:mr-3  text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125'
          />
          <MicrophoneIcon className='h-6 mr-3 hidden sm:inline-flex border-l-2 pl-4 border-gray-300 text-blue-500 cursor-pointer ' />
          <SearchIcon className='h-6 hidden sm:inline-flex text-gray-500 cursor-pointer ' />
          <button hidden type='submit' onClick={search}>
            Search
          </button>
        </form>
        <Avatar className='ml-auto' url='https://i.stack.imgur.com/IvxTk.png' />
      </div>
    </header>
  );
}

export default Header;
