const consola = require('consola')
export default function({ store, redirect, route }) {
  const { auth, authType = 'login' } = store.state
  const { type } = route.meta[0]
  consola.info(authType)

  // type is for page type
  // authType is for user type
  // value is for url

  // if (Validate(auth, type, 'guest')) Director(authType, redirect)
  // else if (Validate(!auth, type, 'guest')) redirect('/login')
  // else if (Validate(auth, type, 'login')) Director(authType, redirect)
  // else if (Validate(!auth, type, 'login')) redirect('/login')
  // else if (auth && ValidateAuth(type, authType, 'admin')) Director(authType, redirect)
  // else if (auth && ValidateAuth(type, authType, 'vendor')) Director(authType, redirect)

  if (isAuth(auth)) {
    if (ValidateAuthRoute(type, authType, 'admin')) {
    } else if (ValidateAuthRoute(type, authType, 'vendor')) {
    } else Director(authType, redirect)
  } else if (ValidateRoute(type, 'login')) {
  } else if (ValidateRoute(type, 'guest')) {
  } else Director(authType, redirect)
}
const isAuth = (auth) => auth
const ValidateAuthRoute = (type, authType, value) => type === authType && authType === value
const ValidateRoute = (type, value) => type === value

const Director = (authType, redirect) => redirect(`/${authType || 'login'}`)
