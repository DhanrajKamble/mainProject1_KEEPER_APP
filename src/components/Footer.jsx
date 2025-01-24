import React from "react";

function Footer(props){

    const year = new Date().getFullYear();
    // console.log(year);

    return (<div className={props.className}>
        <p>Copyright ©️ {year}</p>
    </div>);
};

export default Footer;