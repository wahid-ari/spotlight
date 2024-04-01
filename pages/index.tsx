import { Fragment, useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Dialog, Popover, Transition } from '@headlessui/react';
import useDetectScroll from '@smakss/react-scroll-direction';
import AOS from 'aos';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpRight,
  ChevronDownIcon,
  ExternalLinkIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  LinkIcon,
  MailIcon,
  TwitterIcon,
  XIcon,
} from 'lucide-react';
import { ReactTyped } from 'react-typed';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'animate.css';
import 'aos/dist/aos.css';

import { portfolios } from '@/data/portfolio';
import { certificates, educations, experiences } from '@/data/resume';
import { skills } from '@/data/skills';
import { tools } from '@/data/tools';
import { cn } from '@/libs/utils';

import PortfolioCard from '@/components/PortfolioCard';
import ThemeChanger from '@/components/ThemeChanger';
import ToolCard from '@/components/ToolCard';

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
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  const { scrollDir } = useDetectScroll();

  let tabs = [
    { id: 'all', label: 'All' },
    { id: 'design', label: 'Design' },
    { id: 'development', label: 'Development' },
  ];
  let [activeTab, setActiveTab] = useState(tabs[0].id);
  const [filteredPortfolios, setFilteredPortfolios] = useState(portfolios);
  function changeTab(id: string) {
    if (id != 'all') {
      let filter = portfolios.filter((portfolio) => portfolio.category.includes(id));
      setFilteredPortfolios(filter);
    } else {
      setFilteredPortfolios(portfolios);
    }
    setActiveTab(id);
  }
  const [openModal, setOpenModal] = useState(false);
  const [openedPortfolio, setOpenedPortfolio] = useState({
    name: '',
    category: [''],
    description: '',
    url: '',
    source: '',
    design: '',
    stack: '',
    github: '',
    images: [''],
  });
  function handleOpenPortfolio(name: string) {
    let filter = portfolios.filter((portfolio) => portfolio.name == name)[0];
    setOpenedPortfolio(filter);
    setOpenModal(true);
  }
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);

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
          <div className='grid h-full w-full max-w-7xl grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-4 gap-3.5 px-4'>
            <div className='border-x border-neutral-200/50 dark:border-white/10'></div>
            <div className='border-x border-neutral-200/50 dark:border-white/10'></div>
            <div className='border-x hidden sm:block lg:hidden xl:block border-neutral-200/50 dark:border-white/10'></div>
            <div className='border-x hidden xl:block border-neutral-200/50 dark:border-white/10'></div>
          </div>
        </div>

        <div className='flex justify-center sm:px-8 md:px-12 lg:px-16'>
          <div className='w-full min-h-screen mx-1.5 max-w-7xl bg-white ring-1 ring-neutral-100 dark:bg-neutral-900 dark:ring-neutral-300/20'>
            <nav
              className={cn(
                'flex items-center z-50 justify-between gap-4 mt-6 px-4 sm:px-16 md:px-20 lg:px-24',
                scrollDir == 'up' && 'sticky top-6',
              )}
            >
              <Link href='/'>
                <Image src='/icon.png' alt='logo' width={36} height={36} />
              </Link>
              <div
                className={cn(
                  'hidden md:flex items-center gap-6 shadow-lg transition rounded-full px-6 py-2.5',
                  'shadow-neutral-800/5 ring-1 ring-neutral-900/5 dark:ring-white/10',
                  'bg-white/50 dark:bg-neutral-900/30',
                  'backdrop-blur-md backdrop-filter',
                )}
              >
                <Navlink href='#about' name='About' />
                <Navlink href='#projects' name='Projects' />
                <Navlink href='#resume' name='Resume' />
                <Navlink href='#skills' name='Skills' />
                <Navlink href='#tools' name='Tools' />
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
                      <Popover.Overlay className='fixed md:hidden inset-0 z-10 bg-white/50 dark:bg-neutral-900/30 backdrop-blur-md backdrop-filter' />
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
                                  href='#projects'
                                  className='py-2 dark:hover:text-emerald-500 hover:text-emerald-500 flex rounded text-sm font-medium text-gray-900 dark:text-white transition duration-150 ease-in-out'
                                >
                                  Projects
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

            <section id='about' className='scroll-mt-32 z-[1] relative px-6 sm:px-16 md:px-20 lg:px-24 mt-32'>
              <AnimatePresence>
                <motion.div layout initial={{ transform: 'scale(0.9)' }} animate={{ transform: 'scale(1)' }}>
                  <div className='max-w-2xl'>
                    <p className='text-4xl leading-[1.2] sm:leading-[1.15] font-bold tracking-tight text-neutral-800 sm:text-5xl dark:text-neutral-100'>
                      a{' '}
                      <ReactTyped
                        strings={['IT Enthusiast', 'Frontend Dev']}
                        typeSpeed={150}
                        backSpeed={50}
                        loop
                        className='text-emerald-500 italic'
                        showCursor={false}
                      />
                      , founder, and amateur astronot.
                    </p>

                    <p className='mt-6 text-base text-neutral-600 dark:text-neutral-400'>
                      I’m Spotlight, a software designer and entrepreneur based in New York City. I’m the founder and
                      CEO of Planetaria, where we develop technologies that empower regular people to explore space on
                      their own terms.
                    </p>
                    <div className='mt-6 flex gap-6'>
                      <a href='mailto:wahiid.ari@gmail.com' target='_blank' aria-label='Email'>
                        <MailIcon className='h-5 w-5 text-neutral-600 dark:text-neutral-400 dark:hover:text-emerald-500 transition-all duration-150 hover:text-emerald-500' />
                      </a>
                      <a href='https://twitter.com/' target='_blank' aria-label='Twitter'>
                        <TwitterIcon className='h-5 w-5 text-neutral-600 dark:text-neutral-400 dark:hover:text-emerald-500 transition-all duration-150 hover:text-emerald-500' />
                      </a>
                      <a href='https://www.instagram.com/' target='_blank' aria-label='Instagram'>
                        <InstagramIcon className='h-5 w-5 text-neutral-600 dark:text-neutral-400 dark:hover:text-emerald-500 transition-all duration-150 hover:text-emerald-500' />
                      </a>
                      <a href='https://www.github.com/' target='_blank' aria-label='Github'>
                        <GithubIcon className='h-5 w-5 text-neutral-600 dark:text-neutral-400 dark:hover:text-emerald-500 transition-all duration-150 hover:text-emerald-500' />
                      </a>
                      <a href='https://linkedin.com/' target='_blank' aria-label='Linkedin'>
                        <LinkedinIcon className='h-5 w-5 text-neutral-600 dark:text-neutral-400 dark:hover:text-emerald-500 transition-all duration-150 hover:text-emerald-500' />
                      </a>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </section>

            <section className='scroll-mt-24 mt-16 sm:mt-20 mx-0 sm:-mx-8 md:-mx-12 lg:-mx-16 2xl:-mx-40 '>
              <div className='flex justify-center gap-5 overflow-hidden py-4 sm:gap-8'>
                <div className='relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-neutral-100 sm:w-72 sm:rounded-2xl dark:bg-neutral-800 rotate-2'>
                  <Image
                    data-aos='flip-left'
                    src='https://images.unsplash.com/photo-1707343843598-39755549ac9a?q=80&w=720'
                    fill
                    alt='Image'
                    className='absolute inset-0 h-full w-full object-cover'
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                  />
                </div>
                <div className='relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-neutral-100 sm:w-72 sm:rounded-2xl dark:bg-neutral-800 -rotate-2'>
                  <Image
                    data-aos='flip-left'
                    data-aos-duration='1000'
                    src='https://images.unsplash.com/photo-1707343844152-6d33a0bb32c3?q=80&w=720'
                    fill
                    alt='Image'
                    className='absolute inset-0 h-full w-full object-cover'
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                  />
                </div>
                <div className='relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-neutral-100 sm:w-72 sm:rounded-2xl dark:bg-neutral-800'>
                  <Image
                    data-aos='flip-left'
                    data-aos-duration='2000'
                    src='https://images.unsplash.com/photo-1711117479067-584465e4466a?q=80&w=720'
                    fill
                    alt='Image'
                    className='absolute inset-0 h-full w-full object-cover'
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                  />
                </div>
                <div className='relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-neutral-100 sm:w-72 sm:rounded-2xl dark:bg-neutral-800 rotate-2'>
                  <Image
                    data-aos='flip-left'
                    data-aos-duration='3000'
                    src='https://images.unsplash.com/photo-1682686580452-37f1892ee5e8?q=80&w=720'
                    fill
                    alt='Image'
                    className='absolute inset-0 h-full w-full object-cover'
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                  />
                </div>
                <div className='relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-neutral-100 sm:w-72 sm:rounded-2xl dark:bg-neutral-800 -rotate-2'>
                  <Image
                    data-aos='flip-left'
                    data-aos-duration='4000'
                    src='https://images.unsplash.com/photo-1682686581220-689c34afb6ef?q=80&w=720'
                    fill
                    alt='Image'
                    className='absolute inset-0 h-full w-full object-cover'
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                  />
                </div>
              </div>
            </section>

            <section id='projects' className='scroll-mt-24 z-[1] relative px-6 sm:px-8 md:px-12 lg:px-16 mt-32'>
              <p className='text-2xl text-center mb-8 leading-[1.2] sm:leading-[1.15] font-bold tracking-tight text-neutral-800 sm:text-3xl dark:text-neutral-100'>
                Projects
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
                      'relative rounded-full px-3 py-1 text-[15px] font-medium text-neutral-600 transition-all duration-150 dark:text-neutral-300',
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
              <div className='z-[1] relative my-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                <AnimatePresence>
                  {filteredPortfolios.map((item, index) => (
                    <motion.div
                      key={index}
                      layout
                      initial={{ transform: 'scale(0.8)' }}
                      animate={{ transform: 'scale(1)' }}
                    >
                      <PortfolioCard
                        className='animate__animated animate__fadeIn'
                        name={item.name}
                        image={item.images[0]}
                        url={item.url}
                        onClick={() => handleOpenPortfolio(item.name)}
                      />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
              <Transition appear show={openModal} as={Fragment}>
                <Dialog as='div' className='relative z-[60]' onClose={() => setOpenModal(false)}>
                  <Transition.Child
                    as={Fragment}
                    enter='ease-out duration-300'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in duration-200'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                  >
                    <div className='fixed inset-0 bg-white/50 dark:bg-neutral-900/30 backdrop-blur-md backdrop-filter' />
                  </Transition.Child>

                  <div className='fixed inset-0 overflow-y-auto'>
                    <div className='flex min-h-full items-center justify-center p-4 text-center'>
                      <Transition.Child
                        as={Fragment}
                        enter='ease-out duration-300'
                        enterFrom='opacity-0 scale-95'
                        enterTo='opacity-100 scale-100'
                        leave='ease-in duration-200'
                        leaveFrom='opacity-100 scale-100'
                        leaveTo='opacity-0 scale-95'
                      >
                        <Dialog.Panel className='w-full max-w-5xl transform overflow-hidden rounded-2xl bg-white dark:bg-neutral-800 p-4 md:p-6 text-left align-middle shadow-xl transition-all'>
                          <div className='flex items-center justify-between flex-wrap'>
                            <Dialog.Title
                              as='h3'
                              className='text-2xl font-semibold leading-6 text-gray-900 dark:text-white'
                            >
                              {openedPortfolio.name}
                            </Dialog.Title>
                            <button type='button' onClick={() => setOpenModal(false)}>
                              <XIcon className='h-5 w-5 text-neutral-500 dark:text-neutral-200' />
                            </button>
                          </div>
                          <div className='mt-6 flex flex-wrap justify-between dark:text-neutral-800'>
                            <div className='w-full lg:w-3/5 relative'>
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
                                {openedPortfolio.images?.map((item: string, index: number) => (
                                  <SwiperSlide key={index}>
                                    <div className='relative h-64 sm:h-96 md:h-[400px] lg:h-[450px]'>
                                      <Image
                                        alt={openedPortfolio.name}
                                        src={item}
                                        fill
                                        className='object-cover object-top'
                                        unoptimized
                                      />
                                    </div>
                                  </SwiperSlide>
                                ))}
                              </Swiper>
                              <button
                                aria-label='Prev'
                                ref={(node) => setPrevEl(node)}
                                className={cn(
                                  'absolute left-0 top-[38%] z-[70] cursor-pointer rounded-full p-2 shadow-lg transition-all sm:top-[38%] md:top-[40%] lg:top-[45%]',
                                  'border bg-neutral-100 hover:bg-neutral-200 dark:border-neutral-800 dark:bg-black/60 dark:hover:bg-black/90',
                                )}
                              >
                                <ArrowLeftIcon className='h-5 w-5 dark:text-white' />
                              </button>
                              <button
                                aria-label='Next'
                                ref={(node) => setNextEl(node)}
                                className={cn(
                                  'absolute right-0 top-[38%] z-[70] cursor-pointer rounded-full p-2 shadow-lg transition-all sm:top-[38%] md:top-[40%] lg:top-[45%]',
                                  'border bg-neutral-100 hover:bg-neutral-200 dark:border-neutral-800 dark:bg-black/60 dark:hover:bg-black/90',
                                )}
                              >
                                <ArrowRightIcon className='h-5 w-5 dark:text-white' />
                              </button>
                            </div>
                            <div className='w-full lg:w-2/5 md:pl-8'>
                              <h4 className='font-semibold text-xl mt-4 lg:mt-0 mb-4 text-gray-900 dark:text-white'>
                                Project Information
                              </h4>
                              <table>
                                <tr>
                                  <td className='py-1 font-medium dark:text-neutral-200'>Category</td>
                                  <td className='px-2 dark:text-neutral-200'>:</td>
                                  <td className='dark:text-neutral-200'>
                                    {openedPortfolio.category.map((item, index) => (
                                      <span key={index}>
                                        <span>{item.replace('d', 'D')}</span>
                                        <span>{index < openedPortfolio.category.length - 1 && ', '}</span>
                                      </span>
                                    ))}
                                  </td>
                                </tr>
                                <tr>
                                  <td className='py-1 font-medium dark:text-neutral-200'>Design</td>
                                  <td className='px-2 dark:text-neutral-200'>:</td>
                                  <td className='dark:text-neutral-200'>{openedPortfolio.design}</td>
                                </tr>
                                <tr>
                                  <td className='py-1 font-medium dark:text-neutral-200'>Stack</td>
                                  <td className='px-2 dark:text-neutral-200'>:</td>
                                  <td className='dark:text-neutral-200'>{openedPortfolio.stack}</td>
                                </tr>
                                <tr>
                                  <td className='py-1 font-medium dark:text-neutral-200'>URL</td>
                                  <td className='px-2 dark:text-neutral-200'>:</td>
                                  <td>
                                    <a
                                      target='_blank'
                                      href={openedPortfolio.url}
                                      className='w-16 flex gap-1 items-center text-emerald-500 hover:text-emerald-600 transition-all duration-200'
                                    >
                                      Open <ExternalLinkIcon className='h-3 w-3' />
                                    </a>
                                  </td>
                                </tr>
                                <tr>
                                  <td className='py-1 font-medium dark:text-neutral-200'>Github</td>
                                  <td className='px-2 dark:text-neutral-200'>:</td>
                                  <td>
                                    <a
                                      target='_blank'
                                      href={openedPortfolio.github}
                                      className='w-16 flex gap-1 items-center text-emerald-500 hover:text-emerald-600 transition-all duration-200'
                                    >
                                      Open <ExternalLinkIcon className='h-3 w-3' />
                                    </a>
                                  </td>
                                </tr>
                                <tr>
                                  <td className='py-1 font-medium dark:text-neutral-200'>Source</td>
                                  <td className='px-2 dark:text-neutral-200'>:</td>
                                  <td>
                                    {openedPortfolio.source ? (
                                      <a
                                        target='_blank'
                                        href={openedPortfolio.source}
                                        className='w-16 flex gap-1 items-center text-emerald-500 hover:text-emerald-600 transition-all duration-200'
                                      >
                                        Open <ExternalLinkIcon className='h-3 w-3' />
                                      </a>
                                    ) : (
                                      <span className='dark:text-neutral-200'>-</span>
                                    )}
                                  </td>
                                </tr>
                              </table>
                              <p className='mt-4 dark:text-neutral-200'>{openedPortfolio.description}</p>
                            </div>
                          </div>
                        </Dialog.Panel>
                      </Transition.Child>
                    </div>
                  </div>
                </Dialog>
              </Transition>
            </section>

            <section id='resume' className='scroll-mt-24 z-[1] relative px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 mt-32'>
              <p className='text-2xl text-center mb-4 leading-[1.2] sm:leading-[1.15] font-bold tracking-tight text-neutral-800 sm:text-3xl dark:text-neutral-100'>
                Resume
              </p>
              <div className='bg-emerald-500 h-1 b-4 mx-auto w-16 rounded'></div>
              <div className='my-8 grid grid-cols-1 lg:grid-cols-2 gap-8'>
                <div>
                  <h4 className='font-semibold text-2xl pb-2'>Pendidikan</h4>
                  {educations.map((item, index) => (
                    <div key={index} className='my-2 flex gap-2'>
                      <div>
                        <h5 className='text-emerald-500 font-bold'>{item.name}</h5>
                        <p className='font-medium my-1 dark:text-neutral-200 text-[13px]'>{item.year}</p>
                        <p className='font-medium my-1 flex gap-1 items-center'>
                          {item.major}{' '}
                          <a
                            href={item.url}
                            title={`${item.major} - ${item.name}`}
                            aria-label={`${item.major} - ${item.name}`}
                            target='_blank'
                            className='text-emerald-500'
                          >
                            <LinkIcon className='h-3.5 w-3.5' />
                          </a>
                        </p>
                      </div>
                    </div>
                  ))}

                  <h4 className='font-semibold text-2xl mt-8 pb-2'>Sertifikat</h4>
                  {certificates.map((item, index) => (
                    <div key={index} className='my-2 flex gap-2'>
                      <div>
                        <h5 className='text-emerald-500 font-bold'>{item.name}</h5>
                        <ul className='my-1 ml-4'>
                          {item.item.map((i, j) => (
                            <li key={j} className='list-disc my-1 text-[15px]'>
                              <span className='flex gap-1 items-center text-neutral-700 dark:text-neutral-200'>
                                {i.name}{' '}
                                <a
                                  href={i.url}
                                  target='_blank'
                                  title={`${i.name} - ${item.name}`}
                                  aria-label={`${i.name} - ${item.name}`}
                                  className='text-emerald-500'
                                >
                                  <LinkIcon className='h-3.5 w-3.5' />
                                </a>
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
                <div>
                  <h4 className='font-semibold text-2xl pb-2'>Pengalaman</h4>
                  {experiences.map((item, index) => (
                    <div key={index} className='my-2 flex gap-2'>
                      <div>
                        <h5 className='text-emerald-500 font-bold'>
                          {item.name}
                          {item.web != '' && (
                            <a
                              href={item.web}
                              title={item.name}
                              aria-label={item.name}
                              target='_blank'
                              className='ml-1 text-emerald-500 inline-flex items-center gap-1'
                            >
                              <ArrowUpRight className='h-3.5 w-3.5' />
                            </a>
                          )}
                        </h5>
                        <p className='font-medium my-1 text-[13px] dark:text-neutral-200'>{item.year}</p>
                        <p className='font-medium my-1 flex gap-2 items-center'>{item.position}</p>
                        <ul className='my-1 mx-4'>
                          {item.item.map((i, j) => (
                            <li key={j} className='list-disc dark:text-neutral-300 my-1 text-[15px] text-neutral-700'>
                              {i.name}{' '}
                              <a
                                href={i.url}
                                title={item.name}
                                aria-label={item.name}
                                target='_blank'
                                className='text-emerald-500 inline-flex items-center gap-1'
                              >
                                <LinkIcon className='h-3.5 w-3.5' />
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}

                  <h4 className='font-semibold text-2xl mt-8 pb-2'>Pelatihan</h4>
                  <div className='my-2 flex gap-2'>
                    <div>
                      <h5 className='font-bold text-emerald-500'>
                        Digital Talent Scholarship 2020{' '}
                        <a
                          href='https://github.com/wahidari/wahidari/blob/master/certificate/oa-dts-wahidari.pdf'
                          target='_blank'
                          title='DTS - 2020'
                          aria-label='DTS - 2020'
                          className='text-emerald-500 inline-flex items-center gap-1'
                        >
                          <ArrowUpRight className='h-3.5 w-3.5' />
                        </a>
                        , 2021{' '}
                        <a
                          href='https://github.com/wahidari/wahidari/blob/master/certificate/it-fundamental-wahidari.pdf'
                          target='_blank'
                          title='DTS - 2021'
                          aria-label='DTS -2021'
                          className='text-emerald-500 inline-flex items-center gap-1'
                        >
                          <ArrowUpRight className='h-3.5 w-3.5' />
                        </a>
                        & 2022{' '}
                        <a
                          href='https://github.com/wahidari/wahidari/blob/master/certificate/fga-it-support.pdf'
                          target='_blank'
                          title='DTS - 2022'
                          aria-label='DTS - 2022'
                          className='text-emerald-500 inline-flex items-center gap-1'
                        >
                          <ArrowUpRight className='h-3.5 w-3.5' />
                        </a>
                      </h5>
                      <p className='my-1 text-[15px] dark:text-neutral-300 text-neutral-700'>
                        Digital Talent Scholarship (DTS) adalah beasiswa pelatihan SDM di bidang teknologi informasi dan
                        komunikasi.{' '}
                        <a
                          href='https://digitalent.kominfo.go.id/'
                          target='_blank'
                          title='DTS'
                          aria-label='DTS'
                          className='text-emerald-500 inline-flex items-center gap-1'
                        >
                          <LinkIcon className='h-3.5 w-3.5' />
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className='my-2 flex gap-2'>
                    <div>
                      <h5 className='font-bold text-emerald-500'>IDCamp 2020</h5>
                      <p className='my-1 text-[15px] dark:text-neutral-300 text-neutral-700'>
                        Indosat Ooredoo Digital Camp adalah program beasiswa dari Indosat Ooredoo untuk developer
                        Indonesia.{' '}
                        <a
                          href='https://idcamp.indosatooredoo.com/'
                          target='_blank'
                          title='IDCamp'
                          aria-label='IDCamp'
                          className='text-emerald-500 inline-flex items-center gap-1'
                        >
                          <LinkIcon className='h-3.5 w-3.5' />
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className='my-2 flex gap-2'>
                    <div>
                      <h5 className='font-bold text-emerald-500'>HacktoberFest 2019 & 2020</h5>
                      <p className='my-1 text-[15px] dark:text-neutral-300 text-neutral-700'>
                        Hacktoberfest adalah event dari Github dan Digitalocean, bertujuan untuk mendorong kontribusi
                        open source.{' '}
                        <a
                          href='https://hacktoberfest.digitalocean.com/'
                          target='_blank'
                          title='Hacktoberfest'
                          aria-label='Hacktoberfest'
                          className='text-emerald-500 inline-flex items-center gap-1'
                        >
                          <LinkIcon className='h-3.5 w-3.5' />
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id='skills' className='scroll-mt-24 z-[1] relative px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 mt-32'>
              <p className='text-2xl text-center mb-4 leading-[1.2] sm:leading-[1.15] font-bold tracking-tight text-neutral-800 sm:text-3xl dark:text-neutral-100'>
                Skills
              </p>
              <div className='bg-emerald-500 h-1 b-4 mx-auto w-16 rounded'></div>
              <div className='my-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8'>
                {skills.map((item, index) => (
                  <div
                    key={index}
                    data-aos='fade-up'
                    data-aos-duration={`${index}000`}
                    className='flex flex-col gap-3 items-center justify-center'
                  >
                    <div className='rounded-xl shadow-lg border border-neutral-200/50 dark:border-neutral-700 dark:shadow-neutral-800 px-2 py-1'>
                      <i className={cn('text-3xl text-emerald-500', item.icon)} />
                    </div>
                    <p className='font-medium'>{item.name}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id='tools' className='scroll-mt-24 z-[1] relative px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 mt-32'>
              <p className='text-2xl text-center mb-4 leading-[1.2] sm:leading-[1.15] font-bold tracking-tight text-neutral-800 sm:text-3xl dark:text-neutral-100'>
                Tools & Platform
              </p>
              <div className='bg-emerald-500 h-1 b-4 mx-auto w-16 rounded'></div>
              <div className='my-8 grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-3 gap-8'>
                {tools.map((item, index) => (
                  <ToolCard
                    data-aos='zoom-in'
                    data-aos-duration={`${index}000`}
                    key={index}
                    name={item.name}
                    description={item.description}
                    url={item.url}
                    image={item.image}
                  />
                ))}
              </div>
            </section>

            <footer
              className={cn(
                'flex flex-wrap gap-4 justify-between items-center border-t border-t-neutral-200/50',
                'dark:border-t-neutral-700/50 px-4 sm:px-16 md:px-20 lg:px-24 py-12 mt-16',
              )}
            >
              <div className='flex items-center gap-2 sm:gap-4 md:gap-6 mx-auto lg:mx-0'>
                <Link
                  href='#about'
                  className='underline-center-animation text-sm dark:hover:text-emerald-500 hover:text-emerald-500 dark:text-neutral-200 text-neutral-800 font-medium'
                >
                  About
                </Link>
                <Link
                  href='#projects'
                  className='underline-center-animation text-sm dark:hover:text-emerald-500 hover:text-emerald-500 dark:text-neutral-200 text-neutral-800 font-medium'
                >
                  Projects
                </Link>
                <Link
                  href='#resume'
                  className='underline-center-animation text-sm dark:hover:text-emerald-500 hover:text-emerald-500 dark:text-neutral-200 text-neutral-800 font-medium'
                >
                  Resume
                </Link>
                <Link
                  href='#skills'
                  className='underline-center-animation text-sm dark:hover:text-emerald-500 hover:text-emerald-500 dark:text-neutral-200 text-neutral-800 font-medium'
                >
                  Skills
                </Link>
                <Link
                  href='#tools'
                  className='underline-center-animation text-sm dark:hover:text-emerald-500 hover:text-emerald-500 dark:text-neutral-200 text-neutral-800 font-medium'
                >
                  Tools
                </Link>
              </div>
              <p className='text-neutral-500 dark:text-neutral-400 text-sm mx-auto lg:mx-0 lg:text-right text-center'>
                © {new Date().getFullYear()} Spotlight. All rights reserved.
              </p>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}
