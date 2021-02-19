import postsData from './../data/postData';

export default function handler(req, res) {
    const {
      query: { pid },
    } = req
    const result = postsData.find(p => Number(p.id) === Number(pid))
    res.status(200).json(result)
  }