import ContactForm from '@/components/contact/ContactForm'
import ContactHeader from '@/components/contact/ContactHeader'
import ContactInfo from '@/components/contact/ContactInfo'
import ContactMap from '@/components/contact/ContactMap'
import SocialLinks from '@/components/contact/SocialLinks'
import SupportHelp from '@/components/contact/SupportHelp'
import React from 'react'

export default function page() {
  return (
    <div>
      <ContactHeader/>
      <ContactInfo/>
      <ContactForm/>
      <SupportHelp/>
      <ContactMap/>
      <SocialLinks/>
    </div>
  )
}
