import { useEffect, useState } from 'react';
import { MoonStarIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';

import { cn } from '@/libs/utils';

export default function ThemeChanger() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(theme == 'light' ? 'dark' : 'light')}
      aria-label={theme == 'light' ? 'Switch to dark' : 'Switch to light'}
      className={cn(
        'group rounded-full p-2.5 shadow-lg shadow-zinc-800/5 backdrop-blur transition',
        'bg-white/90 dark:bg-zinc-800/90 ring-1 ring-zinc-900/5 dark:ring-white/10 dark:hover:ring-white/20',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 dark:focus-visible:ring-neutral-400',
      )}
    >
      {theme == 'dark' ? (
        <MoonStarIcon className='h-5 w-5 text-neutral-400 hover:text-neutral-300 transition-all duration-200' />
      ) : (
        <SunIcon className='h-5 w-5 text-emerald-600 hover:text-emerald-500 transition-all duration-200' />
      )}
    </button>
  );
}
