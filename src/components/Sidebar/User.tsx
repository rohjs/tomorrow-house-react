import React from 'react'
import { Link } from 'react-router-dom'

import { useAuth } from 'src/hooks'

import { Avatar } from '../Avatar'
import { Button } from '../Button'
import { StyledSidebarAuth, StyledSidebarUser } from './styles'

interface SidebarUserProps {
  user: User | null
  closeSidebar: () => void
}

export const SidebarUser: React.FC<SidebarUserProps> = ({
  user,
  closeSidebar,
}) => {
  const { requestLogIn } = useAuth()
  const handleAuth = () => {
    requestLogIn()
    closeSidebar()
  }

  if (user == null) {
    return (
      <StyledSidebarAuth>
        <Button variant="outlined" size={40} onClick={handleAuth}>
          로그인
        </Button>
        <Button variant="primary" size={40} onClick={handleAuth}>
          회원가입
        </Button>
      </StyledSidebarAuth>
    )
  }

  const { id, username, profileImageUrl } = user
  return (
    <StyledSidebarUser>
      <Link to={`/user/${id}`} onClick={closeSidebar}>
        <Avatar
          className="avatar"
          username={username}
          image={profileImageUrl}
        />
        <strong className="username">{username}</strong>
      </Link>
    </StyledSidebarUser>
  )
}
