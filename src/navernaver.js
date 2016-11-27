
  if (checkNaver) {
    console.log(window.document.getElementById("articleBodyContents").textContent);
  }

  function naverExplicit() {
  var article = { };

  article.content = window.getElementById("articleBodyContents").textContent;
  }
  return callback(null, naverExplicit, null);
  }
