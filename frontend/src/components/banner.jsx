import BannerCard from "../home/bannercard"

function Banner() {
    return (
        <div className="px-4 lg:px-24 bg-teal-100 flex items-center">
            <div className="flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40">
                <div className="space-y-8 md:w-1/2 h-full">
                    <h2 className="text-5xl font-bold leading-snug text-black">Buy and Sell Your Books<span className="text-blue-700"> for the Best Prices</span></h2>
                    <p className="md:w-4/5">Minim enim culpa incididunt incididunt non deserunt in proident proident laborum adipisicing fugiat incididunt laboris. Nostrud tempor laborum cillum enim. Fugiat elit est non irure ea duis elit amet veniam eiusmod. Commodo veniam aute do ullamco proident do qui commodo. Veniam nulla ex sunt velit veniam incididunt occaecat minim nisi eiusmod duis nisi.</p>
                    {/* <div>
                        <input type="search" name="search" id="search" placeholder="Search a book" className="py-2 px-2 rounded-s-sm outline-none" ></input>
                        <button className="bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200">Search</button>
                    </div> */}
                </div>
                <div>
                    <BannerCard />
                </div>
            </div>
        </div>
    )
}

export default Banner