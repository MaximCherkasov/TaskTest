import React from 'react';
import Comment from "./Comment";

const Comments = (props) => {
    return (
        <div className={'comments'}>
            <div className={'row'}>
                <div className="first-col col-md">
                    <p>{Object.keys(props.data).length} Responses</p>
                </div>
                <div className="second-col col-md">
                    <p>Newest</p>
                    <p style={{color: "#6576f8"}}>Most Like</p>
                    <p>Oldest</p>
                </div>
            </div>

            <hr/>

            {
                props.data.map((item, index) =>
                    <Comment  key={index} name={item.name} text={item.text} updated={item.updated_at} />
                )
            }
        </div>
    );
};

export default Comments;