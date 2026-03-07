import ExchangeForm from '@/components/exchange/ExchangeForm'
import ExchangeHeader from '@/components/exchange/ExchangeHeader'
import ExchangeHowItWorks from '@/components/exchange/ExchangeHowItWorks'
import ExchangeInfo from '@/components/exchange/ExchangeInfo'
import ExchangeSecurity from '@/components/exchange/ExchangeSecurity'
import ExchangeSupport from '@/components/exchange/ExchangeSupport'
import RecentExchanges from '@/components/exchange/RecentExchanges'
import React from 'react'

export default function page() {
  return (
    <div>
      <ExchangeHeader/>
      <ExchangeForm/>
      <ExchangeInfo/>
      <ExchangeHowItWorks/>
      <ExchangeSecurity/>
      <RecentExchanges/>
      <ExchangeSupport/>
    </div>
  )
}
