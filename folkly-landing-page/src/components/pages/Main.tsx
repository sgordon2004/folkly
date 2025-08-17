import { Outlet } from 'react-router-dom'
import Header from '../Header'


const Main = () => {
  return (
    <div className='w-full h-screen flex flex-col'>
        <Header />
        <div className='pt-16 h-full w-full overflow-y-auto'>
          <Outlet />
        </div>
        
    </div>
  )
}

export default Main
