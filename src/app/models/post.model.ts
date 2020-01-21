export class Post {
  createdAt = Date();
  loveIts = 0;

  constructor(public title: string, public content: string) { }
}
