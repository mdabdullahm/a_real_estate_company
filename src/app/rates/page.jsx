import PopularRates from '@/components/rates/PopularRates'
import RateCalculator from '@/components/rates/RateCalculator'
import RatesCTA from '@/components/rates/RatesCTA'
import RatesHeader from '@/components/rates/RatesHeader'
import RatesTable from '@/components/rates/RatesTable'
import RatesUpdateInfo from '@/components/rates/RatesUpdateInfo'
import React from 'react'

export default function page() {
  return (
    <div>
      <RatesHeader/>
      <RatesTable/>
      <RateCalculator/>
      <PopularRates/>
      <RatesUpdateInfo/>
      <RatesCTA/>
    </div>
  )
}
