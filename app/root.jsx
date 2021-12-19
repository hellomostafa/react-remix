import {Outlet, LiveReload, Link} from 'remix'

export default function App(){
  return(
    <Document>
      <Outlet/>
    </Document>
  )
}

function Document({children, title}){
  return(
    <html lang='en'>
      <head>
        <title>{title ? title : 'Remix by Mostafa'}</title>
      </head>
      <body>
        
        <Layout>

        <Outlet/>
        </Layout>

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
    </>
  )
}