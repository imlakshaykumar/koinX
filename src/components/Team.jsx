import { TeamMember } from "./TeamMember"

export const Team = () => {
    return (
        <>
            <div className="flex flex-col gap-5 p-5 bg-white rounded-lg mt-5 pb-8">
                <h3 className="mb-1 text-xl font-bold">Team</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, vitae! Impedit aperiam fuga nam veritatis quod exercitationem repellendus eaque, quae accusantium consequatur nobis sed quisquam voluptates? Tempore placeat est reiciendis.</p>
                <TeamMember />
                <TeamMember />
                <TeamMember />
            </div>
        </>
    )
}
