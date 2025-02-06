import React from "react";
import Card from "./Card";

function CardList(props){
    const pro = props.profile;
    return(
        <>
            <h1>List of Card</h1>
           {

                pro.map((p,ind)=>{
                    return <Card {...p} key={ind} />
                })

           }
        </>
    )
}
export default CardList;