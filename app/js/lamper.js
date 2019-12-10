// Select lamp function //

function upDate(previewPic){
  let div = document.getElementById('placeholder');
  div.style.backgroundImage = "url('" + previewPic.src + "')";
  document.getElementById('alt-text').innerHTML = previewPic.alt;

}
