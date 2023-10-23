'use client'
import React, { useState, useEffect } from 'react';
import { MdCall, MdEmail } from "react-icons/md"

const contact = () => {
    return (
        <>
            <section className=''>
                <h1 className='title'>Get In Touch</h1>
                <p className='df'>
                    <MdEmail className='icon-md' />info@synectiks.com <MdCall className='icon-md' />6 09 608 0388 X 1
                </p>
                <h4 className='form-h4'>
                    Get in Touch to See How We Can Help Achieve Your IT Goals
                </h4>
                <form style={{ margin: '20px 10px' }} action="/thank" name='contact' method='POST' form='gtform' id='gtform' className='df fld gp jc-c formwidth maddy' data-netlify='true' >
                    <input type="hidden" name='form-name' value='contact' />
                    <div className='df gp form-field'>
                        <div className='df fld w-fluid '>
                            <label htmlFor="firstname" className='text-neutral-400'>First Name</label>
                            <input type="text" id='firstname' name='firstname' placeholder='First Name' className='inpt' />
                        </div>
                        <div className='df fld w-fluid '>
                            <label htmlFor="lastname" className='text-neutral-400'>Last Name</label>
                            <input type="text" name='lastname' id='lastname' placeholder='Last Name' className='inpt' />
                        </div>
                    </div>
                    <div className='form-field df fld'>
                        <label htmlFor="email" className='text-neutral-400'>Email</label>
                        <input type="email" id='email' name='email' placeholder='Enter Email' className='inpt' />
                    </div>
                    <div className='form-field df fld'>
                        <label htmlFor="phone" className='text-neutral-400'>Phone Number</label>
                        <input type="tel" id='phone' name='phone' placeholder='Enter Phone Number' className='inpt' />
                    </div>
                    <div className='form-field df fld'>
                        <label htmlFor="message" className='text-neutral-400'>Message</label>
                        <textarea name="message" id="message" cols="30" rows="10" placeholder='Message' className='inpt'></textarea>
                    </div>
                    <div className='form-field df ai-c'>
                        <input type="checkbox" name="chk" id="chk" />
                        <small className='prvcy'>You agree to our friendly <u> privacy policy</u></small>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary">Send Message</button>
                    </div>
                </form>
            </section>
            <script
                dangerouslySetInnerHTML={{
                    __html: `var vvfc_BaseURL = (("https:" == document.location.protocol) ? "https://forms.id-visitors.com/FrontEndWeb/" : "http://forms.id-visitors.com/FrontEndWeb/");
                var vvfc_ServiceURL = vvfc_BaseURL + 'ProcessFormCapture.aspx';
                var vvfc_ScriptURL = vvfc_BaseURL + 'Scripts/vvfcscript.js';
                var trackedForms = ['gtform'];
                var options = {accountId: 'q00IB13hyn', serviceURL: vvfc_ServiceURL, pollInterval: 5000,
                forms: [{id: 'gtform', ignoreFields: ['__VIEWSTATE', '__VIEWSTATEGENERATOR', '__EVENTVALIDATION'], accountFormId: '653266092f243620501980e8' } ]};
                (function (src) {
var vvscript = document.createElement('script');
                vvscript.type = 'text/javascript';
                vvscript.async = true; vvscript.src = src;
                var scriptElements = document.getElementsByTagName('script');
                var lastScriptElement = scriptElements[scriptElements.length - 1];
                lastScriptElement.parentNode.insertBefore(vvscript, lastScriptElement.nextSibling);
})(vvfc_ScriptURL);`
                }}
            />

        </>
    )
}

export default contact