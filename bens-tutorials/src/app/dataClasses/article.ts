export class Article {
    article: string;
    imageLinkURL : string;
    htmlArticle : string;
    publishedDate :string;
    author :string;
    previousArticle : string;
    nextArticle : string;
    id : string;

    constructor() {
        this.article="";
        this.imageLinkURL = "";
        this.htmlArticle = "";
        this.id="";
        this.publishedDate = "";
        this.author = "";
        this.previousArticle = "";
        this.nextArticle = "";
    }
}
   