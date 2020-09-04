function loadBusca() {   
    const xhr = new XMLHttpRequest();
    var tipo = document.getElementById('select1').value
    var info = document.getElementById('info').value
    xhr.open("GET", "https://www.googleapis.com/books/v1/volumes?q=" + tipo + ":" + info + "&key=AIzaSyAGawQ32sFI51J4_FF6z6plXo5lgcP207o")
    var section = document.getElementById("sec4")
    section.innerHTML = "<div id='load'>   <img src='https://i.pinimg.com/originals/25/ef/28/25ef280441ad6d3a5ccf89960b4e95eb.gif'>  </div>"
    
    
    
    xhr.onreadystatechange = function () {
        if (xhr.status == 200 && xhr.readyState == 4) {
            section.innerHTML = ""
            const infolivros = JSON.parse(xhr.responseText);
            for (let i = 0; i < 10; i++) {
                section.innerHTML  += " <div id='card'><br><br><br><p id='titlelivros'>" +infolivros.items[i].volumeInfo.title+"</p> <br> <p id='autor'>"+ infolivros.items[i].volumeInfo.authors+"</p> <br> <p id='editora'>"+infolivros.items[i].volumeInfo.publisher + "</p> <br>   <p id='datapu'>Data publicada: "+infolivros.items[i].volumeInfo.publishedDate + "</p>  <div id='divlink'><a target='_blank'   id='link' href='"+infolivros.items[i].volumeInfo.infoLink+"'> Detalhes</a></div>  </div>"
            }      
        }
    }

    xhr.send();
}


// infolivros.items[i].volumeInfo.title // nome do livro]
// infolivros.items[4].volumeInfo.authors // nome do autor
// infolivros.items[4].volumeInfo.description  // descrição 
// link de info livro infolivros.items[4].volumeInfo.infoLink
// editora   infolivros.items[4].volumeInfo.publisher
// data publicação infolivros.items[4].volumeInfo.publishedDate