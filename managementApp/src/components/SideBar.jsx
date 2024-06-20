import Button from "./Button"
export default function SideBar({ onStartAdd, projects, onSelect, selectedId }) {
    return (<aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
        <h2 className="mb-8 font-bold upppercase md:text-xl text-stone-200">Your project</h2>
        <div>
            <Button onClick={onStartAdd}>+ Add task</Button>
        </div>
        <ul className="mt-8">
            {projects.map(project => {
                let cssClasses="w-full text-left px-2 py-1 rounded-msm my-1 hover:text-stone-200 hover:bg-stone-800"
                if(project.id===selectedId){
                    cssClasses+=" bg-stone-800 text-stone-200"
                }else{
                    cssClasses+=" text-stone-400"
                }
                return (
                <li key={project.id}>
                    <button 
                    className={cssClasses}
                    onClick={()=>onSelect(project.id)}>
                        {project.title}
                    </button>
                </li>)
            })}
        </ul>
    </aside>)
}