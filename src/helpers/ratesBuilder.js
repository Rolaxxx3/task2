import { ACCEPTED_CURRENCIES } from '@/constants/ACCEPTED_CURRENCIES'
import { AVAILABLE_CURRENCIES } from '@/constants/AVAILABLE_CURRENCIES'

export default function ratesBuilder(rate) {
  const unbuildedRates = rate.rates
  const filtredRate = AVAILABLE_CURRENCIES.reduce((res, rate) => {
    return { ...res, [rate]: unbuildedRates[rate]}
  }, {})

  return ACCEPTED_CURRENCIES.reduce((rates, base) => {
    return {
      ...rates,
      [base]: AVAILABLE_CURRENCIES.reduce((res, rate) => {
        return {
          ...res,
          [rate]:
            Math.round(filtredRate[rate] / unbuildedRates[base] * 100) / 100,
        }
      }, {}),
    }
  }, {})
}
