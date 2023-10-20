'use client'
import React, { useState, useEffect } from 'react';

const contact = () => {
    return (
        <>
            <section>


                <form action="" className='df fld gp jc-c'>
                    <div className='df gp'>
                        <div className='df fld'>
                            <label htmlFor="">First Name</label>
                            <input type="text" placeholder='First Name' />
                        </div>
                        <div className='df fld'>
                            <label htmlFor="">Last Name</label>
                            <input type="text" placeholder='Last Name' />
                        </div>
                    </div>
                    <div className='form-field df fld'>
                        <label htmlFor="">Email</label>
                        <input type="email" placeholder='Enter Email' />
                    </div>
                    <div className='form-field df fld'>
                        <label htmlFor="">Phone Number</label>
                        <input type="tel" placeholder='Enter Phone Number' />
                    </div>
                    <div className='form-field df fld'>
                        <label htmlFor="">Message</label>
                        <textarea name="" id="" cols="30" rows="10" placeholder='Message'></textarea>
                    </div>
                    <div className='form-field df gp'>
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