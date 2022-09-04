let counter = 0;

let nextBtn = document.querySelector('.btn-next');
let prevBtn = document.querySelector('.btn-prev');
let img = document.querySelector('.image')
let imagesArr = [
  "bg1.jpg",
  "bg2.jpg",
  "bg3.jpg",
  "bg4.jpg",
  "bg5.jpg",
  "bg6.jpg",
  "bg7.jpg",
];
nextBtn.addEventListener('click', function(){
    if(counter == imagesArr.length -1 ){
        counter = 0
    }
    else{
        counter++;

    }
        images = imagesArr[counter];
        img.src = images;
})
prevBtn.addEventListener('click', function(){
    if(counter<=0){
        counter = imagesArr.length - 1
    }
    else{
        counter--;
    }
    images = imagesArr[counter];
    img.src = images;
})