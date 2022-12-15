import React from 'react';
import shoe from '../../public/img/products/prod-7.png';

import './product-desc.css';

function ProductDescription() {
    return (
        <section className='product-desc-section'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='product-image'>
                            <img src={shoe} alt='product' />
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <h3>PUMA Brand IO3</h3>
                        <h4>Shoe-Type</h4>
                        <h5>Infinite support, total control</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eleifend massa ut nisl ultrices, quis pharetra orci imperdiet</p>
                        <form>
                            <ul className='foot-size'>
                                <li className="radio"><input type="radio" name="footSize" /><span>7</span></li>
                                <li className="radio"><input type="radio" name="footSize" /><span>8</span></li>
                                <li className="radio"><input type="radio" name="footSize" /><span>9</span></li>
                                <li className="radio"><input type="radio" name="footSize" /><span>10</span></li>
                                <li className="radio"><input type="radio" name="footSize" /><span>11</span></li>
                            </ul>
                        </form>
                        <button type='submit'>Buy Now</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductDescription;