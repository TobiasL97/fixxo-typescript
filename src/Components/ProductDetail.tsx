import React from 'react'
import { NavLink } from 'react-router-dom'

const ProductDetail: React.FC = () => {


  return (
    <div className="product-view">
        <div className="product-images">
            <div id="image1" className="images"></div>
            <div id="image2" className="images"></div>
            <div id="image3" className="images"></div>
            <div id="image4" className="images"></div>
        </div>
        <div className="product-detail">
            <div className="product-details">
            <h1 className="product-name">Black blouse</h1>
            <p className="sku">SKU: 12345670</p>
            <p className="brand">BRAND: The Northland</p>
            <p className="product-rating">
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
            </p>
            <p className="product-price">10 kr</p>
            <p className="product-text">Discovered had get considered projection who favourable. Necessary up knowledge it tolerably. Unwilling departure education is be dashwoods or an. Use off agreeable law unwilling sir deficient curiosity instantly. (<NavLink className="product-readmore"to="" >read more</NavLink>)</p>
            </div>
            <form className="add-to-cart-form">
                <div className="choose-size">
                    <p className="choose-size-text">Size:</p>
                    <input type="radio" name="product-size" id="small"></input>
                    <label className="product-size" htmlFor="small">S</label>
                    <input type="radio" name="product-size" id="medium"></input>
                    <label className="product-size" htmlFor="medium">M</label>
                    <input type="radio" name="product-size" id="large"></input>
                    <label className="product-size" htmlFor="large">L</label>
                    <input type="radio" name="product-size" id="x-large"></input>
                    <label className="product-size" htmlFor="x-large">XL</label>
                </div>
                <div className="select-color">
                    <p className="color-text">Color:</p>
                    <button type="button" className="color-select">Choose a color <i className="fa-light fa-chevron-down"></i></button>
                </div>
                <div className="quantity-submit">
                    <p className="quantity-text">Qty:</p>
                    <div className="quantity-button">
                        <button className="decrease" type="button">-</button>
                        <p className="quantity-number">1</p>
                        <button className="increase" type="button">+</button>
                    </div>
                    <div>
                        <button className="add-to-cart-button" type="submit">ADD TO CART</button>
                    </div>
                </div>
            </form>
            <div className="share-socialmedia">
                <p className="share-text">Share:</p>
                <NavLink className="share-socialmedia-links" to=""><i className="fa-brands fa-facebook-f"></i></NavLink>
                <NavLink className="share-socialmedia-links" to=""><i className="fa-brands fa-instagram"></i></NavLink>
                <NavLink className="share-socialmedia-links" to=""><i className="fa-brands fa-twitter"></i></NavLink>
                <NavLink className="share-socialmedia-links" to=""><i className="fa-brands fa-google"></i></NavLink>
                <NavLink className="share-socialmedia-links" to=""><i className="fa-brands fa-linkedin"></i></NavLink>
            </div>
        </div>
    </div>
  )
}

export default ProductDetail