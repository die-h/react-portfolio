interface TweetRandom {
  author: string;
  authorSlug: string;
  content: string;
  dateAdded: string;
  dateModified: string;
  length: number;
  tags: string[];
  _id: string;
}
interface TweetInfo {
  name: string;
  username: string;
  content: string;
  date: string;
  picture: string
}
interface TweetFollower {
  name: string;
  username: string;
}