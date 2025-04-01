import React from 'react'
import { NavLink, NavLinkProps } from 'react-router-dom'

interface Props {
  namePage: string
}

export default function CustomNavLink({
  namePage,
  ...rest
}: Props & NavLinkProps & React.RefAttributes<HTMLAnchorElement>) {
  return (
    <NavLink className={({ isActive }) => (isActive ? 'text-primary' : '')} {...rest}>
      {namePage}
    </NavLink>
  )
}
