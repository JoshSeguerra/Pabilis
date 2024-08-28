 // DOM elements cache


const totalPriceDisplay = document.querySelector('.js-total-price');
const totalProductCountDisplay = document.querySelector('.total-product-count');
const listContainer = document.querySelector('.listed-item-value');
const listNameInput = document.getElementById('js-list-naming');
const returnHome = document.querySelector('.fa-house');
const user = document.querySelector('.js-user-data');
const inputEmail =  JSON.parse(localStorage.getItem('userData'));

 inputEmail.forEach((email)=>{
  console.log(email.emailValue)

 })




returnHome.addEventListener('click',()=>{
  window.location = '/html/main.html'
})

let list = JSON.parse(localStorage.getItem('dataList')) || []



renderListValue();


function renderListValue(){
  
  let listHTML = '';
  let totalPrice = 0;
  let totalProducts = list.length;
  

  list.forEach((listData,index)=> {
  
  
    let html = 
    `
    <div class="ul-list-quantity">
        <p class="js-quantity">${listData.quantity}${listData.unit}</p>
    </div>
    <div class="ul-list-name">
        <p class="js-name">${listData.productName}</p>
    </div>
    <div class="ul-list-place">
        <p class="js-place">${listData.place}</p>
    </div>
    <div class="ul-list-price">
        <p class="js-price">₱${listData.price}</p>
    </div>
    <div class="ul-list-actions">
        <div class="ul-list-actions">
            <input class="js-action-delete action-delete" type="submit" value="Delete">  
        </div> 
    </div>
    
    `
   
 
  
  listHTML += html
  totalPrice += parseFloat(listData.price)

 
  });

  


  totalPriceDisplay.innerHTML = totalPrice.toFixed(2)
  totalProductCountDisplay.textContent = totalProducts;
  listContainer.innerHTML = listHTML;

  document.querySelectorAll('.js-action-delete').forEach(deleteButton => {
    deleteButton.addEventListener('click',(event) => {
      let indexToDelete = event.target.dataset.index;
      list.splice(indexToDelete, 1);
      indexToDelete = event.target.dataset.index;

      
      renderListValue();
    })
  })
}



document.getElementById('add-btn').addEventListener('click', ()=>{
  
  getInputValue();
  

  
});
 
function getInputValue() {
  const quantity = document.querySelector('.js-quantity-input').value;
  const unit = document.getElementById('js-quantity-Select').value;
  const productName = document.querySelector('.js-product-name-input').value;
  const place = document.querySelector('.js-place-input').value;
  const price = document.querySelector('.js-product-price-input').value;

  if (quantity && unit && productName && price) {
      list.push({ quantity: quantity, unit: unit, productName: productName, place: place, price: price });
  

      document.querySelector('.js-quantity-input').value = '';
      document.querySelector('.js-product-name-input').value = '';
      document.querySelector('.js-place-input').value = '';
      document.querySelector('.js-product-price-input').value = '';
      renderListValue();
  } else {
      alert('Please fill in all fields.');
  }
}


  const listHider = document.querySelector('.save-list-btn').addEventListener('click', ()=>{
    document.querySelector('.list-naming-hider').style.display = "flex";
  })


  const saveListElem = document.querySelector('.js-list-submit-btn'). addEventListener('click', ()=>{
    
    if (listNameInput.value === '') {
      alert('Please input list name');
    } else {
      
      
      localStorage.setItem(listNameInput.value, JSON.stringify(list));
      list = [];

      localStorage.removeItem('dataList', JSON.stringify(list));
      listNameInput.value = '';

        document.querySelector('.list-naming-hider').style.display = 'none';


        renderListValue();

        alert('List saved!');
    }
    
  })
  document.querySelector('.fa-xmark').addEventListener('click',()=>{
    document.querySelector('.list-naming-hider').style.display = 'none';
  })
 
  /*----side nav content----*/
    
  const navSideBoxes = document.querySelectorAll('.nav-side-box');    
  const sectionContents = document.querySelectorAll('.section-content');


  navSideBoxes.forEach((navBox, index) => {
      navBox.addEventListener('click', () => {
          
          navSideBoxes.forEach(box => box.classList.remove('active'));
          sectionContents.forEach(content => content.classList.remove('active'));

      
          navBox.classList.add('active');
          sectionContents[index].classList.add('active');
          console.log(sectionContents[index])
      });
  });
    