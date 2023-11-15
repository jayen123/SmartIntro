
export default function ContactHeading({text,heading}) {
  return (
    <>
        <div className="font-mont font-bold text-center uppercase pb-[50px]">
            <p className="text-sm text-lred md:text-base">{text}</p>
            <h2 className="text-base md:text-3xl text-white">{heading}</h2>
        </div>
    </>
  )
}
