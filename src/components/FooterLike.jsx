import { FooterSlider } from "./FooterSlider"

export const FooterLike = () => {
    return (
        <div className="w-full bg-white mx-auto flex flex-col gap-5 pt-5 pb-16 mt-14">
            <div className=" w-[1400px] mx-auto slider-container">
                <h3 className=" text-xl font-medium pb-5 mt-10">You may also like</h3>
                <FooterSlider />
            </div >

            <div className=" w-[1400px] mx-auto slider-container">
                <h3 className=" text-xl font-medium pb-5 mt-10">Trending Coins</h3>
                <FooterSlider />
            </div >

        </div>
    )
}
