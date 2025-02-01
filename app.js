let getDiv = document.getElementById('show')

function searchNews() {
    let getInp = document.getElementById('inp')

    fetch(`https://newsapi.org/v2/everything?q=${getInp.value}&from=2025-01-01&sortBy=publishedAt&apiKey=c7e2ae91f23749758991d2692e467bc9`)
        .then((data) => {
            return data.json()
        })
        .then(data => {
            data.articles.map((data) => {
                getDiv.innerHTML += `<div class='abc'> 
            
            <img width='100%' src=${data.urlToImage} />
            <p> ${data.title} </p>
            <p> ${data.description} </p>
            <p> ${data.author} </p>
            <p> ${data.publishedAt} </p>
         </div>`
            })
        })
}