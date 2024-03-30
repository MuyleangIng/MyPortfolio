import { CardBody, CardContainer, CardItem } from '@/components/global/3d-card'
import { HeroParallax } from '@/components/global/connect-parallax'
import { ContainerScroll } from '@/components/global/container-scroll-animation'
import { InfiniteMovingCards } from '@/components/global/infinite-moving-cards'
import { LampComponent } from '@/components/global/lamp'
import Navbar from '@/components/global/navbar'
import { Button } from '@/components/ui/button'
import { clients, products } from '@/lib/constant'
import { CheckIcon, Link } from 'lucide-react'
import Image from 'next/image'
import surveyboximage from '/public/surveybox/image.png'
import automatex from '/public/surveybox/mainlogo.png'
import logoistad from '/public/surveybox/istad.png'
import {GlobeDemo} from "@/components/global/GlobeDemo";
export default function Home() {
  //WIP: remove fault IMAge for home page
  return (
    <main className="flex items-center justify-center flex-col">
      <Navbar />
      <section className="h-screen w-full  bg-neutral-950 rounded-md  !overflow-visible relative flex flex-col items-center  antialiased">
        <div className="absolute inset-0  h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_35%,#223_100%)]"></div>
        <div className="flex flex-col mt-[-100px] md:mt-[-50px]">
          <div className="flex items-center flex-col">
            <Button
                size={'lg'}
                className="p-8 mb-8 md:mb-0 text-2xl w-full sm:w-fit border-t-2 rounded-full border-[#4D4D4D] bg-[#1F1F1F] hover:bg-white group transition-all flex items-center justify-center gap-4 hover:shadow-xl hover:shadow-neutral-500 duration-500"
            >
                  <span
                      className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-500 to-neutral-600  md:text-center font-sans group-hover:bg-gradient-to-r group-hover:from-black goup-hover:to-black">
                    Hello I&apos;m Muyleang
                  </span>
            </Button>
            <h1 className="text-5xl md:text-8xl  bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600 font-sans font-bold">
              Say Goodbye To Manual.
            </h1>
            <GlobeDemo/>
          </div>
          {/*<ContainerScroll*/}
          {/*    titleComponent={*/}

          {/*    }*/}
          {/*/>*/}
        </div>
      </section>
      <InfiniteMovingCards
          className="md:mt-[18rem] mt-[-100px]"
          items={clients}
          direction="right"
          speed="slow"
      />
      <section>
        <HeroParallax products={products}></HeroParallax>
      </section>
      <section className="mt-[-500px]">
        <LampComponent/>
        <div className="flex flex-wrap items-center justify-center flex-col md:flex-row gap-8 -mt-72">
          <CardContainer className="inter-var ">
            <CardBody
                className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full md:!w-[350px] h-auto rounded-xl p-6 border">
              <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white "
              >
                Surveybox
                {/* <h2 className="text-6xl ">$0</h2> */}
                <Image
                  src={surveyboximage}
                  width={80}
                  height={80}
                  alt='Surveybox'
                />
              </CardItem>
              <CardItem
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Collect better data and make better decisions.
                <ul className="my-4 flex flex-col gap-2">
                  <li className="flex items-center gap-2">
                    <CheckIcon />Survey Creator
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    Voting
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    Report Per Month
                  </li>
                </ul>
              </CardItem>
              <div className="flex justify-between items-center mt-8">
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                    Get Started Now
                </CardItem>
                <a href='https://surveybox.istad.co' target="_blank" rel="noopener noreferrer">
                <button 
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                  Visit Site
                </button>
                </a>
              </div>
            </CardBody>
          </CardContainer>
          <CardContainer className="inter-var ">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-[#E2CBFF] border-black/[0.1] w-full md:!w-[350px] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white "
              >
                Automatex
                <Image
                  src={automatex}
                  width={80}
                  height={80}
                  alt='Automatex'
                />
              </CardItem>
              <CardItem
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
               Deploy your application with AutomateX.
               Say Goodbye
To Manual.
                <ul className="my-4 flex flex-col gap-2">
                  <li className="flex items-center gap-2">
                    <CheckIcon />Automate your deployment process
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    Monitoring your deployment
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    Infrastructure as code (IaC)
                  </li>
                </ul>
              </CardItem>
              <div className="flex justify-between items-center mt-8">
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  <a href='https://automatex.dev' target="_blank" rel="noopener noreferrer">
                  Get Started Now
                  </a>
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
          <CardContainer className="inter-var ">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full md:!w-[350px] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white "
              >
                verify.istad.co
                <Image
                    src={logoistad}
                    width={80}
                    height={80}
                    alt='logoistad'
                />
              </CardItem>
              <CardItem
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                CSTAD is a noteworthy science and technology center in Cambodia.

                <ul className="my-4 flex flex-col gap-2">
                  <li className="flex items-center gap-2">
                    <CheckIcon />3 Free automations
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    100 tasks per month
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    Two-step Actions
                  </li>
                </ul>
              </CardItem>
              <div className="flex justify-between items-center mt-8">
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Try now →
                </CardItem>
                <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  <a href='https://verify.istad.co' target="_blank" rel="noopener noreferrer">
                    Get Started Now
                  </a>
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </div>
      </section>
    </main>
  )
}