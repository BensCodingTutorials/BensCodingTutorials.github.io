import { Series } from "./series";

export class Topic{
  topic: string;
  seriesList: Series[];
  imageLinkURL : string;
  id : string;

  constructor() {
      this.topic="";
      this.imageLinkURL = "";
      this.seriesList = [];
      this.id="";
  }
}