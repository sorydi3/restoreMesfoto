import React from 'react'
import Image from "next/image";
import Link from "next/link";
import SquigglyLines from "../components/SquigglyLines";
import { motion, useScroll, useTransform } from "framer-motion";
import { textContainer, textVariant2, fadeIn,planetVariants ,zoomIn} from "../utils/motion";

export default function Hero(params: any) {

    const {scrollY} = useScroll();

    let y = useTransform(scrollY, [0, 600], ["0%", "80%"]);




    return (<section className='diagonal'>
        <div className=" wrapper flex flex-1 w-full flex-col items-center justify-center text-center relative ">
            <a
                href="https://twitter.com/nutlope/status/1620493265865957376"
                target="_blank"
                rel="noreferrer"
                className="border rounded-2xl py-1 px-4 text-slate-500 text-sm mb-5 hover:scale-105 transition duration-300 ease-in-out"
            >
                Used by over <span className="font-semibold">100,000</span> happy
                customers
            </a>
            <motion.h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-slate-900 sm:text-7xl"
                variants={fadeIn("right", "spring", 1, 2)}
                initial="hidden"
                whileInView="show"

                style={{y}}

            >
                Revive tus recuerdos usando{" "}
                <span className="relative whitespace-nowrap text-[#3290EE]">
                    <SquigglyLines />
                    <span className="relative">la IA</span>
                </span>{" "}
            </motion.h1>

            <motion.p className="mx-auto mt-12 max-w-xl text-lg text-slate-700 leading-7"
                variants={textVariant2}
                initial="hidden"
                whileInView="show"
            >
                ¿El paso del tiempo ha dejado tus fotos más preciadas viejas, descoloridas o dañadas? ¡No dejes que tus recuerdos se desvanezcan! Nuestro servicio de restauración de fotos impulsado por IA está aquí para devolverles la vida.
            </motion.p>
            <div className="flex justify-center space-x-4">
                <Link
                    className="bg-black rounded-xl text-white font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-black/80"
                    href="/restore"
                >
                    Enpieza ahora

                </Link>
            </div>

            <div className=".card">
                
            </div>
            <div className="flex justify-between items-center w-full flex-col sm:mt-10 mt-6">
                <div className="flex flex-col space-y-10 mt-4 mb-16">
                    <div className="flex sm:space-x-2 sm:flex-row flex-col">
                        <div>
                            <h2 className="mb-1 font-medium text-lg">Foto original</h2>
                            <motion.div
                                variants={fadeIn("right", "spring", 0.5, 1.5)}
                                initial="hidden"
                                whileInView="show"
                            >
                                <Image
                                    alt="Original photo of my bro"
                                    src="/michael.jpg"
                                    className="w-96 h-96 rounded-2xl"
                                    width={400}
                                    height={400}
                                />
                            </motion.div>
                        </div>
                        <div className="sm:mt-0 mt-8">
                            <h2 className="mb-1 font-medium text-lg">Foto Restorada</h2>

                            <motion.div
                                 variants={zoomIn(0.8, 0.5)}
                                 initial="hidden"
                                 whileInView="show"
                            >

                                <Image
                                    alt="Restored photo of my bro"
                                    width={400}
                                    height={400}
                                    src="/michael-new.jpg"
                                    className="w-96 h-96 rounded-2xl sm:mt-0 mt-2"
                                />
                            </motion.div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>)
}