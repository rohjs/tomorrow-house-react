import { child, get, ref } from '@firebase/database'
import { database } from 'src/lib/firebase'

const dbRef = ref(database)

export const useFirebase = () => {
  const getData = (params: string) => {
    return get(child(dbRef, params))
  }

  return {
    getData,
  } as const
}
