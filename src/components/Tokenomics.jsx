import { DonutChart } from "./DonutChart"

export const Tokenomics = () => {
    return (
        <div className="flex flex-col gap-5 p-4 bg-white rounded-lg mt-5 pb-4">
            <h3 className="font-bold text-xl mb-2">Tokenomics</h3>
            <div>
                <h3 className="font-bold">Initial Distribution</h3>
                <DonutChart />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo ipsa commodi, error assumenda iste velit nesciunt. Explicabo sed, similique, voluptas repellat quos cum adipisci doloribus eius voluptatibus quasi fugit quam Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic tempore natus, ullam quasi architecto suscipit excepturi, eius, est praesentium cum magni assumenda fugiat quisquam minima itaque amet nemo quam ipsam? </p>
            </div>
        </div>
    )
}
