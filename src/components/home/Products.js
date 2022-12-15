import React, {useState} from "react";
import prod1 from '../../public/img/products/prod-1.png';
import { BsArrowRight } from 'react-icons/bs'
import ProductList from "../ProductList";

import './products.css';

function Products() {

    return (
        <section className="products">
            <div className="product-banner">
                <div className="product-head-banner">
                    <h1>our products</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                </div>
            </div>
            <div className="container">
                <div className="p-grid">
                    { ProductList.map((index, key) => {
                        return (
                            <div className="grid-col" key={key}>
                                <div className="card">
                                    <div className="background" style={{backgroundColor: index.backgroundColor}}></div>
                                    <img src={index.image} alt="puma-shoe" className="card-product-image" />
                                    <span className="shadow"></span>
                                    <div className="card-body">
                                        <h3>{index.name}</h3>
                                        <h2>{index.price}</h2>
                                        <p>{index.miniDesc}</p>
                                        <h4>View Details <span><BsArrowRight /></span></h4>
                                    </div>
                                    <div className="dicsount-tag">{index.discount}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="more-products">
                    <button type="submit">more products</button>
                </div>
            </div>
        </section>
    )
}

export default Products;