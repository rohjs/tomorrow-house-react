import { useAppSelector } from 'src/hooks'
import { getExtraOptionsRaw, getOptions } from 'src/app/product/detail'

export const useFormCheckouts = () => {
  const options = useAppSelector(getOptions)
  const extraOptions = useAppSelector(getExtraOptionsRaw)

  const getOptionDetail = (value: number) => {
    const match = options.find((option) => option.id === value)
    if (match)
      return {
        label: `${match.explain} - ${match.explain2}`,
        sellingCost: match.sellingCost,
      }

    const extraMatch = extraOptions.find((option) => option.id === value)!

    return {
      label: extraMatch.explain,
      sellingCost: extraMatch.sellingCost,
    }
  }

  const getSumCost = () => {}

  return {
    getOptionDetail,
  } as const
}
