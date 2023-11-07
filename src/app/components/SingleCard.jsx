import Link from 'next/link'
export default function SingleCard({bg,quality,name,currentPrice,allTimePrice}) {

  return (
    <>
      <div class="group flex flex-col gap-3">
          <div className={'bg-[url(\''+ bg +'\')] bg-no-repeat bg-cover bg-center aspect-square'}>
              <div class="flex justify-center items-center p-1 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 w-full h-full bg-lblack/30 transition-all duration-300 ease-in-out">
                  <Link class="btn-primary" href="#">VIEW</Link>
              </div>
          </div>
          <div class="flex flex-col items-center text-white">
              <span class="text-lred text-xs font-bold">{quality}</span>
              <h5 class="text-2xl">{name}</h5>
              <span className='flex items-center gap-1'>
                <span class="text-[22px] font-medium">{currentPrice}</span>
                <span class="text-dgray line-through">{allTimePrice}</span>
              </span>
          </div>
      </div>
    </>
  )
}
