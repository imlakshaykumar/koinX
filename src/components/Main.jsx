import { GetStarted } from "./GetStarted"

export const Main = () => {
    return (
        <div className="flex gap-5 mt-6 mx-10">
            <div className="border-2 border-black w-2/3">

                <p className="p-10">1</p>
            </div>
            <div className="w-1/3">
                <GetStarted />
            </div>
        </div>
    )
}
