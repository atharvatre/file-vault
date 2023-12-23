import React from 'react'
import Constant from '../_utils/Constant'

function Hero() {
    return (
        <div><section className="bg-white text-black">
            <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen ">
                <div className="mx-auto max-w-3xl text-center">
                    <h1
                        className="bg-gradient-to-r from-blue-900 via-blue-700 to-primary bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
                    >
                        Upload, Save and easily Share Your Files in one place.
                    </h1>

                    <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
                        {Constant.desc}
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <a
                            className="block w-full rounded border border-blue-600 bg-primary px-12 py-3 text-sm font-medium text-white hover:bg-blue-700 hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                            href="/upload"
                        >
                            Get Started
                        </a>

                        <a
                            className="block w-full rounded border bg-gray-100 px-12 py-3 text-sm font-medium text-black hover:bg-gray-300 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                            href="/about"
                        >
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
        </section></div>
    )
}

export default Hero