import React from 'react'

export default function Footer() {
  return (
    <div className='container flex flex-col bg-blue-100 px-[40px] pb-[54px] pt-[150px] md:px-[60px] lg:px-[80px]  xl:pl-[134px] mt-24'>
      <div className='flex flex-col gap-y-[40px] flex-wrap md:flex-row md:justify-between xl:justify-normal'>
        <div>
          <div className='flex gap-[7px] items-center'>
            <div className=''>
              <img src='' alt='' />
            </div>
            <p className='font-bold text-[18px]'>E-Comm</p>
          </div>
          <div className='text-[12px] mt-4 md:max-w-[221px]'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever.Since the 1500s, when an unknown printer.
          </div>
        </div>

        <div className='flex justify-between gap-[60px] xl:ml-[308px] xl:gap-[189px]'>
          <div className='flex flex-col gap-[20px]'>
            <div className='font-medium text-[18px]'>Follow Us</div>
            <div className='max-w-[189px] text-[12px]'>
              Since the 1500s, when an unknown printer took a galley of type and scrambled.
            </div>
            <div className='flex gap-[39px]'>icon</div>
          </div>

          <div className='flex flex-col gap-[20px]'>
            <div className='font-medium text-[18px]'>Contact Us</div>
            <div className='max-w-[148px] text-[14px]'>E-Comm , 4578 Marmora Road, Glasgow D04 89GR</div>
          </div>
        </div>
      </div>

      <div className='flex flex-wrap gap-[50px] justify-between mt-[70px] xl:pr-[165px]'>
        <div>
          <div className='text-[18px]'>Information</div>
          <div className='text-[14px] mt-[30px]'>
            <p>About Us</p>
            <p>Information</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
        </div>

        <div>
          <div className='text-[18px]'>Service</div>
          <div className='text-[14px] mt-[30px]'>
            <p>About Us</p>
            <p>Information</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
        </div>

        <div>
          <div className='text-[18px]'>My Account</div>
          <div className='text-[14px] mt-[30px]'>
            <p>About Us</p>
            <p>Information</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
        </div>

        <div>
          <div className='text-[18px]'>Our Offers</div>
          <div className='text-[14px] mt-[30px]'>
            <p>About Us</p>
            <p>Information</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
        </div>
      </div>

      <div className='max-w-[1180px] h-[1px] bg-white mt-[63px]'></div>

      <div className='mt-[30px] max-w-[1180px] flex justify-between items-center'>
        <div className='text-[14px] text-gray-light'>© 2018 Ecommerce theme by www.bisenbaev.com</div>
        <div className=''>img payment</div>
      </div>
    </div>
  )
}
