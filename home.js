const productcontainers=[...document.querySelectorAll('.product-container')];
const nxtbtn=[...document.querySelectorAll('.nxt-btn')];
const prebtn=[...document.querySelectorAll('.pre-btn')];
productcontainers.forEach((item,i) => {
    let containerDimenstions = item.getBoundingClientRect();
    let containerWidth = containerDimenstions.width;
    nxtbtn[i].addEventListener('click',() => {
item.scrollLeft += containerWidth;
    })
    prebtn[i].addEventListener('click',() => {
item.scrollLeft -= containerWidth;
    })
})