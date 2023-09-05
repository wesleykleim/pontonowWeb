'user-server'

export async function creat(formData){
    const url = "http://localhost:8080/api/cadastrar"

    const options = {
        
        method:"POST",
        body: JSON.stringify(Object.fromEntries(formData)) ,
        headers: {
            "Content-Type": "application/json"

        }
    }
    fetch(url, options)
}