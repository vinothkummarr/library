
const conn = document.getElementById('container')
const count = []
let  i = 0
const total = document.createElement('p')
function submitted(){
    const namee = document.getElementById('name').value
    const author = document.getElementById('author').value
    const status = document.getElementById("status").value
    const book1 = new Books(namee,author,status)   
    book1.details()
    count.push(book1)
    i++
    console.log(i)
    
    total.textContent = i
    conn.appendChild(total)
}

function Books (title, author,status){
    
    this.title = title;
    this.author =author;
    this.status = status ;
    this.details = function(){
        create(this.title,this.author,this.status)                
    }
}

function create(names,author,status){
    const container =document.getElementById("data")
    const row = document.createElement("tr")
    const td =document.createElement("td")
    td.textContent = names
    row.appendChild(td)
    const td2 = document.createElement("td")
    td2.textContent = author
    row.appendChild(td2)
    const td3 = document.createElement("td")
    td3.id ='sts'
    td3.textContent = status
    row.appendChild(td3)
    const del_btn = document.createElement("button")
    del_btn.id ="del_button"
    del_btn.innerHTML ='Delete'
    row.appendChild(del_btn)  
    const sts_btn = document.createElement("button")
    sts_btn.id = "sts_button"
    sts_btn.innerHTML = 'Status'
    row.appendChild(sts_btn)
    container.appendChild(row)
    
    del_btn.onclick = function (){
        deleteRow(row)
        i--
        total.textContent = i
        conn.appendChild(total)
    }
    
   sts_btn.onclick = function(){
    chngSts(row)
   }
}

function deleteRow(row){
    const index =count.findIndex(item => item.row ===  row)
    row.parentNode.removeChild(row);
    
    if (index !== -1){
        count.splice(index,1)
    }    
}

function chngSts(row) {
    const index =count.findIndex(item => item.row ===  row)
    chng = row.querySelector('#sts')
    if(chng.innerHTML == 'Read'){
        chng.textContent = "Not Read"
    } else if (chng.innerHTML == 'Not Read'){
        chng.textContent ="Read"
    }

    if (index !== -1){
        count.splice(index,1)
    } 
    
 
     
}
