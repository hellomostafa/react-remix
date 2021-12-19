import {Outlet, LiveReload} from 'remix'

export default function App(){
  return(
    <html lang='en'>
      <head>
        <title>Amir Mostafa</title>
      </head>
      <body>
        Hello
        <Outlet/>
        {process.env.NODE_ENV === 'development' ?
        <LiveReload/> : null  
      }
      </body>
      
    </html>
  )
}