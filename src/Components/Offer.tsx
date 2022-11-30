import React from 'react'
import ButtonThemeLight from './ButtonThemeLight'
import { OfferProps } from '../Models/OfferModel'

const Offer: React.FC<OfferProps> = ({OfferHeadLine}) => {
  return (
    <div className="offer">
        <div className="offer-content">
            <h1>{OfferHeadLine}</h1>
            <ButtonThemeLight text="FLASH SALE" link="/products"/>
        </div>
    </div>
  )
}

export default Offer