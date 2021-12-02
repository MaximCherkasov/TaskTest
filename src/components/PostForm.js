import React, {useState} from 'react';


const PostForm = (props) => {
    const [name, setName] = useState('');
    const [text, setText] = useState('');


    const postBtn = (event) => {
        event.preventDefault();

        const data = {
            name: name,
            text: text
        }

        props.setNewPost(data);

        setName('');
        setText('');
    }


    return (
        <div className={'postForm'}>
            <h4>Comments</h4>

            <form>
                <div className={'postInput'}>
                    <input
                        onChange={(event)=> {setName(event.target.value)}}
                        value={name}
                        type="text"
                        name={'name'}
                        placeholder={'Your name'}/>
                </div>

                <div className={"postArea"}>
                    <textarea
                        onChange={(event)=> {setText(event.target.value)}}
                        value={text}
                        name={'text'}
                        placeholder={"Write a review"}/>
                </div>

                <div className={"postBtn"}>
                    <button
                        disabled={name === '' && text === '' ? true : false }
                        onClick={(event => postBtn(event))}
                    >
                        POST
                    </button>
                </div>
            </form>



        </div>
    );
};

export default PostForm;