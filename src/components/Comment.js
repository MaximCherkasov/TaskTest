import React from 'react';
import images from "../images/img.png";

const Comment = (props) => {


    function datediff(date) {
        let d1 = date;
        let now;
        let d2 = now = new Date();
        if (d2.getTime() < d1.getTime()) {
            d1 = now;
            d2 = date;
        }
        let yd = d1.getYear();
        let yn = d2.getYear();
        let years = yn - yd;
        let md = d1.getMonth();
        let mn = d2.getMonth();
        let months = mn - md;
        if (months < 0) {
            years--;
            months = 12 - md + mn;
        }
        let dd = d1.getDate();
        let dn = d2.getDate();
        let days = dn - dd;
        if (days < 0) {
            months--;
            // figure out how many days there are in the last month
            d2.setMonth(mn, 0);
            days = d2.getDate() - dd + dn;
        }
        let weeks = Math.floor(days / 7);
        days = days % 7;
        if (years > 0) return years + ' years' + (months > 0 ? ' and ' + months + ' months ago' : '');
        if (months > 0) return months + ' months' + (weeks > 0 ? ' and ' + weeks + ' weeks ago' : '');
        if (weeks > 0) return weeks + ' weeks ago';
        if (weeks > 0) return weeks + ' weeks' + (days > 0 ? ' and ' + days + ' days ago' : '');

        if (days === 0) {
            return "today"
        }
        return days + ' days ago';
    }

    return (
        <div className="row comment">
            <div className="col-md-2 photo-profile">
                <img src={images} alt=""/>
            </div>
            <div className="col-md-8">
                <h6>{props.name}</h6>
                <p>{props.text}</p>
            </div>
            <div className="col-md comment-date">

                ({datediff(new Date(props.updated))})

            </div>
            <hr/>
        </div>
    );
};

export default Comment;
