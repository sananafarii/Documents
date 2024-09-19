var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');


//Form submit event
form.addEventListener('submit', addItem);


//Delete event 
itemList.addEventListener('click', removeItem)

//filter event
filter.addEventListener('keyup', filterItems)



//Add items 
function addItem(e){
    e.preventDefault();


//Get input value
var newItem = document.getElementById('item').value;

//create new li element
var li = document.createElement('li');

//Add className

li.className  = 'list-group-item';

//Add text node with input value
li.appendChild(document.createTextNode(newItem));

//create del button element
var deleteBtn = document.createElement('button');

//add classes to del button 
deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

//Append text node 
deleteBtn.appendChild(document.createTextNode('X'));

//append bitton to li 
li.appendChild(deleteBtn);

itemList.appendChild(li);
}

//remove item 
function removeItem(e){
 if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
        var li = e.target.parentElement;
        itemList.removeChild(li);
  }
 }
}

//filter Items

function filterItems(e){
    //covert text to lowercase
    var text = e.target.value.toLowerCase();
    //Get lis
    var items = itemList.getElementsByTagName('li');

    //convert to an array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    })
}