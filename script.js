const Url = 'https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72'

fetch (url)
.then (response => response.json())
.then (data => {

    let elementos = document.getElementById ('cards');
    let i = 0

    for (let i = 0; i <24; i++){ 
        elementos.innerHTML = elementos.innerHTML + data[i].name;
    }
}
    
    )

