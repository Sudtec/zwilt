import JourneyTemplate from '@/components/common/journeyTemplate'
import React from 'react'
import Image from "next/image";


const Journey = () => {
  return (
    <div>
        <h1 className='text-[#202229] text-[54px] leading-[64px] font-[700] text-center mb-[100px] xl:text-[34px]'>Start your journey today</h1>

        <JourneyTemplate JbgColor='bg-[#EDEFFF]' Jimage='/img/1.svg' h1Text='Find your next star performer.' width={51.23} height={83} h1width='w-[445px]' pText='Explore the vast Zwilt marketplace to find the candidate that meets your needs.' pWidth='w-[407px] xl:w-[300px]' btnTxt='Join Now'>
                <Image
                    src="/img/j1.svg"
                    alt="Jason Makki"
                    width={466.06}
                    height={690.03}
                    className="relative -top-[60px] right-0 md:hidden"
                />
        </JourneyTemplate>

        <JourneyTemplate JbgColor='bg-[#FFF7E1]' Jimage='/img/2.svg' width={60} height={137} h1Text='Evaluate to your heart’s content.' h1width='w-[365px]'  pWidth='w-[407px] xl:w-[320px]' pText='Assess the candidate through work history, transparent tests and video interviews.' btnTxt='Browse More'>
                <Image
                    src="/img/j2Original1.jpg"
                    alt="Jason Makki"
                    width={420}
                    height={609.55}
                    className="relative -top-[60px] right-[24px] lg:w-[300px] md:hidden"
                />
        </JourneyTemplate>

        <JourneyTemplate JbgColor='bg-[#F3F3F3]' Jimage='/img/3.svg'  width={60} height={137} h1Text='Start building your team.' h1width='w-[276px]' pText='Onboard your candidate right away and start creating the next big thing.' pWidth='w-[350px] xl:w-[300px]' btnTxt='Join Now'>
                 <Image
                    src="/img/j3.svg"
                    alt="Jason Makki"
                    width={468}
                    height={462}
                    className="relative -top-[60px] right-0 md:hidden"
                />
        </JourneyTemplate>
    </div>
  )
}

export default Journey