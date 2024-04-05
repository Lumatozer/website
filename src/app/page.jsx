"use client"

import Image from "next/image"
import Link from "next/link";
import Button from "@/components/Button";
import AnimatedBlockFinality from "@/components/AnimatedBlockFinality";

import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col font-montserrat gap-[15vh] xs:gap-[25vh]">

            {/* GRID */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-grid-white/[0.1] z-[1]"></div>
            {/* BLACK VIGNETTE */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_-10%,black)] z-[1]"></div>
            {/* WHITE GLOW */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-[radial-gradient(circle_at_center,white,transparent_27%)] opacity-[25%] blur-[100px] z-[1]"></div>
            {/* 3D VECTORS */}
            <div className="absolute top-[5vh] xs:top-[12vh] md:top-[20vh] 2xl:top-[-100px] left-0 flex items-end justify-center h-full w-full px-0 xs:px-[20px] lg:px-[120px] pb-[40px] z-[1] overflow-visible">
                <div className="flex items-end h-full w-full justify-between z-[1] overflow-visible max-w-[1200px] 2xl:scale-150">
                    {
                        ["Cylinder.png", "Toroid.png", "Cube.png"].map((item, ind) => {
                            return (
                                <motion.div
                                    key={ind}
                                    initial={{ y: 100, opacity: 0 }}
                                    animate={{
                                        y: 0,
                                        opacity: 1,
                                        transition: { type: "spring", bounce: 0.4, duration: 0.8, delay: ind * 0.05 }
                                    }}
                                >
                                    {
                                        ind == 1
                                            ? <Image src={`/images/${item}`} alt="LTZ" priority width={200} height={0} className="w-[75px] xs:w-[100px] md:w-[150px] xl:w-[200px]" />
                                            : <Image src={`/images/${item}`} alt="LTZ" priority width={200} height={0} className="mb-[66px] md:mb-[100px] xl:mb-[150px] w-[75px] xs:w-[100px] md:w-[150px] xl:w-[200px]" />
                                    }
                                </motion.div>
                            )
                        })
                    }
                </div>
            </div>

            <div className="absolute top-[30px] z-10 w-full h-[50px] px-[7vw] flex justify-center items-center gap-[15px] overflow-visible">
                <div className="flex-1 flex justify-start h-full overflow-visible">
                    <Image draggable={false} className="-mb-[2px] select-none" src={`/images/ltz_logo_primary.svg`} width={60} height={0} />
                </div>
                <div className="flex-1 justify-center h-full overflow-visible hidden md:flex">
                    {/* <div className="flex-1 bg-white/[6.5%] border border-solid border-white/[10%] rounded-full overflow-visible flex justify-center items-center">
                        <p className="font-medium">Coming Soon</p>
                    </div> */}
                </div>
                <div className="flex-1 h-full overflow-visible flex justify-end items-center">
                    <Button gradientFilled className="scale-[0.85] hover:scale-100"><Link href={"mailto:hi@lumatozer.com"} target="_blank">Contact Us</Link></Button>
                </div>
            </div>

            {/* HERO */}
            <div className="z-[2] min-h-screen flex flex-col items-center justify-center">
                <div className="flex flex-col items-center justify-center gap-[50px] 2xl:scale-150 overflow-visible">
                    <div className="flex flex-col items-center justify-center w-min">
                        <p className="text-[#eaeaea] font-[railroad] font-bold text-[43px] xs:text-[55px] sm:text-[75px] md:text-[90px] xl:text-[110px] tracking-[0.02em] whitespace-nowrap">WEB3 DONE RIGHT</p>
                        <p className="text-white/[66%] text-xs xs:text-sm sm:text-md md:text-xl xl:text-2xl flex-1 text-center font-normal">Lumatozer is a company where we work on scaling technologies to deliver measurably sustainable solutions for all consumers, developers, corporates and autonomous programs.</p>
                    </div>
                    <div className="flex flex-row items-center gap-[25px] xs:gap-[35px] sm:gap-[50px] overflow-visible">
                        <Button gradientFilled>Start Building</Button>
                        <Button gradientOutlined>Learn More</Button>
                    </div>
                </div>
            </div>

            {/* SPEED */}
            <section className="flex flex-col xs:flex-row w-full max-w-[1600px] mx-auto px-[4vw] md:px-[7vw]">
                <div className="flex flex-col justify-center gap-6 overflow-visible xs:absolute z-[1] max-w-[92vw] xs:max-w-[75vw] md:max-w-[100vw]">
                    <div className="flex flex-col overflow-visible items-center xs:items-start">
                        <span className="text-[#eaeaea] font-[railroad] font-bold [font-size:var(--heading-size)] tracking-[0.02em] leading-[105%] whitespace-nowrap">FASTER THAN</span>
                        <span className="text-[#eaeaea] font-[railroad] font-bold [font-size:var(--heading-size)] tracking-[0.02em] leading-[105%] whitespace-nowrap">ALL BLOCKCHAINS</span>
                    </div>
                    <p className="text-white/[66%] [font-size:var(--sub-heading-p-size)] text-center xs:text-left w-full md:w-[66%] lg:w-[550px] xl:w-[700px] font-normal">
                        {`Lumatozer's groundbreaking scaling technology leaves other blockchains in the dust. With our proprietary architectures and protocols, we've achieved speeds of up to 300,000 transactions per second (tps). Say goodbye to sluggish transactions and hello to lightning-fast speeds with Lumatozer.`}
                    </p>
                </div>

                <div className="flex-1 flex flex-row items-end justify-between xs:justify-end relative gap-3 xs:gap-5 sm:gap-10 pt-5 xs:pt-[100px] sm:pt-10 md:pt-0">
                    <div className="flex flex-col items-center py-3 gap-5">
                        <Image draggable={false} className="-mb-[2px] select-none w-[10vw]" src={`/images/disc.svg`} width={10} height={0} />
                        <div className="flex flex-col items-center">
                            <p className="text-white/[90%] text-[10px] xs:text-[12px] md:text-[16px] lg:text-[20px] font-normal">Bitcoin</p>
                            <p className="text-white/[75%] font-light tracking-[0.02em] text-[7px] xs:text-[9px] md:text-[12px] lg:text-[14px] min-h-[23px] lg:min-h-[27px]">7 txn/s</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center py-3 gap-5">
                        <Image draggable={false} className="-mb-[2px] select-none w-[10vw]" src={`/images/eth_disc.svg`} width={10} height={0} />
                        <div className="flex flex-col items-center">
                            <p className="text-white/[90%] text-[10px] xs:text-[12px] md:text-[16px] lg:text-[20px] font-normal">Ethereum</p>
                            <p className="text-white/[75%] font-light tracking-[0.02em] text-[7px] xs:text-[9px] md:text-[12px] lg:text-[14px] min-h-[23px] lg:min-h-[27px]">20 txn/s</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center py-3 gap-5">
                        <Image draggable={false} className="-mb-[2px] select-none w-[10vw]" src={`/images/polygon_disc.svg`} width={10} height={0} />
                        <div className="flex flex-col items-center">
                            <p className="text-white/[90%] text-[10px] xs:text-[12px] md:text-[16px] lg:text-[20px] font-normal">Polygon</p>
                            <p className="text-white/[75%] font-light tracking-[0.02em] text-[7px] xs:text-[9px] md:text-[12px] lg:text-[14px] min-h-[23px] lg:min-h-[27px]">~ 65,000 txn/s</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center py-3 gap-5">
                        <Image draggable={false} className="-mb-[2px] select-none w-[10vw]" src={`/images/sol_disc.svg`} width={10} height={0} />
                        <div className="flex flex-col items-center">
                            <p className="text-white/[90%] text-[10px] xs:text-[12px] md:text-[16px] lg:text-[20px] font-normal">Solana</p>
                            <p className="text-white/[75%] font-light tracking-[0.02em] text-[7px] xs:text-[9px] md:text-[12px] lg:text-[14px] min-h-[23px] lg:min-h-[27px]">65,000 txn/s</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center py-3 gap-5">
                        <Image draggable={false} className="-mb-[2px] select-none w-[10vw]" src={`/images/ltz_disc.svg`} width={10} height={0} />
                        <div className="flex flex-col items-center">
                            <p className="text-white/[90%] text-[11px] xs:text-[14px] md:text-[19px] lg:text-[23px] font-normal font-orbitron">Lumatozer</p>
                            <p className="[background-image:var(--primary-gradient)] [-webkit-text-fill-color:transparent] [-webkit-background-clip:text] font-semibold tracking-[0.02em] text-[8px] xs:text-[11px] md:text-[15px] lg:text-[18px] min-h-[23px] lg:min-h-[27px]">300,000 txn/s</p>
                        </div>
                    </div>
                </div>
            </section>


            {/* FINALITY */}
            <Sect
                heading={<>
                    <span className="text-[#eaeaea] font-[railroad] font-bold [font-size:var(--heading-size)] tracking-[0.02em] leading-[105%] whitespace-nowrap">FINALITY BEFORE</span>
                    <span className="text-[#eaeaea] font-[railroad] font-bold [font-size:var(--heading-size)] tracking-[0.02em] leading-[105%] whitespace-nowrap">BLINK OF AN EYE</span>
                </>}
                para={`Experience the velocity of our scaling technology. Our custom-built architectures and protocols propel our blockchain further than ever, achieving speeds of up to 300,000 transactions per second (tps). Secure your seat belts and experience seamless transactions and unparalleled efficiency with us.`}
                img={<AnimatedBlockFinality />}
                noRightPad
            />


            {/* VM */}
            <Sect
                heading={<>
                    <span className="text-[#eaeaea] font-[railroad] font-bold [font-size:var(--heading-size)] tracking-[0.02em] leading-[105%] whitespace-nowrap">POWERED BY</span>
                    <span className="text-[#eaeaea] font-[railroad] font-bold text-[30px] xs:[font-size:var(--heading-size)] tracking-[0.02em] leading-[105%] whitespace-nowrap">VENGINE AND VITALITY</span>
                </>}
                para={`Vitality, our custom-built language allows for smooth on-chain and cross-chain interaction + development experience. Vengine is our core engine behind our smart contracts which acts as a general engine for many languages.
                Vengine is a high-performance engine built for speed and efficiency. Its unique design ensures every transaction and program runs flawlessly.
                This combination delivers unmatched performance for every blockchain operation.`}
                img={
                    <Image draggable={false} className="relative select-none w-[75vw] md:w-[25vw] xl:w-[30vw] max-w-[400px]" src={`/images/machine.png`} width={2000} height={0} />
                }
            />


            {/* DEVX */}
            <Sect
                heading={<>
                    <span className="text-[#eaeaea] font-[railroad] font-bold [font-size:var(--heading-size)] tracking-[0.02em] leading-[105%] whitespace-nowrap">TRANSFORMING</span>
                    <span className="text-[#eaeaea] font-[railroad] font-bold [font-size:var(--heading-size)] tracking-[0.02em] leading-[105%] whitespace-nowrap">DEV EXPERIENCE</span>
                </>}
                para={`The team at Lumatozer is passionate about making blockchain development accessible and efficient for everyone. We understand the frustrations of complex setups and cumbersome coding. That is why our platform is designed to streamline the process. Lumatozer provides intuitive tools, seamless integration, and unmatched accessibility. This means you can ditch the tedious setups and focus on what truly matters: building innovative blockchain applications.`}
                img={
                    <Image draggable={false} className="relative select-none w-[75vw] md:w-[30vw] xl:w-[35vw] max-w-[450px]" src={`/images/devxSnippet.png`} width={2000} height={0} />
                }
            />


            {/* TEAM */}
            <section className="flex w-full max-w-[1600px] mx-auto px-[7vw]">
                <div className="flex flex-1 flex-col justify-center gap-20 overflow-visible ">
                    <p className="text-[#eaeaea] font-[railroad] font-bold [font-size:var(--heading-size)] tracking-[0.02em] leading-[105%] whitespace-nowrap overflow-visible text-center sm:text-left">MEET OUR TEAM</p>
                    <div className="flex flex-1 flex-col sm:flex-row gap-24 sm:gap-0">
                        <div className="flex flex-col items-center justify-center gap-[10px] flex-1">
                            <Image draggable={false} className="relative select-none w-1/2 sm:w-1/3 rounded-full" src={`/images/aarav_pfp.jpg`} width={500} height={0} />
                            <div className="flex flex-col items-center justify-center gap-[2px] flex-1">
                                <p className="font-medium text-md md:text-lg text-white/85">Aarav Dayal</p>
                                <p className="font-light text-xs md:text-sm text-white/50">Founder & CEO</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-[10px] flex-1">
                            <Image draggable={false} className="relative select-none w-1/2 sm:w-1/3 rounded-full" src={`/images/kritarth_pfp.jpg`} width={500} height={0} />
                            <div className="flex flex-col items-center justify-center gap-[2px] flex-1">
                                <p className="font-medium text-md md:text-lg text-white/85">Kritarth Shankar</p>
                                <p className="font-light text-xs md:text-sm text-white/50">Chief Technology Officer</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-[10px] flex-1">
                            <Image draggable={false} className="relative select-none w-1/2 sm:w-1/3 rounded-full" src={`/images/atharv_pfp.jpg`} width={500} height={0} />
                            <div className="flex flex-col items-center justify-center gap-[2px] flex-1">
                                <p className="font-medium text-md md:text-lg text-white/85">Atharv Varshney</p>
                                <p className="font-light text-xs md:text-sm text-white/50">Chief Operating Officer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="w-full flex justify-center py-6">
                <Link href="https://discord.gg/pycHNFrF" target="_blank" className="text-sm text-white/50 font-light">Join Our Discord <span className="underline">Here</span> {`:)`}</Link>
            </div>

        </main>
    )
}

