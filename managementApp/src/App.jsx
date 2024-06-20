import { useState } from "react";
import NewProject from "./components/NewProject";
import NoprojectSelected from "./components/NoProjectSelected";
import SideBar from "./components/SideBar";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectState,setProjectState]=useState({
    selectProjectId:undefined,
    projects:[],
    tasks:[]
  })
  function handleAddTask(text){
    setProjectState(prev=>{
      const Taskid=Math.random()
      const newTask={
        text:text,
        projectId:prev.selectProjectId,
        id:Taskid
    }
      return{
        ...prev,
        tasks:[newTask,...prev.tasks]
      }
    })
  }
function handleDeleteTask(id){
  setProjectState(prev=>{
    return{
      ...prev,
      tasks:prev.tasks.filter((task)=>task.id!==id)
    }
  })
}
  function handleAddProject(){
    setProjectState(prev=>{
      return{
        ...prev,
        selectProjectId:null
      }
    })
  }
  function handleSelectProject(id){
    setProjectState(prev=>{
      return{
        ...prev,
        selectProjectId:id
      }
    })
  }
  function handleProject(projectData){
    
    setProjectState(prev=>{
      const projectid=Math.random()
      const newProject={
      ...projectData,
      id:projectid
    }
      return{
        ...prev,
        selectProjectId:undefined,
        projects:[...prev.projects,newProject]
      }
    })
  }

  function handleCancel(){
    setProjectState(prev=>{
      return{
        ...prev,
        selectProjectId:undefined
      }
    })
  }
  function handleDelete(){
    setProjectState(prev=>{
      return{
        ...prev,
        selectProjectId:undefined,
        projects:prev.projects.filter((project)=>project.id!==prev.selectProjectId)
      }
    })
  }
 
  //console.log(projectState) 
  const slectProject=projectState.projects.find(project=>project.id===projectState.selectProjectId)
  let Contant=<SelectedProject project={slectProject} 
  onDelete={handleDelete} 
  onAddTask={handleAddTask}
  onDeletetask={handleDeleteTask}
  tasks={projectState.tasks}
  />
  if(projectState.selectProjectId===null){
    Contant=<NewProject onAdd={handleProject} onCancel={handleCancel}/>
  }else if(projectState.selectProjectId===undefined){
    Contant=<NoprojectSelected onStartAdd={handleAddProject}/>
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar onStartAdd={handleAddProject} 
      projects={projectState.projects} 
      onSelect={handleSelectProject}
      selectedId={projectState.selectProjectId}
      />
      {Contant}
    </main>
  );
}

export default App;
