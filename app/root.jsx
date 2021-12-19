import {Outlet, LiveReload, Link} from 'remix';
import globalStyleUrl from '~/styles/global.css'

export default function App(){
  return(
    <Document>
      <Layout>

        <Outlet/>
      </Layout>
    </Document>
  )
}

function Document({children, title}){
  return(
    <html lang='en'>
      <head>
        <link rel="stylesheet" href={globalStyleUrl} />
        <title>{title ? title : 'Remix by Mostafa'}</title>
      </head>
      <body>
        
        {children}

        {process.env.NODE_ENV === 'development' ?
        <LiveReload/> : null  }

      </body>
      
    </html>
  )
}


function Layout({children}){
  return(
    <>
     <nav className="navbar">
      <Link to="/" className="logo">
        Remix
      </Link>

      <ul>
        <li>
          <Link to="/post">Posts</Link>
        </li>
      </ul>
     </nav>

     <div className="container">
       {children}
     </div>
    </>
  )
}