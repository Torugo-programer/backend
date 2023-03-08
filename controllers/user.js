const arrUsers = [
    {
        name: 'torugo',
        age: 17,
        __id: 0
    }, 
    {
        name: 'Vitor',
        age: 18,
        __id: 1
    }  
]

export const fetchUsers = async (req, res) => {
    try{
        const users = arrUsers
        res.status(200).send({message: users})
    } catch (error) {
        res.status(400).send({message: error.message})
    }
}

export const createUser = async (req, res) => {
    try {
        const id = arrUsers.length //comprimento (para saber quantos espaços)
        const {name, age} = req.body
        const user = {name, age, __id: id}
        arrUsers.push(user)
        res.status(200).send({message: user})
    } catch (error) {
        res.status(204).send({message: error.message})
    }

}

export const getUserById = (req, res)=>{
    try {
        const {id} = req.params //os parametros dados na URL da requisição HTTP.
        let existingUser

        arrUsers.forEach(element => {   
            if (element.__id === Number(id)) {  
                existingUser = element
            }
        })

        if (existingUser) {
            res.status(202).send({user: existingUser, message: 'usuario encontrado'})
        }else{
            res.status(404).send({message: 'usuario nao encontrado'})    
        }
    } catch (error) {
        res.status(406).send({message: error.message})
    }
}