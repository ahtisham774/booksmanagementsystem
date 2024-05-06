import Banner from "../components/banner"
import BestSellerBooks from "./BestSellerBooks"
import FavBooks from "./FavBooks"
import OtherBooks from "./OtherBooks"
import PromoBanner from "./PromoBanner"
import Review from "./Review"


function Home() {
    return (
        <>
            <Banner />
            <BestSellerBooks />
            <FavBooks />
            <PromoBanner />
            <OtherBooks />
            <Review />
        </>

    )
}

export default Home