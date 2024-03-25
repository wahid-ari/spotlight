import { Fragment, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Popover, Transition } from '@headlessui/react';
import { motion } from 'framer-motion';
import { ChevronDownIcon, GithubIcon, InstagramIcon, LinkedinIcon, MailIcon, TwitterIcon, XIcon } from 'lucide-react';

import { portfolios } from '@/data/portfolio';
import { cn } from '@/libs/utils';

import ThemeChanger from '@/components/ThemeChanger';

function Navlink({ href, name }: { href: string; name: string }) {
  return (
    <Link
      href={href}
      className='text-neutral-950 text-sm font-medium hover:text-emerald-500 dark:text-neutral-200 dark:hover:text-emerald-500 transition-all duration-200'
    >
      {name}
    </Link>
  );
}

export default function Home() {
  let tabs = [
    { id: 'all', label: 'All' },
    { id: 'design', label: 'Design' },
    { id: 'development', label: 'Development' },
  ];
  let [activeTab, setActiveTab] = useState(tabs[0].id);
  const [filteredPortfolios, setFilteredPortfolios] = useState(portfolios);
  function changeTab(id: string) {
    if (id != 'all') {
      let filter = portfolios.filter((portfolios) => portfolios.category.includes(id));
      setFilteredPortfolios(filter);
    } else {
      setFilteredPortfolios(portfolios);
    }
    setActiveTab(id);
  }

  return (
    <>
      <Head>
        <title>Spotlight</title>
        <meta name='description' content='Description' />
        <meta name='og:description' content='Description' />
        <meta name='og:title' content='Spotlight' />
        <meta name='og:image' content='/og.png' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site:domain' content='http://localhost:3000' />
        <meta name='twitter:site' content='http://localhost:3000' />
        <meta name='twitter:url' content='http://localhost:3000' />
        <meta name='twitter:image' content='/og.png' />
        <meta name='apple-mobile-web-app-title' content='Spotlight' />
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-icon-180x180.png' />
        <link rel='icon' href='/favicon.ico' />
        <link rel='icon' type='image/png' sizes='192x192' href='/android-icon-192x192.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='96x96' href='/favicon-96x96.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
        <meta name='msapplication-TileImage' content='/ms-icon-144x144.png' />
        <link rel='sitemap' type='application/xml' title='Sitemap' href={`/sitemap.xml`} />
      </Head>
      <div className='bg-neutral-50 dark:bg-black relative'>
        <div className='pointer-events-none absolute inset-0 flex justify-center'>
          <div className='grid h-full w-full max-w-7xl grid-cols-3 gap-3.5 px-4'>
            <div className='border-x border-neutral-200/50 dark:border-white/5'></div>
            <div className='border-x border-neutral-200/50 dark:border-white/5'></div>
            <div className='border-x border-neutral-200/50 dark:border-white/5'></div>
          </div>
        </div>

        <div className='flex justify-center sm:px-8 md:px-12 lg:px-16'>
          <div className='w-full min-h-screen mx-1.5 max-w-7xl bg-white ring-1 ring-neutral-100 dark:bg-neutral-900 dark:ring-neutral-300/20'>
            <nav className='flex items-center justify-between gap-4 mt-6 px-4 sm:px-16 md:px-20 lg:px-24'>
              <Link href='/'>
                <Image src='/icon.png' alt='logo' width={36} height={36} />
              </Link>
              <div
                className={cn(
                  'hidden md:flex items-center gap-6 shadow-lg backdrop-blur transition rounded-full px-6 py-2.5',
                  'dark:bg-neutral-800/90 bg-white/90 shadow-neutral-800/5 ring-1 ring-neutral-900/5 dark:ring-white/10',
                )}
              >
                <Navlink href='#about' name='About' />
                <Navlink href='#article' name='Article' />
                <Navlink href='#projects' name='Projects' />
                <Navlink href='#speaking' name='Speaking' />
                <Navlink href='#uses' name='Uses' />
              </div>
              <div className='flex items-center gap-4 md:gap-0'>
                <Popover className='relative'>
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={cn(
                          'text-sm font-medium text-neutral-950 flex md:hidden gap-2 items-center rounded-full px-4 py-2.5 backdrop-blur transition',
                          'dark:text-neutral-200 ring-1 ring-neutral-900/5 dark:ring-white/10 dark:bg-neutral-800/90 shadow-lg shadow-neutral-800/5',
                        )}
                      >
                        <span>Menu</span>
                        <ChevronDownIcon
                          className={cn('h-4 w-4 transition-all duration-150 ease-in-out', open && 'rotate-180')}
                          aria-hidden='true'
                        />
                      </Popover.Button>
                      <Popover.Overlay className='fixed md:hidden inset-0 z-10 bg-neutral-800/40 backdrop-blur-sm dark:bg-black/80' />
                      <Transition
                        as={Fragment}
                        enter='transition ease-out duration-200'
                        enterFrom='opacity-0 translate-y-1 scale-95'
                        enterTo='opacity-100 translate-y-0 scale-100'
                        leave='transition ease-in duration-150'
                        leaveFrom='opacity-100 translate-y-0 scale-100'
                        leaveTo='opacity-0 translate-y-1 scale-95'
                      >
                        <Popover.Panel className='fixed origin-top md:hidden inset-x-4 top-8 z-50 rounded-3xl bg-white px-8 py-6 ring-1 ring-neutral-900/5 dark:bg-neutral-900 dark:ring-neutral-800'>
                          <div className='flex items-center justify-between mb-4'>
                            <p className='font-medium text-sm text-neutral-600 dark:text-neutral-300'>Navigation</p>
                            <Popover.Button>
                              <XIcon className='h-5 w-5 text-neutral-600 dark:text-neutral-300' />
                            </Popover.Button>
                          </div>
                          <nav>
                            <ul className='divide-y divide-neutral-200/50 text-base text-neutral-800 dark:divide-neutral-700/70 dark:text-neutral-300'>
                              <li className='py-1'>
                                <Link
                                  href='#about'
                                  className='py-2 dark:hover:text-emerald-500 hover:text-emerald-500 flex rounded text-sm font-medium text-gray-900 dark:text-white transition duration-150 ease-in-out'
                                >
                                  About
                                </Link>
                              </li>
                              <li className='py-1'>
                                <Link
                                  href='#article'
                                  className='py-2 dark:hover:text-emerald-500 hover:text-emerald-500 flex rounded text-sm font-medium text-gray-900 dark:text-white transition duration-150 ease-in-out'
                                >
                                  Article
                                </Link>
                              </li>
                              <li className='py-1'>
                                <Link
                                  href='#projects'
                                  className='py-2 dark:hover:text-emerald-500 hover:text-emerald-500 flex rounded text-sm font-medium text-gray-900 dark:text-white transition duration-150 ease-in-out'
                                >
                                  Projects
                                </Link>
                              </li>
                              <li className='py-1'>
                                <Link
                                  href='#speaking'
                                  className='py-2 dark:hover:text-emerald-500 hover:text-emerald-500 flex rounded text-sm font-medium text-gray-900 dark:text-white transition duration-150 ease-in-out'
                                >
                                  Speaking
                                </Link>
                              </li>
                              <li className='py-1'>
                                <Link
                                  href='#uses'
                                  className='py-2 dark:hover:text-emerald-500 hover:text-emerald-500 flex rounded text-sm font-medium text-gray-900 dark:text-white transition duration-150 ease-in-out'
                                >
                                  Uses
                                </Link>
                              </li>
                            </ul>
                          </nav>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
                <ThemeChanger />
              </div>
            </nav>

            <section id='#about' className='z-[1] relative px-4 sm:px-16 md:px-20 lg:px-24 mt-32'>
              <div className='max-w-2xl'>
                <p className='text-4xl leading-[1.2] sm:leading-[1.15] font-bold tracking-tight text-neutral-800 sm:text-5xl dark:text-neutral-100'>
                  Software designer, founder, and amateur astronaut.
                </p>
                <p className='mt-6 text-base text-neutral-600 dark:text-neutral-400'>
                  I’m Spencer, a software designer and entrepreneur based in New York City. I’m the founder and CEO of
                  Planetaria, where we develop technologies that empower regular people to explore space on their own
                  terms.
                </p>
                <div className='mt-6 flex gap-6'>
                  <a href='mailto:wahiid.ari@gmail.com' target='_blank'>
                    <MailIcon className='h-5 w-5 text-neutral-600 dark:text-neutral-400 dark:hover:text-emerald-500 transition-all duration-150 hover:text-emerald-500' />
                  </a>
                  <a href='https://twitter.com/' target='_blank'>
                    <TwitterIcon className='h-5 w-5 text-neutral-600 dark:text-neutral-400 dark:hover:text-emerald-500 transition-all duration-150 hover:text-emerald-500' />
                  </a>
                  <a href='https://www.instagram.com/' target='_blank'>
                    <InstagramIcon className='h-5 w-5 text-neutral-600 dark:text-neutral-400 dark:hover:text-emerald-500 transition-all duration-150 hover:text-emerald-500' />
                  </a>
                  <a href='https://www.github.com/' target='_blank'>
                    <GithubIcon className='h-5 w-5 text-neutral-600 dark:text-neutral-400 dark:hover:text-emerald-500 transition-all duration-150 hover:text-emerald-500' />
                  </a>
                  <a href='https://linkedin.com/' target='_blank'>
                    <LinkedinIcon className='h-5 w-5 text-neutral-600 dark:text-neutral-400 dark:hover:text-emerald-500 transition-all duration-150 hover:text-emerald-500' />
                  </a>
                </div>
              </div>
            </section>

            <section className='mt-16 sm:mt-20 mx-0 sm:-mx-8 md:-mx-12 lg:-mx-16 2xl:-mx-40 '>
              <div className='flex justify-center gap-5 overflow-hidden py-4 sm:gap-8'>
                <div className='relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-neutral-100 sm:w-72 sm:rounded-2xl dark:bg-neutral-800 rotate-2'>
                  <Image
                    src='https://images.unsplash.com/photo-1707343843598-39755549ac9a?q=80&w=720'
                    fill
                    alt='Image'
                    className='absolute inset-0 h-full w-full object-cover'
                  />
                </div>
                <div className='relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-neutral-100 sm:w-72 sm:rounded-2xl dark:bg-neutral-800 -rotate-2'>
                  <Image
                    src='https://images.unsplash.com/photo-1707343844152-6d33a0bb32c3?q=80&w=720'
                    fill
                    alt='Image'
                    className='absolute inset-0 h-full w-full object-cover'
                  />
                </div>
                <div className='relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-neutral-100 sm:w-72 sm:rounded-2xl dark:bg-neutral-800'>
                  <Image
                    src='https://images.unsplash.com/photo-1711117479067-584465e4466a?q=80&w=720'
                    fill
                    alt='Image'
                    className='absolute inset-0 h-full w-full object-cover'
                  />
                </div>
                <div className='relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-neutral-100 sm:w-72 sm:rounded-2xl dark:bg-neutral-800 rotate-2'>
                  <Image
                    src='https://images.unsplash.com/photo-1682686580452-37f1892ee5e8?q=80&w=720'
                    fill
                    alt='Image'
                    className='absolute inset-0 h-full w-full object-cover'
                  />
                </div>
                <div className='relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-neutral-100 sm:w-72 sm:rounded-2xl dark:bg-neutral-800 -rotate-2'>
                  <Image
                    src='https://images.unsplash.com/photo-1682686581220-689c34afb6ef?q=80&w=720'
                    fill
                    alt='Image'
                    className='absolute inset-0 h-full w-full object-cover'
                  />
                </div>
              </div>
            </section>

            <section id='#portfolio' className='px-16 mt-32'>
              <p className='text-2xl text-center mb-8 leading-[1.2] sm:leading-[1.15] font-bold tracking-tight text-neutral-800 sm:text-3xl dark:text-neutral-100'>
                Portfolio
              </p>
              <div className='flex justify-center space-x-2'>
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => changeTab(tab.id)}
                    className={cn(
                      activeTab === tab.id
                        ? '!text-white dark:text-white'
                        : 'hover:text-neutral-950 dark:hover:text-white',
                      'relative rounded-full px-3 py-1 text-sm font-medium text-neutral-600 transition-all duration-150 dark:text-neutral-300',
                    )}
                    style={{
                      WebkitTapHighlightColor: 'transparent',
                    }}
                  >
                    {activeTab === tab.id && (
                      <motion.span
                        layoutId='bubble'
                        className='absolute inset-0 z-[1] bg-emerald-500 dark:bg-emerald-500'
                        style={{ borderRadius: 9999 }}
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className='z-[2] relative'>{tab.label}</span>
                  </button>
                ))}
              </div>
              <div className='my-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8'>
                {filteredPortfolios.map((item, index) => (
                  <div
                    key={index}
                    className='border group rounded-md border-neutral-100 dark:border-neutral-700 shadow-sm mx-0.5'
                  >
                    <div className='relative h-64'>
                      <Image alt={item.name} src={item.images[0]} fill className='object-center' />
                    </div>
                    <div className='p-4'>
                      <p className='font-medium group-hover:text-emerald-500 transition-all duration-150 text-left'>
                        {item.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <footer
              className={cn(
                'flex flex-wrap gap-4 justify-between items-center border-t border-t-neutral-200/50',
                'dark:border-t-neutral-700/50 px-4 sm:px-16 md:px-20 lg:px-24 py-12 mt-16',
              )}
            >
              <div className='flex items-center gap-6 mx-auto lg:mx-0'>
                <Link
                  href='#'
                  className='underline-center-animation text-sm dark:hover:text-emerald-500 hover:text-emerald-500  dark:text-neutral-200 text-neutral-800 font-medium'
                >
                  About
                </Link>
                <Link
                  href='#'
                  className='underline-center-animation text-sm dark:hover:text-emerald-500 hover:text-emerald-500  dark:text-neutral-200 text-neutral-800 font-medium'
                >
                  Article
                </Link>
                <Link
                  href='#'
                  className='underline-center-animation text-sm dark:hover:text-emerald-500 hover:text-emerald-500  dark:text-neutral-200 text-neutral-800 font-medium'
                >
                  Projects
                </Link>
                <Link
                  href='#'
                  className='underline-center-animation text-sm dark:hover:text-emerald-500 hover:text-emerald-500  dark:text-neutral-200 text-neutral-800 font-medium'
                >
                  Speaking
                </Link>
                <Link
                  href='#'
                  className='underline-center-animation text-sm dark:hover:text-emerald-500 hover:text-emerald-500  dark:text-neutral-200 text-neutral-800 font-medium'
                >
                  Uses
                </Link>
              </div>
              <p className='text-neutral-500 dark:text-neutral-400 text-sm mx-auto lg:mx-0 lg:text-right text-center'>
                © 2024 Spencer Sharp. All rights reserved.
              </p>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}
