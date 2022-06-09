import React from 'react'
import Layout from '../../components/Layout'
import styled from 'styled-components'

const Link =  styled.a`
color: #030303;
`

const Div = styled.div`
  text-align: center;
  width: 25vw;
  height: 50vh;
  box-shadow: 1px 1px 10px rgba(220,220,220,0.5);
  background-color: #f5f5f5;
  padding: 10% 5%;
  margin: 10%;
`

const Grid = styled.section`
  display: flex;
  justify-content: space-evenly;
  /* flex-direction: row; */
`

export default function index() {
  return (
    <Layout>
      <Grid>
        <Div>

            <Link href='/survey'>Workflow Template</Link>
        </Div>
        <Div>
            <Link href='/survey'>DevSecops Assessment</Link>
        </Div>
      </Grid>
    </Layout>
  )
}
