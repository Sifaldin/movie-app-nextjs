import axios from 'axios'

export default async (req, res) => {

    if(req.method === 'POST'){
        const postData = JSON.parse(req.body)

        return res.json(
            {status: 'savng post to DB!'}
        )

    } else {

        const posts = await axios.get('https://jsonplaceholder.typicode.com/posts')
        const fewerPosts = posts.data
        return res.json(fewerPosts.slice(0,21))

    }
}