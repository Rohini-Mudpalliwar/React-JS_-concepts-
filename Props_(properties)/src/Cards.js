import React from 'react'


const Cards = (props) =>{
    let titleHere = props.title
    let descriptionHere= props.description
    let titleSeparateCss = props.titleCss
    let discriptionSeparateCss = props.discriptionCss

    return(
        <div className="card">
            {/*.................... Below are the two ways to change the perticular style of an element anf here "Color" variable work as a className */}
            {/* 1.by using curly braces with variable name Color */}
                  <div className={titleSeparateCss}>{titleHere}</div>
            {/* 2. by using Template literals*/}
                  {/* <div className={`${Color}`}>{title}</div> */}
            <div className={discriptionSeparateCss}>{descriptionHere}</div>
        </div>
    )
};

export default Cards

