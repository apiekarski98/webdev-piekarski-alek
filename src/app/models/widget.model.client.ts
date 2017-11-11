export class Widget {
  _id: String;
  widgetType: String;
  pageId: String;
  size: Number;
  width: String;
  text: String;
  url: String;
  constructor(_id, widgetType, pageId, size, width, text, url) {
    this._id = _id;
    this.widgetType = widgetType;
    this.pageId = pageId;
    if (widgetType === 'HEADING') {
      this.size = size;
      this.text = text;

    }
    if (widgetType === 'IMAGE' || 'YOUTUBE') {
      this.width = width;
      this.url = url;
    }
    if (widgetType === 'HTML') {
      this.text = text;
    }
    if (widgetType === 'TEXT') {
      this.text = text;
    }
  }
}
