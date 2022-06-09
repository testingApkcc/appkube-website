import React from 'react'
import Layout from '../../components/Layout'
import styled from 'styled-components'
import '../../css/resource.css'


export default function index() {
  return (
    <Layout>
      <section id='res-card-holder'>
        <div className='res-cards'>
            <a href='/survey'>Workflow Template</a>
        </div>
        <div  className='res-cards'>
            <a href='/survey'>DevSecops Assessment</a>
        </div>
      </section>
    </Layout>
  )
}