const Sect = ({ heading, para, img, noRightPad }) => {

    const imgDiv = useRef(null)
    const textDiv = useRef(null)

    useEffect(() => {
        if (imgDiv && textDiv) {
            if (window.innerWidth <= 768) {
                const PaddingKitniHai = (parseInt(textDiv.current.getBoundingClientRect().height)) + 50
                imgDiv.current.style.paddingTop = `${PaddingKitniHai}px`
            }
            else {
                const PaddingKitniHai = parseInt((textDiv.current.getBoundingClientRect().height) - (imgDiv.current.getBoundingClientRect().height / 2))
                imgDiv.current.style.paddingTop = `${PaddingKitniHai}px`
            }
        }
    }, [imgDiv, textDiv])


    return (
        noRightPad
            ? <section className={`flex w-full relative max-w-[1600px] mx-auto pl-[4vw] md:pl-[7vw]`}>
                <div ref={textDiv} className="flex flex-col justify-center gap-6 overflow-visible absolute px-[4vw] left-0 md:left-auto md:px-0 z-[1]">
                    <div className="flex flex-row gap-1 xs:gap-4 justify-center flex-wrap md:flex-col md:gap-0 md:justify-start overflow-visible">
                        {heading}
                    </div>
                    <p className="text-white/[66%] [font-size:var(--sub-heading-p-size)] text-justify md:text-left w-full md:w-[66%] lg:w-[550px] xl:w-[700px] font-normal">{para}</p>
                </div>

                <div ref={imgDiv} className={`w-full h-full flex flex-row items-end justify-end relative`}>
                    {img}
                </div>
            </section>

            : <section className={`flex w-full relative max-w-[1600px] mx-auto pl-[4vw] md:pl-[7vw] pr-[4vw] md:pr-[7vw]`}>
                <div ref={textDiv} className="flex flex-col justify-center gap-6 overflow-visible absolute px-[4vw] left-0 md:left-auto md:px-0 z-[1] ">
                    <div className="flex flex-row gap-1 xs:gap-4 justify-center flex-wrap md:flex-col md:gap-0 md:justify-start overflow-visible">
                        {heading}
                    </div>
                    <p className="text-white/[66%] [font-size:var(--sub-heading-p-size)] text-justify md:text-left w-full md:w-[66%] lg:w-[550px] xl:w-[700px] font-normal">{para}</p>
                </div>

                <div ref={imgDiv} className={`w-full h-full flex flex-row items-end justify-center md:justify-end relative`}>
                    {img}
                </div>
            </section>
    )
}