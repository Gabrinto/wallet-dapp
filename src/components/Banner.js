import React from 'react';
import { images } from '../constants';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowRight } from 'react-icons/md';

const Banner = () => {
  return (
    <>
      <div
        className="md:w-[97vw] md:min-h-[620px]  min-h-[90vh]
         sm:bg-cover object-contain bg-cover min-w-[100%]  md:bg-cover lg:h-[100vh] lg:w-[80vw] mt-[5.6rem] rounded-[4rem] relative"
        style={{
          backgroundImage: `url(${images.bannerNew})`,
          backgroundRepeat: 'no-repeat',
          // backgroundSize: 'cover',
          // objectFit: 'cover',
          // heigh,
          // position: 'relative',
          objectPosition: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          className="flex flex-col items-center justify-center md:mt-[4rem] text-white mt-[3rem] h-fit
          md:pl-[2.5rem] 
        sm:max-w-[50%] mx-auto"
        >
          <div className="flex flex-col items-center justify-center w-full ">
            <img
              src={images.transparentLogo}
              alt=""
              className="md:w-[140px] w-[100px] h-full "
            />
            <h1
              className="flex  md:text-[94px] text-[50px] mt-[2rem]  md:min-w-[500px]  leading-8 
            md:leading-[4rem] sm:leading-[3.0rem] lg:leading-[4.6rem] font-bold bg-[#141414] sm:bg-transparent md:bg-transparent py-[10px] sm:py-0 w-screen justify-center items-center"
            >
              CONNECT
              <br />
              ING WEB3
            </h1>
          </div>
          <div
            className="md:w-[500px] text-gray-500 sm:mt-[2rem] md:mt-[1rem] md:leading-6 md:text-[25px] text-[21px]
             md:bg-transparent bg-[#141414] sm:bg-transparent"
          >
            <p>
              The communications protocol for web3, WalletConnect brings the
              ecosystem together by enabling wallets and apps to securely
              connect and interact.
            </p>

            <span className="flex flex-col md:flex-row gap-4 items-center justify-center mt-[2rem]">
              <Link
                className="bg-blue-500 text-white flex items-center justify-center text-[16px] w-[65%]  rounded-full py-[7px]
                lg:py-[10px]"
                to={'/wallet'}
              >
                CONNECT WALLET <MdKeyboardArrowRight size={23} />
              </Link>
              <Link
                className="bg-[#f1f3f3] flex items-center lg:py-[10px] justify-center mb-3 md:mb-0 text-[#141414]  w-[85%] text-[15px] py-[7px] rounded-full"
                to={'/wallet'}
              >
                EXPLORE WALLETS AND APPS <MdKeyboardArrowRight size={23} />
              </Link>
            </span>
          </div>
        </div>
      </div>
      <div className="text-white mt-[2rem] left-0  self-start flex justify-start items-start overflow-x-hidden w-full">
        <div className="flex gap-6 justify-center items-start left-0">
          <div className="">
            <p className="text-[1.3rem]">TOTAL WEBSOCKETS</p>
            <p className="text-[2.8rem] font-semibold">1,107,304,399</p>
            <p>PER DAY</p>
          </div>
          {/* the rest */}

          <div className="">
            <p className="text-[1.3rem]">ACTIVE WEBSOCKETS</p>
            <p className="text-[2.8rem]  font-semibold">887,924</p>
            <p>CURRENTLY</p>
          </div>
          <div className="">
            <p className="text-[1.3rem]">MESSAGES</p>
            <p className="text-[2.8rem]  font-semibold">24,761</p>
            <p>PER SECOND</p>
          </div>
          <div className="">
            <p className="text-[1.3rem]">WALLETS</p>
            <p className="text-[2.8rem]  font-semibold">170+</p>
            <p>INTEGRATED</p>
          </div>
          <div className="">
            <p className="text-[1.3rem]">APPS</p>
            <p className="text-[2.8rem]  font-semibold">450+</p>
            <p>INTEGRATED</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
