'user-server'

export async function creat(formData){
    const url = "http://localhost:8080/api/cadastrar"

    console.log("formData")
    console.log(Object.fromEntries(formData))

    const options = {
        
        method:"POST",
        body: JSON.stringify() ,
        headers: {
            "Content-Type": "application/json"
            
        }
    }
}