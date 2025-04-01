import React from 'react'
import logo from '../../assets/icons/logo.svg'
import facebook from '../../assets/icons/facebook.svg'
import twitter from '../../assets/icons/twitter.svg'
import pay1 from '../../assets/icons/pay1.svg'
import pay2 from '../../assets/icons/pay2.svg'
import pay3 from '../../assets/icons/pay3.svg'
import pay4 from '../../assets/icons/pay4.svg'

export default function Footer() {
  return (
    <div className='container mt-[95px] bg-blue py-[54px] md:px-[80px] xl:px-[104px] xl:pt-[150px] '>
      <div className='flex flex-col justify-start'>
        <div className='flex flex-wrap gap-8 lg:justify-between '>
          <div className='flex flex-col'>
            <div className='flex items-center gap-[7px]'>
              <div className='w-[39px] h-[39px]'>
                <img src={logo} alt='' />
              </div>
              <div className='font-bold text-[18px]'>E-Comm</div>
            </div>
            <div className='mt-[16px] text-[12px] lg:max-w-[221px] '>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever.Since the 1500s, when an unknown printer.
            </div>
          </div>
          <div className='flex flex-col 2xl:ml-[308px]'>
            <div className='text-[18px] font-medium'>Follow Us</div>
            <div className='mt-[19px] text-[12px] lg:max-w-[198px] '>
              Since the 1500s, when an unknown printer took a galley of type and scrambled.
            </div>
            <div className='mt-[24px] flex items-center gap-[39px]'>
              <div>
                <img src={facebook} alt='' />
              </div>
              <div>
                <img src={twitter} alt='' />
              </div>
            </div>
          </div>
          <div className='flex flex-col 2xl:ml-[189px]'>
            <div className='text-[18px] font-medium'>Contact Us</div>
            <div className='mt-[19px] text-[12px] lg:max-w-[148px] '>E-Comm , 4578 Marmora Road, Glasgow D04 89GR</div>
          </div>
        </div>

        <div className='mt-[70px] flex flex-wrap gap-6 justify-between'>
          <div className='flex flex-col gap-[30px]'>
            <div className='text-[18px]'>Information</div>
            <div className='flex flex-col text-[14px]'>
              <p>About Us</p>
              <p>Information</p>
              <p>Privacy Policy</p>
              <p>Terms & Conditions</p>
            </div>
          </div>

          <div className='flex flex-col gap-[30px]'>
            <div className='text-[18px]'>Service</div>
            <div className='flex flex-col text-[14px]'>
              <p>About Us</p>
              <p>Information</p>
              <p>Privacy Policy</p>
              <p>Terms & Conditions</p>
            </div>
          </div>

          <div className='flex flex-col gap-[30px]'>
            <div className='text-[18px]'>My Account</div>
            <div className='flex flex-col text-[14px]'>
              <p>About Us</p>
              <p>Information</p>
              <p>Privacy Policy</p>
              <p>Terms & Conditions</p>
            </div>
          </div>

          <div className='flex flex-col gap-[30px]'>
            <div className='text-[18px]'>Our Offers</div>
            <div className='flex flex-col text-[14px]'>
              <p>About Us</p>
              <p>Information</p>
              <p>Privacy Policy</p>
              <p>Terms & Conditions</p>
            </div>
          </div>
        </div>

        <div className='mt-[63px] bg-white-100 h-[1px]'></div>

        <div className='mt-[33px] flex justify-between items-center'>
          <div className='text-gray-25'>© 2018 Ecommerce theme by www.bisenbaev.com</div>
          <div className='flex gap-[19.55px]'>
            <div>
              <img src={pay1} alt='' />
            </div>
            <div>
              <img src={pay2} alt='' />
            </div>
            <div>
              <img src={pay3} alt='' />
            </div>
            <div>
              <img src={pay4} alt='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
