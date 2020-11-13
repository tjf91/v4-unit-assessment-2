



   const formBtn = document.getElementById('close-form')
   const form = document.getElementsByClassName('form')[0]

   function toggler(){
    formBtn.innerText==="X"? formBtn.innerText="+": formBtn.innerText="X"
    form.classList.toggle('hide')

}


   formBtn.addEventListener('click', toggler)


//STEP 2

const nameInput= form[0]
const emailInput= form[1]



emailList = []

function validateForm (){
    if(!nameInput.value && !emailInput.value){
     nameInput.style.border='2pxsolidred' 
     emailInput.style.border='2pxsolidred' 
       alert('enter both username and email') 
        
    }
    else if(!nameInput.value){
        nameInput.style.border='2pxsolidred' 
        alert('enter username') 
    }
    else if(!emailInput.value){
        emailInput.style.border='2pxsolidred' 
        alert('enter email') 
    }

    else{
        emailList.push({
            name:nameInput.value,
            email:emailInput.value
        })
        displayThankYou ()
    }
}


form.addEventListener('submit', function(e){
    e.preventDefault()    
    validateForm()
    console.log(emailList)
})


const formContainer = document.getElementsByClassName('form-container')[0]
console.log(formContainer)

//Step 3 - Thank You Message
function removeMessage(){
    setTimeout(function(){
        formContainer.remove()
    },3000)
}

function displayThankYou(){
    formContainer.innerText='Thank you for subscribing!'
    removeMessage()
}

// Step 4 - Removing Red Border
nameInput.addEventListener('change',function(){
    nameInput.style.border='none'
})

emailInput.addEventListener('change',function(){
    emailInput.style.border='none'
})

const cart = document.createElement('div')
const main = document.getElementsByTagName('main')[0] //If not working check here
console.log
let cartItems = 0
//Step 5 - Cart Items Counter
function addToCart(){
    if(cartItems===0){
        cartItems=1
        cart.setAttribute('class','cart-display')
        cart.innerText='Your Cart:1 items'
        main.appendChild(cart)
    }
    else{
        cartItems+=1
        cart.innerText=`Your Cart:${cartItems} items`

    }
}


