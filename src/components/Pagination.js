import React from 'react';


const Pagination = (props) => {


    const handleClick = (e) => {
        props.setNewPage(e)
    }


    return (
        <div className={'pages'}>
            <div className={'pages_Btn'}>
                <div>
                    <button
                        className={'paginationBtn'}
                        onClick={() => handleClick(true)}
                        style={props.page === 1 ? {visibility: 'hidden'} : {display: 'visible'}}

                    >
                        Back
                    </button>
                </div>
                <div>
                    <button
                        className={'paginationBtn'}
                        onClick={() => handleClick(false)}
                        style={props.page === props.pageQty ? {visibility: 'hidden'} : {display: 'visible'}}
                    >
                        Load more
                    </button>
                </div>
                <div>
                    <button className={'paginationBtn'}
                            onClick={() => handleClick('end')}
                            style={props.page === props.pageQty ? {visibility: 'hidden'} : {display: 'visible'}}
                    >
                        Last page
                    </button>
                </div>
            </div>


            <div className={'page'}>
                <div className={'current_page'}>Page: <div className={'current_span'}>{props.page}</div></div>
            </div>
        </div>


    );
};

export default Pagination;