import UsersList from '@/components/screens/admin/users/UsersList'

import { NextPageAuth } from '@/shared/types/auth.types'

const UsersListPage: NextPageAuth = () => {
  return <UsersList />
}

UsersListPage.isOnlyAdmin = true

export default UsersListPage
