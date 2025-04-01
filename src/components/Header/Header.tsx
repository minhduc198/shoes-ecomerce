import { Link } from 'react-router-dom'
import path from 'src/constants/path'
import arrowDown from '../../assets/icons/arrow-down.svg'
import cart from '../../assets/icons/Group.svg'
import logo from '../../assets/icons/logo.svg'
import profile from '../../assets/icons/profile_close_2.svg'
import search from '../../assets/icons/search-icon.svg'
import CustomNavLink from '../CustomNavLink'

const isAuthenticated = true

export default function Header() {
  return (
    <div className='container '>
      <div className='flex justify-between pt-7 pb-[14px] border-b-2 border-gray'>
        <div className='flex gap-[13px]'>
          <div className='flex gap-[5.6px] items-center'>
            <p className='text-sm'>EN</p>
            <img src={arrowDown} alt='' />
          </div>
          <div className='flex gap-[5.6px] items-center'>
            <p className='text-sm'>USD</p>
            <img src={arrowDown} alt='' />
          </div>
        </div>
        <div className='flex gap-8 '>
          {isAuthenticated && (
            <div className='flex gap-[6px] items-center'>
              <img src={profile} alt='' />
              <p className='text-sm'>My profile</p>
            </div>
          )}

          {!isAuthenticated && (
            <div className='flex gap-5 items-center'>
              <Link to={path.login} className='text-sm'>
                Login
              </Link>
              <p>|</p>
              <Link to={path.register} className='text-sm'>
                Register
              </Link>
            </div>
          )}
          <div>
            <img src={cart} alt='' />
          </div>
          {isAuthenticated && (
            <div className='flex gap-[6px] items-center'>
              <p className='text-sm opacity-50'>$0.00</p>
              <img src={search} alt='' />
            </div>
          )}
        </div>
      </div>
      <div className='flex justify-between py-[26px]'>
        <div className='flex gap-[6px] items-center'>
          <img src={logo} alt='' />
          <p className='text-[18px] font-bold'>E-Comm</p>
        </div>
        <div className='flex gap-[97px] text-[24px] font-medium'>
          <CustomNavLink namePage='HOME' to={path.home} />
          <CustomNavLink namePage='BAGS' to={path.product} />
          <CustomNavLink namePage='SNEAKERS' to={path.product} />
          <CustomNavLink namePage='BELT' to={path.product} />
          <CustomNavLink namePage='CONTACT' to={path.contact} />
        </div>
      </div>
    </div>
  )
}
