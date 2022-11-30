import React from 'react'
import HeaderWhite from '../Sections/HeaderWhite'
import BreadCrumb from '../Sections/BreadCrumb'
import ContactsForm from '../Sections/ContactsForm'
import Footer from '../Sections/Footer'

const ContactsView: React.FC = () => {


  return (
    <>
      <HeaderWhite />
      <BreadCrumb page="/contacts" pageName="Contacts"/>
      <section className="map">
        <iframe className="google-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8137.794769963982!2d18.025221984534497!3d59.342157701427986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9d86c5590a35%3A0xac5dd727a529fe56!2sEC%20Utbildning%20AB!5e0!3m2!1sen!2sse!4v1666006874087!5m2!1sen!2sse" allowFullScreen={true} loading="lazy"></iframe>
      </section>
      <ContactsForm />
      <Footer />
    </>
  )
}

export default ContactsView