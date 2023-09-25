'user-server'
import { cookies } from "next/headers"
import { revalidatePath } from "next/cache"

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
    revalidatePath("/cadastro")
    return{ok: "Cadastro realizado com sucesso"}
}
export async function getCadastro(){
    await new Promise(r => setTimeout(r, 5000));
    const response = await fetch(url,  { next: { revalidate: 3600 } })
    return response.json()
    const token = cookies().get("meujulius_token")
    const options = {
        headers: {
            "Authorization": `Bearer ${token.value}`
        }
    }
    const response = await fetch(url, options)

    if (response.status !== 200) throw new Error("Não pode carregar os dados")

    return await response.json()
}

export async function destroy(id){
    const deleteUrl = url + "/" + id

    const options = {
        method: "DELETE"
    }

    const response = await fetch(deleteUrl, options)

    if (!response.ok){
        const json = await response.json()
        return {error: "Falha ao apagar conta. Verifique se deletou o cadastro corretamente "}
    }

    revalidatePath("/cadastro")


}

export async function getConta(id){
    const getUrl = url + "/" + id
    const response = await fetch(getUrl)

    const json = await response.json()

    if (!response.ok){
        return {error: "Falha ao carregar usuário cadastrado. " + json.message}
    }

    return json
}

export async function update(cadastro){
    const updateUrl = url + "/" + conta.id

    const options = {
        method: "PUT",
        body: JSON.stringify(cadastro) ,
        headers: {
            "Content-Type": "application/json"
        }
    }

    const response = await fetch(updateUrl, options)

    if (!response.ok){
        const json = await response.json()
        return {error: "Erro ao atualizar o cadastro do usuário" + json.message }
    }

    revalidatePath("/cadastro")

    return {ok: "Cadastro alterada com sucesso"}
}