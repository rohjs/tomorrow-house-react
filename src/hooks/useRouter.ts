import { useHistory, useLocation, useRouteMatch } from 'react-router-dom'

const useQuery = () => {
  return new URLSearchParams(useLocation().search)
}

export const useRouter = () => {
  const location = useLocation()
  const history = useHistory()
  const match = useRouteMatch()
  const query = useQuery()

  return {
    push: history.push,
    replace: history.replace,
    pathname: location.pathname,
    query,
    match,
    location,
    history,
  } as const
}
