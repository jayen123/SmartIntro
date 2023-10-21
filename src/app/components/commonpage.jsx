const CommonHero = (props) => {
    return(
        <>
            {/* Hero Section */}
            <section className="bg-dblack py-[50px] md:py-[100px]">
                <div className="container">
                    <div className="row">
                        <h1 className="bg-gradient-to-b from-lred bg-lpink bg-clip-text text-transparent text-2xl font-bold text-center uppercase md:text-[40px]">{props.heading}</h1>
                    </div>
                </div>
            </section>
        </>
    )
}
export default CommonHero;