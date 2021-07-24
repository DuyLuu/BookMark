class Todo{ //class này bản chất là một type.
    name: string
    id: string

    constructor(name: string){
        this.name = name
        this.id = name + (new Date()).toISOString()
    }
}

export default Todo