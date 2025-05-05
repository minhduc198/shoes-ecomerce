import path from 'src/constants/path'
import CustomNavLink from '../CustomNavLink'

export const Header = () => {
  return (
    <div className='container pt-[26px] px-[40px] pb-[26px] md:px-[60px] lg:px-[80px] lg:pr-[135px]  lg:pl-[104px]'>
      <div className='flex justify-between items-center text-[20px] pb-[15px] border-b-[2px] '>
        <div className='flex'>
          <p>EN</p>
          <p>USD</p>
        </div>
        <div className='flex gap-8 '>
          <div className='flex gap-[6px]'>
            <div className=''>
              <img src='' alt='' />
            </div>
            <p>My profile</p>
          </div>
          <div className='flex gap-[6px]'>
            <div className=''>
              <img src='' alt='' />
            </div>
            <p>Items</p>
          </div>
          <div className='flex gap-[6px] flex-row-reverse'>
            <div className=''>
              <img src='' alt='' />
            </div>
            <p>0.0$</p>
          </div>
        </div>
      </div>
      <div className='mt-[26px] flex justify-between items-center'>
        <div className='flex gap-[6px]'>
          <div className=''>
            <img src='' alt='' />
          </div>
          <p className='text-[18px] font-bold'>E-Comm</p>
        </div>
        <div className='flex gap-[97px]'>
          <CustomNavLink namePath={path.home} namePage={'HOME'} />
          <CustomNavLink namePath={path.product} namePage={'PRODUCT'} />
          <CustomNavLink namePath={path.contact} namePage={'CONTACT'} />
        </div>
      </div>
    </div>
  )
}
