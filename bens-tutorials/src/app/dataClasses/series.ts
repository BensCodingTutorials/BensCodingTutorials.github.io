import { Article } from "./article";

export class Series {
  series: string;
  imageLinkURL: string;
  articleList: Article[];
  id: string;

  constructor() {
      this.series="";
      this.imageLinkURL = "";
      this.articleList = [];
      this.id="";
  }
}