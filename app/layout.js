
import './globals.css'
import '../styles/global.css'
import '../styles/responsive.css'
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Appkube',
  description: 'Appkube',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/jpg" href="favicon.jpg" />
        {/* <link rel="icon" href="/favicon.png" sizes="any" /> */}
      </head>
      <body>
       <Nav/>
        {children}
         <Footer/>
        </body>
    </html>
  )
}
