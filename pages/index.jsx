import { useTheme } from 'next-themes';
import React, { useState, useEffect } from 'react';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);
  return (
    <div className='h-screen w-full bg-background flex flex-col justify-center items-center space-y-4'>
      <h1 className='text-foreground text-2xl font-bold'>Hello World</h1>
      <button
        role='button'
        onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
        className='outline:none bg-foreground text-background px-4 py-2 rounded-lg focus:ring'
      >
        {mounted && resolvedTheme === 'light' ? 'Dark Mode' : 'Light Mode'}
      </button>
    </div>
  );
}
