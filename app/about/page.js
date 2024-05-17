import Image from 'next/image'
import React from 'react'

function About() {
    return (
        <div>
            <section className="flex items-center bg-stone-100 xl:h-screen font-poppins ">
                <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
                    <div className="flex flex-wrap ">
                        <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                            <div className="relative lg:max-w-md">
                                <Image src='/atharv.jpg' width={340} height={340} />

                            </div>
                        </div>
                        <div className="w-full px-6 mb-10 lg:w-1/2 lg:mb-0 ">
                            <div className="pl-4 mb-6 border-l-4 border-blue-500 ">
                                <span className="text-sm text-gray-600 uppercase dark:text-gray-400">Who we are?</span>
                                <h1 className="mt-2 text-3xl font-black text-gray-700 md:text-5xl dark:text-gray-300">
                                    About Us
                                </h1>
                            </div>
                            <p className="mb-6 text-base leading-7 text-gray-500 dark:text-gray-400">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit
                                amet. labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit
                                amet. amet. labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit
                                amet.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                Lorem ipsum dolor sit amet.
                            </p>
                            <a href="https://darthfolio.vercel.app/" className="px-4 py-2 text-gray-100 bg-blue-500 rounded dark:bg-blue-400 dark:hover:bg-blue-500 hover:bg-blue-600">
                                Learn more
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default About