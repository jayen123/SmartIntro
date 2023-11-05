export default function HeroFeature({icon,heading,text}) {
  return (
    <>
        <div className="flex items-center bg-lblack rounded-md aspect-square hover:bg-gradient-to-r from-lred hover:bg-lpink duration-1000">
            <div className="flex flex-col items-center gap-5 font-mont text-white text-center p-3">
                <div className="text-2xl md:text-6xl">
                     {icon}
                </div>
                <div>
                    <h6 className="text-base md:text-[22px] font-medium tracking-widest uppercase">{heading}</h6>
                    <p className="text-sm md:text-lg">{text}</p>
                </div>
            </div>
        </div>
    </>
  )
}
