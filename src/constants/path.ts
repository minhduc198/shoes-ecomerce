const path = {
  home: '/',
  user: '/user',
  profile: '/user/profile',
  changePassword: '/user/password',
  login: '/login',
  register: '/register',
  logout: '/logout',
  productDetail: '/product/:id',
  cart: '/cart',
  contact: '/contact',
  product: '/product'
} as const

export default path
