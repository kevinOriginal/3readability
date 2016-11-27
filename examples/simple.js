var read = require('../src/readability');

read('http://news.naver.com/main/read.nhn?mode=LSD&mid=shm&sid1=104&oid=003&aid=0007614268',
function(err, article, meta) {
  console.log(article.title);
  console.log(article.content);

});



/*
article.title = 기사 제목
article.content = 기사 내용

examples :

http://www.bbc.com/news/world-middle-east-38123829

 http://news.naver.com/main/read.nhn?mode=LSD&mid=shm&sid1=104&oid=003&aid=0007614268

*/
