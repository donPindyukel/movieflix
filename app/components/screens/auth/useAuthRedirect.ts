import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { useAuth } from '@/hooks/useAuth'

export const useAuthRedirect = () => {
  const { user } = useAuth()

  const { query, push } = useRouter()

  const redirect = query.redirect || '/'

  useEffect(() => {
    if (user) {
      push(String(redirect))
    }
  }, [user, redirect, push])
}
