const articles = require("../data/articles.json");

const mainController = {

    renderHomePage: (req, res) => {
        res.render("home", {listOfArticles : articles});
    },

    renderOneArticle:(req, res) => {
        const articleId = parseInt(req.params.id);
        const requestedArticle = articles.find((element) => {
            return element.id === articleId});        
        res.render("article", { article : requestedArticle});
    },

    renderOneCategory:(req, res) => {
        const articleCategory = req.params.name;
        const requestedCategory = articles.filter((element) => {
        return element.category.toLowerCase() === articleCategory
    });
                res.render("home", {listOfArticles : requestedCategory});
    },
};

module.exports = mainController;