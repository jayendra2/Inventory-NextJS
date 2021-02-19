import postsData from './data/postData';

export default function handler(req, res) {
  res.status(200).json(postsData)
}