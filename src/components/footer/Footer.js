import React from "react";
import './footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <ul>
                        <li>Home</li>
                        <li>Product</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                    <ul>
                        <li>NIKE</li>
                        <li>PUMA</li>
                        <li>ADIDAS</li>
                        <li>BALANCIAGA</li>
                    </ul>
                    <ul>
                        <li>item 1</li>
                        <li>item 2</li>
                        <li>item 3</li>
                        <li>item 4</li>
                    </ul>
                    <ul>
                        <li>facebook</li>
                        <li>twitter</li>
                        <li>linkedin</li>
                        <li>youtube</li>
                    </ul>
                </div>
                <p>copyrights - Prashik Wasnik</p>
            </div>
        </footer>
    )
}

export default Footer;