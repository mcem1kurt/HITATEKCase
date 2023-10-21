"use client";
import Link from 'next/link';
import { useState } from 'react';
import "./Navbar.css"
import { useTranslations } from 'next-intl';


export const Navbar = () => {
    const [active, setActive] = useState(false);
    const [searchBarActive, setSearchBarActive] = useState(false);
    const t = useTranslations('Navbar');

    const handleClick = () => {
        setActive(!active);
    };

    return (
        <>
            <nav className='flex items-center flex-wrap bg-blue-600 px-5 fixed top-0 w-full z-50'>
                <Link href='/'>
                    <div className='inline-flex items-center p-2 mr-4 '>
                        <span className='text-xl text-white  uppercase tracking-wide'>
                            <span className='font-extrabold'>TRT</span> <span className='text-aquablue'>WORLD</span>
                        </span>
                    </div>
                </Link>
                <button
                    className=' inline-flex p-3 hover:bg-green-600 rounded lg:hidden text-white ml-auto hover:text-white outline-none'
                    onClick={handleClick}
                >
                    <svg
                        className='w-6 h-6'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M4 6h16M4 12h16M4 18h16'
                        />
                    </svg>
                </button>
                <div className='bg-blue-400 content-center lg:hidden'>
                    <div className=" content-center items-center">
                        <div className="relative py-2 flex flex-1 content-center px-2">
                            {
                                searchBarActive &&
                                <input

                                    type="search"
                                    className="relative m-0 w-64 ease-in-out placeholder-gray-600 -mr-0.5 block  min-w-0 flex-auto rounded-xl border border-none border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                                    placeholder="Search"
                                    autoFocus
                                    hidden={searchBarActive}
                                    onBlur={() => {
                                        setSearchBarActive(false)
                                    }}
                                    aria-label={t('search')}
                                    aria-describedby="button-addon1" />}


                            <button
                                className="relative z-[2] flex items-center rounded-r bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white  transition duration-150 ease-in-out hover:bg-primary-700  focus:bg-primary-700  focus:outline-none focus:ring-0 active:bg-primary-800 "
                                type="button"
                                onClick={() => {
                                    setSearchBarActive(true)
                                }}
                                id="button-addon1"
                                data-te-ripple-init
                                data-te-ripple-color="light">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="h-5 w-5">
                                    <path
                                        fill-rule="evenodd"
                                        d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                                        clip-rule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
                <div
                    className={`${active ? '' : 'hidden'
                        }   w-full lg:inline-flex lg:flex-grow lg:w-auto `}
                >
                    <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
                        <Link href='/'>
                            <div className='lg:inline-flex lg:w-auto w-full px-3 py-2 text-sm rounded text-white font-bold items-center justify-center hover:text-blue-300'>
                                {t('news')}
                            </div>
                        </Link>
                        <Link href='/'>
                            <div className='lg:inline-flex lg:w-auto w-full px-3 py-2 text-sm rounded text-white font-bold items-center justify-center hover:text-blue-300'>
                                {t('features')}
                            </div>
                        </Link>
                        <Link href='/'>
                            <div className='lg:inline-flex lg:w-auto w-full px-3 py-2 text-sm rounded text-white font-bold items-center justify-center  hover:text-blue-300'>
                                {t('topics')}
                            </div>
                        </Link>
                        <Link href='/'>
                            <div className='lg:inline-flex lg:w-auto w-full px-3 py-2 text-sm rounded text-white font-bold items-center justify-center  hover:text-blue-300'>
                                {t('video')}
                            </div>
                        </Link>
                        <Link href='/'>
                            <div className='lg:inline-flex lg:w-auto w-full px-3 py-2 text-sm rounded text-white font-bold items-center justify-center  hover:text-blue-300'>
                                <svg height="30" width="30" className="blinking">
                                    <circle cx="15" cy="15" r="5" fill="red" />
                                    Sorry, your browser does not support inline SVG.
                                </svg>  {t('live')}
                            </div>
                        </Link>
                        <div className='bg-blue-400 content-center max-lg:hidden'>
                            <div className=" content-center items-center">
                                <div className="relative py-2 flex flex-1 content-center px-2">
                                    {
                                        searchBarActive &&
                                        <input

                                            type="search"
                                            className="relative m-0 w-64 ease-in-out placeholder-gray-600 -mr-0.5 block  min-w-0 flex-auto rounded-xl border border-none border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                                            placeholder="Search"
                                            autoFocus
                                            hidden={searchBarActive}
                                            onBlur={() => {
                                                setSearchBarActive(false)
                                            }}
                                            aria-label={t('search')}
                                            aria-describedby="button-addon1" />}


                                    <button
                                        className="relative z-[2] flex items-center rounded-r bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white  transition duration-150 ease-in-out hover:bg-primary-700  focus:bg-primary-700  focus:outline-none focus:ring-0 active:bg-primary-800 "
                                        type="button"
                                        onClick={() => {
                                            setSearchBarActive(true)
                                        }}
                                        id="button-addon1"
                                        data-te-ripple-init
                                        data-te-ripple-color="light">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            className="h-5 w-5">
                                            <path
                                                fill-rule="evenodd"
                                                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                                                clip-rule="evenodd" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

        </>
    );
};