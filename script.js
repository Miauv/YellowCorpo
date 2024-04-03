let NewsNum = 0;
showNews();

function showNews() {
  let i;
  let news = document.getElementsByClassName("neNews");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < news.length; i++) {
    news[i].style.display = "none";  
  }
  NewsNum++;
  if (NewsNum > news.length) {NewsNum = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  news[NewsNum-1].style.display = "block";  
  dots[NewsNum-1].className += " active";
  setTimeout(showNews, 2500);
}
