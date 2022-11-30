import React from 'react'
import GirlOnChair from '../Assets/girl-on-chair.svg'
import ButtonTheme from '../Components/ButtonTheme'
import PersonInCoat from '../Assets/person-in-coat.svg'

const ShowCase: React.FC = () => {

  return (
    <section className="showcase">
        <div className="container flex">
            <div>
              <img className="img-left" src={GirlOnChair} alt="Girl-on-chair" />
            </div>
            <div className="showcase-text">
                <h1>SALE UP<span>To 50% Off</span></h1>
                <p>Online shopping free home delivery over $100</p>
                <ButtonTheme text="SHOP NOW" link="/products"/>
            </div>
            <div>
              <img className="img-right" src={PersonInCoat} alt="Person-in-a-coat" />
            </div>
        </div>
    </section>
  )
}

export default ShowCase