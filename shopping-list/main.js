//Delete
var removeItemButtons = document.getElementsByClassName('delete')
for(var i = 0; i < removeItemButtons.length; i++){
    var button = removeItemButtons[i]
    button.addEventListener('click',function(event){
        var buttonClicked = event.target
        buttonClicked.parentElement.remove()  
         
    })
}
//Like
var likeButtons = document.getElementsByClassName('like')
for(var i = 0; i < likeButtons.length; i++){
    var like = likeButtons[i]
    like.addEventListener('click',function(event){
        var likeClicked= event.target;
      
            likeClicked.style.color='red'
    })
}
// Add/Minus
function add(id){
    document.getElementById(id).value++;
}
function minus(id){
    if (document.getElementById(id).value>1){
        document.getElementById(id).value--;
    }
}
var inputs = document.getElementsByClassName('Quant')
for(var i = 0; i < inputs.length; i++)
    inputs[i].id=i;
    
    var plusButtons = document.getElementsByClassName('plus-btn')
    for(var i = 0; i < plusButtons.length; i++){
        plusButtons[i].setAttribute('onClick','add('+i+')')
        updatePrice ()
        
    }
    var minusButtons = document.getElementsByClassName('minus-btn')
    for(var i = 0; i < minusButtons.length; i++){
        minusButtons[i].setAttribute('onClick','minus('+i+')')
        updatePrice ()
         
    }
    
    function updatePrice(){
        var cartItems = document.getElementsByClassName('items')[0]
        var cartItem = cartItems.getElementsByClassName('Item')
        var total = 0
        for(var i = 0; i < cartItem.length; i++){
            var Item = cartItem[i]
            var priceElemnt =Item.getElementsByClassName('price')[0]
            var quantityElement =Item.getElementsByClassName('Quant')[0]
            var price = priceElemnt.innerText
            var quantity = quantityElement.value;
            total= total + (price*quantity) 
    }
    document.getElementsByClassName('finalPrice')[0].innerText = total
    }



    
    

    
       
       

    



    
