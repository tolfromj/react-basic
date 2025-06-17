import RecoilMyDiv3 from "./RecoilMyDiv3"

export default function RecoilMyDiv2(probs) {
  return (
    <div className="flex flex-col p-5 m-10
                    w-3/4 h-3/4
                    justify-center items-center
                    bg-lime-700 text-white">
      <div className="flex w-full justify-start items-center">
        {`${probs.dn1} > ${probs.dn2}`}
      </div>
        
      <RecoilMyDiv3 d1={probs.dn1} d2={probs.dn2} d3={probs.dn3}/>
    </div>
  )
}
