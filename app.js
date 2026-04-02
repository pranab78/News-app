

async function getNews(){
    let response = await fetch( "https://newsdata.io/api/1/latest?apikey=pub_1e3be47d830e4111bc512cfaaf431765&q=nepal prime minister")

    if(!response.ok){
        console.log("API request failed")
        return;
    }
        
        let data = await response.json();

        console.log(data);
        data.results.forEach(article => {
            
            let newsDiv = document.createElement("div");
            let title   = document.createElement("h2");
            let desc    = document.createElement("p");
            let link    = document.createElement("a");
            let img     = document.createElement("img");
        
            title.textContent = article.title;
            desc.textContent  = article.description;
            link.href = article.link;
            link.textContent = "Read more";
            link.target = "_blank";
            img.src = article.image_url;
            img.alt = article.title;
            img.style.width = "300px";

            newsDiv.appendChild(title);
            newsDiv.appendChild(img);
            newsDiv.appendChild(desc);
            newsDiv.appendChild(link);

            let container = document.getElementById("news-container")
            container.appendChild(newsDiv);
            
        });
}



getNews();