class Todo{
    id:string;
    text:string;

    constructor(todoText:string){
        this.text=todoText;
        this.id=Date.now().toString() + Math.random
    }
}
export default Todo