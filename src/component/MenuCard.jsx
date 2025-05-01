import React, { useEffect, useState } from 'react';


const MenuCard = () => {
    
    const[recipes,setRecipes]=useState([]);
    async function getData() {
        const response = await fetch('https://dummyjson.com/recipes');
        const data = await response.json();
        setRecipes(data.recipes);

        
    }

    useEffect(()=>{
        getData()

    },[]
)



  return (
    <div className="container my-5  py-5">
        <div className="row">
            {
                recipes.map((data,index)=>{
                    // console.log(data);
                    return(
                        <div key={index} className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm border-0">
        <img src={data.image} className="card-img-top" alt={data.name} />
        <div className="card-body">
          <h5 className="card-title fw-bold">{data.name}</h5>
          <p className="card-text text-muted">{data.mealType}</p>
        </div>
        <div className="card-footer bg-white border-0 d-flex justify-content-between align-items-center">
          <span className="fw-bold text-primary">{data.cookTimeMinutes} Minutes</span>
          <button className="btn btn-sm btn-outline-primary rounded-pill">Order Now</button>
        </div>
      </div>
    </div>
                    )
                })
            }
            
        </div>
    </div>
    
  );
};

export default MenuCard;
