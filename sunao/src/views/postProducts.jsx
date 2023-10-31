import React from "react";



export const PostProducts=()=>{

   /* const uploadProduct  = async(product)=>{
        let result = await fetch("http://127.0.0.1:5000/product",{
            method: "POST",
            body: JSON.stringify(product),
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem("token")
            )}`,

            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        })
    }
    */
    const product = {

    }
    return(
        <div>
            <h1>Create a product</h1>
            <div>
                <form >
                    <div className="d-grid row">

                 <div className="col-3 d-grid" >
                    <input className="mb-2" placeholder="name" type="text" />
                        <input  className="mb-2" placeholder="category" type="text" />
                        <input  className="mb-2" placeholder="price" type="text" />
                        <input  className="mb-2" placeholder="description" type="text" />
                        <input  className="mb-2" placeholder="image" type="text" /> 
                        <button type="submit"></button>
                 </div>
                        
                          </div>
                </form>
            </div>
        </div>
    )
}