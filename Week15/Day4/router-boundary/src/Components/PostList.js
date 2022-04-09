import React from "react";
import JsonFile from '../JsonFile.json';

const PostList = () => {
    return (

        <div>
            {
                JsonFile.map(item => {

                    return (
                        <>
                            <h1>{item.title}</h1>
                            <br />
                            <h6>{item.content}</h6>
                        </>
                    )
                })
            }
        </div>
    )
}

export default PostList;