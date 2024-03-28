import { useState } from 'react';
import Image from 'next/image';
import { ExternalLinkIcon, FullscreenIcon } from 'lucide-react';

import { cn } from '@/libs/utils';

type Props = {
  className?: string;
  name: string;
  image: string;
  url: string;
  onClick: () => void;
  [props: string]: any;
};

export default function PortfolioCard({ className, name, image, url, onClick, ...props }: Props) {
  const [isLoading, setLoading] = useState(true);

  return (
    <div
      {...props}
      className={cn(
        'relative border group rounded-md border-neutral-100 dark:border-neutral-700 shadow-sm mx-0.5',
        className,
      )}
    >
      <div className='relative h-64'>
        <Image
          alt={name}
          src={image}
          fill
          className={cn('object-center object-cover rounded-md', isLoading ? 'blur-sm' : 'blur-0')}
          onLoad={() => setLoading(false)}
          unoptimized
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          priority={false}
        />
      </div>
      <button onClick={onClick} className='absolute inset-0' aria-label={name} />
      <div
        className={cn(
          'absolute rounded-md inset-0 bg-black/50 backdrop-blur-md backdrop-filter p-4 text-white',
          'opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100',
        )}
      >
        <div className='flex flex-col h-full w-full items-center justify-center'>
          <p className='font-semibold text-2xl text-white transition-all duration-150 text-center'>{name}</p>
          <div className='flex items-center justify-center mt-8 gap-6'>
            <button
              onClick={onClick}
              className='flex hover:bg-emerald-500 transition-all text-[15px] duration-200 gap-2 items-center font-medium border border-neutral-500 px-3 py-1 rounded-full'
            >
              <FullscreenIcon className='h-4 w-4' /> Detail
            </button>
            <a
              href={url}
              target='_blank'
              className='flex hover:bg-emerald-500 transition-all text-[15px] duration-200 gap-2 items-center font-medium border border-neutral-500 px-3 py-1 rounded-full'
            >
              <ExternalLinkIcon className='h-4 w-4' /> Live
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
