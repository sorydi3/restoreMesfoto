import   React   from   'react'
import Image from "next/image";
import Link from "next/link";
import SquigglyLines from "../components/SquigglyLines";
 
 
 export default function Hero(params:any) {

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
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-slate-900 sm:text-7xl">
        Revive tus recuerdos usando{" "}
          <span className="relative whitespace-nowrap text-[#3290EE]">
            <SquigglyLines />
            <span className="relative">la IA</span>
          </span>{" "}
        </h1>

        <p className="mx-auto mt-12 max-w-xl text-lg text-slate-700 leading-7">
        ¿El paso del tiempo ha dejado tus fotos más preciadas viejas, descoloridas o dañadas? ¡No dejes que tus recuerdos se desvanezcan! Nuestro servicio de restauración de fotos impulsado por IA está aquí para devolverles la vida.
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            className="bg-black rounded-xl text-white font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-black/80"
            href="/restore"
          >
            Enpieza ahora
            
          </Link>
        </div>
        <div className="flex justify-between items-center w-full flex-col sm:mt-10 mt-6">
          <div className="flex flex-col space-y-10 mt-4 mb-16">
            <div className="flex sm:space-x-2 sm:flex-row flex-col">
              <div>
                <h2 className="mb-1 font-medium text-lg">Foto original</h2>
                <Image
                  alt="Original photo of my bro"
                  src="/michael.jpg"
                  className="w-96 h-96 rounded-2xl"
                  width={400}
                  height={400}
                />
              </div>
              <div className="sm:mt-0 mt-8">
                <h2 className="mb-1 font-medium text-lg">Foto Restorada</h2>
                <Image
                  alt="Restored photo of my bro"
                  width={400}
                  height={400}
                  src="/michael-new.jpg"
                  className="w-96 h-96 rounded-2xl sm:mt-0 mt-2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>)  
}