import React, {useEffect, useState}from "react";

function Products(props){
    const [data, setData] = useState(null);

	useEffect(()=>{
		fetch('http://localhost:3030/api/products')
		.then(response => response.json())
        .then((data)=>{
            setData(data.products)
        })
	}, []);

    return (
       <React.Fragment>
            <div className="row">
                {data?.map((product)=>{
                    return(
                    <div className="col-lg-4 mb-6">
                        <div className="card shadow mb-4">
                            <div className="card-header py-3" style={{ backgroundColor: "rgb(80, 89, 100)"}}>
                                <h5 className="m-0 font-weight-bold text-white">{product.name}</h5>
                            </div>
                            <div className="card-body">
                                <p style={{ maxHeight: '50px', overflow: 'hidden'}}>{product?.description}</p> 
                                <a className="btn btn-outline-dark" target="_blank" rel="nofollow" href={`${product.detail}`}>View product detail</a>
                            </div>
                        </div>
                    </div>
                    )
                })}
            </div>
        </React.Fragment>
    )
};

export default Products