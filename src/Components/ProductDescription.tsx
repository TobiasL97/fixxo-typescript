import React, { useState } from 'react'

const ProductDescription: React.FC = () => {

      const [descriptionMenu, setDescriptionMenu] = useState(true)

      //När vald knapp är aktiverad så ska meny till vald knapp dyka upp och knappen ska få en röd linje under sig

      const toggleDescriptionMenu = () => {  //Description knapp
        setAdditionalMenu(true)
        setShoppingReturn(true)
        setReviews(true)
        setDescriptionMenu(!descriptionMenu)
      }

      const [additionalMenu, setAdditionalMenu] = useState(true) //Additional meny knapp

      const toggleAdditionalMenu = () => {
        setDescriptionMenu(true)
        setShoppingReturn(true)
        setReviews(true)
        setAdditionalMenu(!additionalMenu)
      }

      const [shoppingReturn, setShoppingReturn] = useState(true) //Shopping & returns knapp

      const toggleShoppingReturnMenu = () => {
        setDescriptionMenu(true)
        setAdditionalMenu(true)
        setReviews(true)
        setShoppingReturn(!shoppingReturn)
      }

      const [reviews, setReviews] = useState(true) //Reviews knapp

      const toggleReviewMenu = () => {
        setDescriptionMenu(true)
        setAdditionalMenu(true)
        setShoppingReturn(true)
        setReviews(!reviews)
      }
      

  return (
    <div  className="product-description">
        <div className="description-buttons">
            <button onClick={toggleDescriptionMenu} data-testid="descriptionButton" className={`menu-button${!descriptionMenu ? ' button-active': ''}`}>Description</button>
            <button onClick={toggleAdditionalMenu} className={`menu-button${!additionalMenu ? ' button-active': ''}`}>Additional</button>
            <button onClick={toggleShoppingReturnMenu}className={`menu-button${!shoppingReturn ? ' button-active': ''}`}>Shopping & Returns</button>
            <button onClick={toggleReviewMenu} className={`menu-button${!reviews ? ' button-active': ''}`}>Reviews</button>
        </div>
        <div className={`menu-text${!descriptionMenu ? ' show-text': ''}`}>
            <p>Way extensive and dejection get delivered deficient sincerity gentleman age. Too end instrument possession contrasted motionless. Calling offence six joy feeling. Coming merits and was talent enough far. Sir joy northward sportsmen education. Discovery incommode earnestly no he commanded if. Put still any about manor heard. </p>
            <p>* Village did removed enjoyed explain nor ham saw calling talking.</p>
            <p>* Securing as informed declared or margaret.</p>
            <p>* Joy horrible moreover man feelings own shy.</p>
            <p>On even feet time have an no at. Relation so in confined smallest children unpacked delicate. Why sir end believe uncivil respect. Always get adieus nature day course for common. My little garret repair to desire he esteem.</p>
        </div>
        <div  className={`menu-text${!additionalMenu ? ' show-text': ''}`}>
            <p>additional text</p>
        </div>
        <div  className={`menu-text${!shoppingReturn ? ' show-text': ''}`}>
            <p>Shopping & Returns</p>
        </div>
        <div  className={`menu-text${!reviews ? ' show-text': ''}`}>
            <p>Reviews</p>
        </div>
    </div>
  )
}

export default ProductDescription