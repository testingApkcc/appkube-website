'use client'
import React, { useState, useEffect } from 'react';

const contact = () => {
    return (
        <>
            <form action="" className='df fld gp jc-c ai-c'>
                <div className='df'>
                    <div >
                        <label htmlFor="">First Name</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Last Name</label>
                        <input type="text" />
                    </div>
                </div>
                <div className='form-field'>
                    <label htmlFor="">Email</label>
                    <input type="email" />
                </div>
                <div className='form-field'>
                    <label htmlFor="">Phone Number</label>
                    <input type="tel" />
                </div>
                <div className='form-field'>
                    <label htmlFor="">Message</label>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
                <div className='form-field'>
                    <input type="checkbox" name="" id="" />
                    <small>You agree to our friendly <u> privacy policy</u></small>
                </div>
                <button type="submit" class="btn btn-primary">Send Message</button>
            </form>
        </>
    )
}

export default contact