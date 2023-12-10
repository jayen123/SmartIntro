import SingleProductDetails from "@/app/components/singleProductDetails";

export const getCard = async (id) => {
    let data = await fetch(`http://localhost:3000/api/cards/${id}`);
    data = await data.json();
    return data.result;
}

export default async function ProductDetails ({params}) {
    const card = await getCard(params.cardid);
    return(
        <>
            <section className="py-[50px]">
                <div className="container">
                    <SingleProductDetails 
                    bg={card.image}
                    title={card.name}
                    category={card.quality}
                    discount={card.currentPrice}
                    daily={card.allTimePrice}
                    />
                </div>
            </section>
        </>
    )
}