import { TeamMember } from "./TeamMember"

export const Team = () => {
    return (
        <>
            <div className="flex flex-col gap-5 p-4 bg-white rounded-lg mt-5 ">
                <h3 className="mb-3">Team</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, vitae! Impedit aperiam fuga nam veritatis quod exercitationem repellendus eaque, quae accusantium consequatur nobis sed quisquam voluptates? Tempore placeat est reiciendis.</p>
                <TeamMember />
                <TeamMember />
                <TeamMember />
            </div>
        </>
    )
}
