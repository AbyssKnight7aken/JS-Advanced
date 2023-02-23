function getArticleGenerator(articles) {

    return () => {
        if (articles.length) {
            let divElement = document.getElementById('content');
            let article = document.createElement('article');
            let currentText = articles.shift();
            article.innerText = currentText;
            divElement.appendChild(article);
        }

    }
}
