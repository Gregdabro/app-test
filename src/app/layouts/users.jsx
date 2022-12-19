import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import EditUserPage from '../components/page/editUserPage'
import UserPage from '../components/page/userPage'
import UsersListPage from '../components/page/usersListPage'
import UsersLoader from '../components/ui/hoc/usersLoader'

import { getCurrentUserId } from '../store/users'
const Users = () => {
  const params = useParams()
  const { userId, edit } = params
  const currentUserId = useSelector(getCurrentUserId())
  // (<Redirect to={`/users/${currentUserId}/edit`} />)
  return (
    <>
      <UsersLoader>
        {userId ? (
          edit ? (
            userId === currentUserId ? (
              <EditUserPage />
            ) : (
              'Loading'
            )
          ) : (
            <UserPage userId={userId} />
          )
        ) : (
          <UsersListPage />
        )}
      </UsersLoader>
    </>
  )
}

export default Users
