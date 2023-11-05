import react from "react"
import { Card } from "./card"

export const Cardsfront=(props)=>{
    return(
        <div className="d-flex card-list justify-content-center">
            <div className="card-list-item"> 
            <Card 
            price={props.price1}
            image={props.image1}
            /></div>
            <div className="card-list-item"><Card
            price={props.price2}
            image={props.image2}
            /></div>
            <div className="card-list-item"><Card 
            price={props.price3}
            image={props.image3}
            /></div>
            <div className="card-list-item"><Card
            price={props.price4}
            image={props.image4}
            /></div>
        </div>
    )
}