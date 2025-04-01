const path = {
  home: '/',
  user: '/user',
  profile: '/user/profile',
  changePassword: '/user/password',
  login: '/login',
  register: '/register',
  logout: '/logout',
  product: '/product',
  productDetail: ':id',
  cart: '/cart',
  contact: '/contact'
} as const

export default path
