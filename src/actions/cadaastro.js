'user-server'

export async function creat(formData){
    const url = "http://localhost:8080/api/cadastrar"


    console.log(formData)
    console.log(Object.fromEntries(formData))
    const options = {
        
        method:"POST",
        body: JSON.stringify(Object.fromEntries(formData)) ,
        headers: {
            "Content-Type": "application/json"

        }
    }
    const resp = await fetch(url, options)
    if (resp.status !==201){
        const mensagens = json.reduce((str, erro) => str += ". " + erro.message, "")
        return {erro: "Erro ao cadastrar " + mensagens}

        
    }
    revalidatePath("/contas")
    return{ok: "Conta cadastra com sucesso"}
}