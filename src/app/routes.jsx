import UsersListPage from './components/UserList/UserListPage'

const routes = (isLoggedIn, location, isAdmin) => [
  {
    path: '/',
    element: <UsersListPage/>
  }
]

export default routes