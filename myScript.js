
// js to like photos
changeHTML= ' <a href="#"><span class="material-icons like">favorite</span></a>';

var likeNum=65;
document.querySelector('#likenum').textContent=likeNum;
var count=1;

function change(){
    document.querySelector('#like').innerHTML=changeHTML;
    likeNum=likeNum+1;
    document.querySelector('#likenum').textContent=likeNum;
}

document.querySelector('#like').addEventListener('click',change);


