"use client"
import Image from "next/image";
import React from 'react';
import Lottie from 'lottie-react';
import animationData from '@/public/lotties/leaf.json';
import ImageCarousel from "./ImageCarousel";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden min-h-[90vh] flex items-center"
      >
        <Lottie
          animationData={animationData}
          className="absolute right-0 top-12 max-w-[100vw] sm:max-w-[100vw] md:max-w-[70vw] lg:max-w-[40vw] xl:max-w-[40vw] mb-96"
          height={400}
          width={400}
        />
        <div className="w-full h-full bg-opacity-40 pt-[200px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[110px] 2xl:pb-[200px] bg-primary" >
          <div className="container h-full" >
            <div className="-mx-4 flex flex-wrap h-full">
              <div className="flex items-center w-full h-full px-4">
                <div
                  className="wow fadeInUp mx-auto max-w-[800px] text-center"
                  data-wow-delay=".2s"
                >
                  <Image alt="logo" width={700} height={500} src="/logo.png" />
                  <h1 className="mb-5 text-3xl font-bold leading-tight text-black outline-double outline-white bg-primary opacity-50 sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                    MQ International Schooling
                  </h1>
                  <p className="mb-12 text-base font-medium !leading-relaxed text-black dark:opacity-90 sm:text-lg md:text-xl">
                    &quot;The MQ International Schooling Method emphasizes modern physical education along with traditional moral education concepts.&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[20vh] flex flex-col justify-center overflow-hidden -z-10">
          <div className="w-full px-4 md:px-6">
            <div className="text-center">
              <ImageCarousel />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 z-[-1] opacity-30 lg:opacity-100">
          <svg
            width="364"
            height="201"
            viewBox="0 0 364 201"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.88928 72.3303C33.6599 66.4798 101.397 64.9086 150.178 105.427C211.155 156.076 229.59 162.093 264.333 166.607C299.076 171.12 337.718 183.657 362.889 212.24"
              stroke="url(#paint0_linear_25:218)"
            />
            <path
              d="M-22.1107 72.3303C5.65989 66.4798 73.3965 64.9086 122.178 105.427C183.155 156.076 201.59 162.093 236.333 166.607C271.076 171.12 309.718 183.657 334.889 212.24"
              stroke="url(#paint1_linear_25:218)"
            />
            <path
              d="M-53.1107 72.3303C-25.3401 66.4798 42.3965 64.9086 91.1783 105.427C152.155 156.076 170.59 162.093 205.333 166.607C240.076 171.12 278.718 183.657 303.889 212.24"
              stroke="url(#paint2_linear_25:218)"
            />
            <path
              d="M-98.1618 65.0889C-68.1416 60.0601 4.73364 60.4882 56.0734 102.431C120.248 154.86 139.905 161.419 177.137 166.956C214.37 172.493 255.575 186.165 281.856 215.481"
              stroke="url(#paint3_linear_25:218)"
            />
            <circle
              opacity="0.8"
              cx="214.505"
              cy="60.5054"
              r="49.7205"
              transform="rotate(-13.421 214.505 60.5054)"
              stroke="url(#paint4_linear_25:218)"
            />
            <circle cx="220" cy="63" r="43" fill="url(#paint5_radial_25:218)" />
            <defs>
              <linearGradient
                id="paint0_linear_25:218"
                x1="184.389"
                y1="69.2405"
                x2="184.389"
                y2="212.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#ffff" stopOpacity="0" />
                <stop offset="1" stopColor="#ffff" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_25:218"
                x1="156.389"
                y1="69.2405"
                x2="156.389"
                y2="212.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#ffff" stopOpacity="0" />
                <stop offset="1" stopColor="#ffff" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_25:218"
                x1="125.389"
                y1="69.2405"
                x2="125.389"
                y2="212.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#ffff" stopOpacity="0" />
                <stop offset="1" stopColor="#ffff" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_25:218"
                x1="93.8507"
                y1="67.2674"
                x2="89.9278"
                y2="210.214"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#ffff" stopOpacity="0" />
                <stop offset="1" stopColor="#ffff" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_25:218"
                x1="214.505"
                y1="10.2849"
                x2="212.684"
                y2="99.5816"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#ffff" />
                <stop offset="1" stopColor="#ffff" stopOpacity="0" />
              </linearGradient>
              <radialGradient
                id="paint5_radial_25:218"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(220 63) rotate(90) scale(43)"
              >
                <stop offset="0.145833" stopColor="white" stopOpacity="0" />
                <stop offset="1" stopColor="white" stopOpacity="0.08" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </section>
    </>
  );
};

export default Hero;
