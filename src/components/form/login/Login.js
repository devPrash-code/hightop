import React from 'react';

import './login.css';

function Login() {
    return (
        <section className='login-page'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <h1>New User,</h1>
                        <p>Register yourself for ordering best quality shoes</p>
                        <h5>Register Now!</h5>
                    </div>
                    <div className='col-md-6'>
                        <form>
                            <div className='input-field'>
                                <input type='text' />
                                <label>email</label>
                            </div>
                            <div className='input-field'>
                                <input type='password' />
                                <label>password</label>
                            </div>
                            <div className='input-field'>
                                <input type='password' />
                                <label>confirm password</label>
                            </div>
                            <button type="submit">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login;