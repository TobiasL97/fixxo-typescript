import React from 'react'
import PamelaReif from '../Assets/pamela-reif.svg'
import ButtonThemeDark from '../Components/ButtonThemeDark'
import LetsBeConscious from '../Assets/lets-be-conscious.svg'
import ButtonThemeLight from '../Components/ButtonThemeLight'

const Promo2 = () => {
  return (
    <section className="promo-2">
        <div className="container">
            <div className="pamela-reif flex c-start">
                <img src={PamelaReif} alt="Picture-of-Pamela-Reif" />
                <div className="pamela-reif-content">
                    <h1>Pamela Reif's<span>Top Picks</span></h1>
                    <ButtonThemeDark text="SHOP NOW" link="/products"/>
                </div>
            </div>

            <div className="lets-be-conscious flex c-end">
                <img src={LetsBeConscious} alt="Mountain-of-clothes" />
                <div className="lets-be-conscious-content">
                    <h1>Let's be<span>Conscious</span></h1>
                    <ButtonThemeLight text="SHOP NOW" link="/products"/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Promo2