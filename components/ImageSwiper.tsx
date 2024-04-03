import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { cn } from '@/libs/utils';

export default function ImageSwiper({ name, images }: { name: string; images: string[] }) {
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);

  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation, Pagination]}
        navigation={{
          prevEl,
          nextEl,
        }}
        loop={true}
        className='w-full md:w-[80%] lg:w-full py-4'
      >
        {images?.map((item: string, index: number) => (
          <SwiperSlide key={index}>
            <div className='relative h-64 sm:h-96 md:h-[400px] lg:h-[450px]'>
              <Image alt={name} src={item} fill className='object-cover object-top' unoptimized />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        aria-label='Prev Image'
        ref={(node) => setPrevEl(node)}
        className={cn(
          'absolute left-0 top-[38%] z-[70] cursor-pointer rounded-full p-1 shadow-lg transition-all sm:top-[38%] md:top-[40%] lg:top-[45%]',
          'border bg-neutral-100 hover:bg-neutral-200 dark:border-neutral-800 dark:bg-black/60 dark:hover:bg-black/90',
        )}
      >
        <ChevronLeftIcon className='h-4 w-4 dark:text-white' />
      </button>
      <button
        aria-label='Next Image'
        ref={(node) => setNextEl(node)}
        className={cn(
          'absolute right-0 top-[38%] z-[70] cursor-pointer rounded-full p-1 shadow-lg transition-all sm:top-[38%] md:top-[40%] lg:top-[45%]',
          'border bg-neutral-100 hover:bg-neutral-200 dark:border-neutral-800 dark:bg-black/60 dark:hover:bg-black/90',
        )}
      >
        <ChevronRightIcon className='h-4 w-4 dark:text-white' />
      </button>
    </>
  );
}
