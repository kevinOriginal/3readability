var read = require('../src/readability');

read('http://news.naver.com/main/read.nhn?mode=LSD&mid=shm&sid1=104&oid=003&aid=0007614268',
function(err, article, meta) {
  //console.log(article.content);
});



/*
article.document.title = 기사 제목
article.content = 기사 내용



// http://news.naver.com/main/read.nhn?mode=LSD&mid=shm&sid1=104&oid=003&aid=0007614268
//console.log(article.content);

/*

spans.forEach(function(span) {
  console.log (span.textContent);
});

*/
