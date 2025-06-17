import { Link } from "react-router-dom"

export default function RouterHome() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold">
        RouteHome
      </h1>
      <div className="w-1/2 grid grid-col m-10">
        <div className="w-full flex flex-col justify-start items-center
                        text-xl m-2 p-2">
          <h2>
            page1 값전달
          </h2>
          <ul>
            <li><Link to='/p1/🍎'>사과🍎</Link></li>
            <li><Link to='/p1/🍌'>바나나🍌</Link></li>
            <li><Link to='/p1/🥕'>당근🥕</Link></li>
          </ul>
        </div>
      </div>
      <div className="w-1/2 grid grid-col m-10">
        <div className="w-full flex flex-col justify-start items-center
                        text-xl m-2 p-2">
          <h2>
            page2 값전달
          </h2>
          <ul>
            {/* <li><Link to='/p2?item=🍎'>사과🍎</Link></li>
            <li><Link to='/p2?item=🍌'>바나나🍌</Link></li>
            <li><Link to='/p2?item=🥕'>당근🥕</Link></li> */}

            <li><Link to='/p2?item1=🍎&item2=🥕&item3=🍌'>사과🍎,당근🥕,바나나🍌</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
