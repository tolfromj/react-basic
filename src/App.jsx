// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import Hello from './01/Hello'
// import MyClock from './02/MyClock'
import {RiHomeHeartFill} from 'react-icons/ri'
// import MyDiv1 from './03/MyDiv1'
// import MyList from './04/MyList'
// import Lotto from './05/Lotto'
// import Counter from './Counter'
// import Traffic from './06/Traffic'
// import MyRef from './07/MyRef'
// import MyRefAdd from './07/MyRefAdd'
// import Gallery from './08/Gallery'
import RouteMain from './09/RouteMain'

function App() {
  // const [count, setCount] = useState(0)

  return (
      <div className='flex flex-col w-full min-h-screen mx-auto'>
        <header className='flex justify-between items-center text-xl font-bold h-20 p-10 bg-slate-50'>
        <p>리액트 기초</p>
        <p><RiHomeHeartFill /></p>
        </header>
        <main className='grow w-full flex justify-center items-start overflow-y-auto'>
          {/* <MyDiv1 /> */}
          {/* <MyList /> */}
          {/* <Lotto /> */}
          {/* <MyClock /> */}
          {/* <Counter /> */}
          {/* <Traffic /> */}
          {/* <MyRef /> */}
          {/* <MyRefAdd /> */}
          {/* <Gallery /> */}
          <RouteMain />
        </main>
        <footer className='flex justify-center items-center h-20 bg-black text-slate-100'>
          email: wlgusehd3@naver.com
        </footer>
      </div>
  )
}

export default App
