import { useEffect, useState } from 'react';
import { MoonStarIcon, SunIcon, SunMoonIcon } from 'lucide-react';
import { useTheme } from 'next-themes';

import { cn } from '@/libs/utils';

export default function ThemeChanger() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        className={cn(
          'group rounded-full p-2.5 shadow-lg shadow-zinc-800/5 transition',
          'ring-1 ring-zinc-900/5 dark:ring-white/10 dark:hover:ring-white/20',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 dark:focus-visible:ring-neutral-400',
          'bg-white/50 dark:bg-neutral-900/30',
          'backdrop-blur-md backdrop-filter',
        )}
      >
        <SunMoonIcon className='h-5 w-5 text-neutral-400 transition-all duration-200' />
      </button>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme == 'light' ? 'dark' : 'light')}
      aria-label={theme == 'light' ? 'Switch to dark' : 'Switch to light'}
      className={cn(
        'group rounded-full p-2.5 shadow-lg shadow-zinc-800/5 transition',
        'ring-1 ring-zinc-900/5 dark:ring-white/10 dark:hover:ring-white/20',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 dark:focus-visible:ring-neutral-400',
        'bg-white/50 dark:bg-neutral-900/30',
        'backdrop-blur-md backdrop-filter',
      )}
    >
      {theme == 'dark' ? (
        <MoonStarIcon className='h-5 w-5 text-neutral-200 hover:text-white transition-all duration-200' />
      ) : (
        <SunIcon className='h-5 w-5 text-emerald-500 hover:text-emerald-600 transition-all duration-200' />
      )}
    </button>
  );
}
