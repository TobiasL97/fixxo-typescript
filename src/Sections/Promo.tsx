import React from 'react'
import ArmsOverHead from '../Assets/arms-over-head.svg'
import ButtonThemeDark from '../Components/ButtonThemeDark'
import LeaningBoy from '../Assets/leaning-boy.svg'

const Promo = () => {
  return (
    <section className="promo">
        <div className="container">
            <div className="winter-promo">
                <img src={ArmsOverHead} alt="Girl-with-arms-over-head" />
                <h1>Winter Clearance<span>Up to 70% Off!</span></h1>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem apriam eaque ipsa quae ab illo inventore.</p>
                <ButtonThemeDark text="SHOP NOW" link="/products"/>
            </div>

            <div className="new-arrivals-promo">
                <img className="leaning-boy" src={LeaningBoy} alt="Leaning-boy" />
                <h1>NEW<span>Arrivals</span></h1>
                <ButtonThemeDark text="SHOP NOW" link="/products"/>
            </div>
        </div>
    </section>
  )
}

export default Promo