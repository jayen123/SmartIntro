import SingleCard from "./SingleCard";
export const getCards = async () => {
    let data = await fetch("http://localhost:3000/api/cards");
    data = await data.json();
    return data;
} 


export default async function Cards() {
      const cards = await getCards();
  return (
    <>
        <section className="bg-lblack py-[50px]">
            <div className="container">
                <div className="grid grid-cols-1 gap-x-5 gap-y-10 px-[10px] md:px-0 md:grid-cols-3 lg:grid-cols-4">
                    {
                      cards.map(({id,image}) => (
                        <div>
                            <SingleCard 
                            key={id}
                            url={`card/${id}`}
                            bg={image}
                            />
                        </div>
                      ))
                    }
                </div>
            </div>
        </section>
    </>
  )
}
