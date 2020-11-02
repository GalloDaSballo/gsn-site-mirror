import React from 'react'

import OpenSourceImg from 'assets/images/open-source.svg'
import TenXConversionImg from 'assets/images/ten-x-conversion.svg'
import P2PRelayersImg from 'assets/images/p2p-relayers.svg'

export const BenefitColumns = function() {
  return (
    <div
      className='pt-32 pb-20 bg-white'
    >
      <div className='container'>
        <div className='flex flex-wrap items-baseline -mx-6'>
          <div className='w-auto lg:w-1/3 mb-16 lg:mb-4 px-6 text-center sm:text-left'>
            <img src={OpenSourceImg} className='inline-block' />
            <h3 className='font-silkaMedium text-xl opacity-90 pt-4 pb-2'>
              Open Source Driven
            </h3>
            <p className='text-sm leading-relaxed'>
              Created as a community effort, GSN is completely open source. You can participate by either running your own relayer using the tools below or by integrating it into your dapp.
            </p>
          </div>
          <div className='w-auto lg:w-1/3 mb-16 lg:mb-4 px-6 text-center sm:text-left'>
            <img src={TenXConversionImg} className='inline-block' />
            <h3 className='font-silkaMedium text-xl opacity-90 pt-4 pb-2'>
              10x Your Conversion Rate
            </h3>
            <p className='text-sm leading-relaxed'>
              Many Ethereum Dapps experience 90% friction when prompting users to install Metamask and buy Ether. Supercharge your onboarding funnel with GSN.
            </p>
          </div>
          <div className='w-auto lg:w-1/3 mb-10 lg:mb-4 px-6 text-center sm:text-left'>
            <img src={P2PRelayersImg} className='inline-block' />
            <h3 className='font-silkaMedium text-xl opacity-90 pt-4 pb-2'>
              P2P Relayers
            </h3>
            <p className='text-sm leading-relaxed'>
              Everyone can run a relayer and obtain fees by pushing transactions into the Ethereum ledger. Decentralized and permissionless.
            </p>
          </div>
        </div>
      </div>
    </div>    
  )
}