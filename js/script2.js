var modal = document.getElementById("myModal");

const wrapper = document.getElementsByClassName("slider__item")
var arrItems = []
 for(let i=0;i<wrapper.length;i++){
    arrItems.push(document.getElementById("item"+(i+1)));
 }
 console.log(arrItems)

 for(let i=0;i<arrItems.length;i++){
    arrItems[i].onclick = function() {
        modal.style.display = "block";
        let title = arrItems[i].getElementsByClassName("slider_title")[0].outerText
        let imgSrc = arrItems[i].getElementsByClassName("slider__item_img")[0].getElementsByClassName("slider__item_img_logo")[0].src
        let description = arrItems[i].getElementsByClassName("slider_description")[0].outerText
        let price = arrItems[i].getElementsByClassName("price")[0].outerText
        var p = document.getElementById("modal_title").innerHTML = title
        var p2 = document.getElementById("modal_description").innerHTML = description
        var img = document.getElementById("modal_img").src = imgSrc
        var pr = document.getElementById("modal_price").innerHTML = price
    }
  
 }

// Get the button that opens the modal

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 



// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}



// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}