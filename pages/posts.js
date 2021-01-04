import React from "react";
import { getPosts } from "../actions";



export default class Posts extends React.Component {

    static async getInitialProps() {

        const posts = await getPosts()
        return { posts }
    }
    render() {
        const { posts } = this.props
        return (
            <div className="container">
                <h1>
                    I am a posts page
                </h1>

                {posts.map(p=>(
                <ul key={p.id}>
                    <li>{p.title}</li>
                    <li>{p.body}</li>  
                </ul>
                ))}
                
            </div>
        )

   }
}