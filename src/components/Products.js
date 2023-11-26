import React, { useEffect, useState } from "react";
import { Pagination } from "./Pagination";


function Products(props){
    const [data, setData] = useState(null);
    const totalProducts = data ? data.length : 0;
    const [currentPage, setCurrentPage] = useState(0);
    const productsPerPage = 6;


    // const offset = currentPage * productsPerPage;
    // const currentProducts = data ? data.slice(offset, offset + productsPerPage) : [];

    useEffect(() => {
		fetch('http://localhost:3030/api/products')
		.then(response => response.json())
        .then((data)=>{
            setData(data.products)
        })
	}, []);

    // Verificar si data es null o undefined
    if (!data) {
        return <div>Cargando...</div>;
    }

    const totalPages = Math.ceil(data.length / productsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const startIdx = currentPage * productsPerPage;
    const currentProducts = data.slice(startIdx, startIdx + productsPerPage);



    return (
       <React.Fragment>
            <div className="row">
                {data?.map((product)=>{
                    return(
                    <div className="col-lg-4 mb-6" key={product.id}>
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
                <Pagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={handlePageChange}
                            />
            </div>
        </React.Fragment>
    )
};

export default Products

