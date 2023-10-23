
import './globals.css'
import '../styles/global.css'
import '../styles/responsive.css'
import Mobile from '../components/mobile'
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
        <link rel="icon" href="/favicon.png" sizes="any" />
      </head>
      <body>
        <Mobile />
        {/* <Nav /> */}
        {children}
        <Footer />
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

      </body>
    </html>
  )
}
