import React from 'react';
import showcaseL from '../../public/img/showcase/showcase-l.jpg';
import showcaseR from '../../public/img/showcase/showcase-r.jpg';

import './showcase.css';

function Showcase() {
    return (
        <section className='showcase-blog'>
            <div className="container">
                <div className='row'>
                    <div className='col-md-6'>
                        <img src={showcaseL} alt="showcase" />
                        <div className='body-content'>
                            <div className='content'>
                                <h1>Brand name</h1>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                <button type="submit">FIND NEW</button>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <img src={showcaseR} alt="showcase" />
                        <div className='body-content'>
                            <div className='content'>
                                <h1>Brand name</h1>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                <button type="submit">FIND NEW</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Showcase;