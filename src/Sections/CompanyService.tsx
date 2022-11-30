import React from 'react'
import SupportOffers from '../Components/SupportOffers'

const CompanyService = () => {
  return (
    <section className="company-service">
      <div className="container-small">
        <SupportOffers Icon="fa-sharp fa-solid fa-headset" SupportHeader="Customer Support" SupportText="Village did removed enjoyed" SupportTextSpan="explain talking." />
        <SupportOffers Icon="fa-regular fa-credit-card" SupportHeader="Secured Payment" SupportText="Village did removed enjoyed" SupportTextSpan="explain talking." />
        <SupportOffers Icon="fa-regular fa-truck" SupportHeader="Free Home Delivery" SupportText="Village did removed enjoyed" SupportTextSpan="explain talking." />
        <SupportOffers Icon="fa-regular fa-truck" SupportHeader="30 Days Reuters" SupportText="Village did removed enjoyed" SupportTextSpan="explain talking." />
      </div>
    </section>
  )
}

export default CompanyService