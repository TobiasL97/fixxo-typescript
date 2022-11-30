import React from 'react'
import OurSpecialityBox from '../Components/OurSpecialityBox'

const OurSpeciality: React.FC = () => {
  return (
    <section className="our-speciality container">
        <h1>Our Speciality</h1>
        <div className="our-speciality-grid grid">
            <OurSpecialityBox link="/trackyourorder" headLine="Track Your Order" headLineSpan={''} />
            <OurSpecialityBox link="/makeareturn" headLine="Make a Return" headLineSpan={''} />
            <OurSpecialityBox link="/requestaprice" headLine="Request a Price" headLineSpan="Adjustment"/>
        </div>
    </section>
  )
}

export default OurSpeciality