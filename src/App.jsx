// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import Hello from './01/Hello'
// import MyClock from './02/MyClock'
import { RiHomeHeartFill } from 'react-icons/ri'
// import MyDiv1 from './03/MyDiv1'
import MyList from './04/MyList'


function App() {
  // const [count, setCount] = useState(0)

  return (
      <div className='flex flex-col w-full h-screen mx-auto'>
        <header className='flex justify-between items-center text-xl font-bold h-20 p-10 bg-slate-50'>
        <p>리액트 기초</p>
        <p><RiHomeHeartFill /></p>
        </header>
        <main className='grow w-full flex justify-center items-center overflow-y-auto'>
          {/* <MyDiv1 /> */}
          <MyList />
        </main>
        <footer className='flex justify-center items-center h-20 bg-black text-slate-100'>
          email: wlgusehd3@naver.com
        </footer>
      </div>
  )
}

export default App
