import { NavLink } from "react-router"

interface Props {
  namePage: string,
  namePath:string
}
export const CustomNavLink = ({namePage, namePath}: Props) => {
  return <NavLink to={`${namePath}`} className={({ isActive }) =>
    isActive ? "text-primary" : ""
  }>{namePage}</NavLink>
}