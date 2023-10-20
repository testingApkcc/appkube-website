'use client'
import React, { useState, useEffect } from 'react';

const contact = () => {
    return (
        <>
            <section>


                <form action="" className='df fld gp jc-c formwidth'>
                    <div className='df gp form-field'>
                        <div className='df fld w-fluid '>
                            <label htmlFor="firstname">First Name</label>
                            <input type="text" id='firstname' name='firstname' placeholder='First Name' />
                        </div>
                        <div className='df fld w-fluid '>
                            <label htmlFor="lastname">Last Name</label>
                            <input type="text" name='lastname' id='lastname' placeholder='Last Name' />
                        </div>
                    </div>
                    <div className='form-field df fld'>
                        <label htmlFor="email">Email</label>
                        <input type="email" id='email' name='email' placeholder='Enter Email' />
                    </div>
                    <div className='form-field df fld'>
                        <label htmlFor="phone">Phone Number</label>
                        <input type="tel" id='phone' name='phone' placeholder='Enter Phone Number' />
                    </div>
                    <div className='form-field df fld'>
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" cols="30" rows="10" placeholder='Message'></textarea>
                    </div>
                    <div className='form-field df ai-c'>
                        <input type="checkbox" name="" id="" />
                        <small>You agree to our friendly <u> privacy policy</u></small>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary">Send Message</button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default contact