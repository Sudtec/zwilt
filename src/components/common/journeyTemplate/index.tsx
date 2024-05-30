import React, { ReactNode } from 'react'
import SkewBg from '../skewBg';
import Image from "next/image";
import { LogoWhite } from "@/icons";
import Link from "next/link";


interface JourneyTemplateProps {
    children: ReactNode;
    JbgColor: string;
    Jimage: string;
    h1Text: string;
    width: number;
    height: number;
    h1width: string;
    pText: string;
    pWidth: string;
    btnTxt: string;
}


const JourneyTemplate: React.FC<JourneyTemplateProps> = ({children, JbgColor, Jimage, width, height, h1Text, h1width, pText, pWidth, btnTxt}) => {
  return (
    <div className={`mx-[70px] mb-[40px] lg:mx-[10px]`}>
        <SkewBg bgColor={JbgColor}>
            <div className='flex justify-between h-[230.5px] lg:h-[110px] md:min-h-52'>
                <div className='flex items-start mt-[31.77px] lg:mt-[0px]'>
                    <Image
                        src={Jimage}
                        alt="quote"
                        width={width}
                        height={height}
                        className="ml-[24.62px] mr-[5px] mt-[5px] lg:w-[30px] lg:h-[50px]"
                    />

                    <div className=''>
                        <h1 className={`${h1width} font-[600] text-[34px] leading-[44px] text-[#202229] mb-[20px] xl:text-[24px] lg:mb-[4px] md:max-w-[300px]`}>{h1Text}</h1>

                        <p className={`text-[16px] ${pWidth} font-[400] leading-[24px] mb-[24px] lg:mb-[10px] md:max-w-[300px]`}>{pText}</p>

                        <Link href={"#"} className="btnJ learnJ">
                            <label>{btnTxt}</label>
                            <span>
                                <LogoWhite className="w-[16.82px] h-[10.09px]" />
                            </span>
                        </Link>
                    </div>

                    
                </div>

                <div>
                    {children}
                </div>
            </div>
        </SkewBg>
    </div>
  )
}

export default JourneyTemplate