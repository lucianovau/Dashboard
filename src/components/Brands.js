import React, {useState, useEffect} from 'react';

function Brands(){
    const [data, setData] = useState(null);

    useEffect(()=>{
        fetch('http://localhost:3030/api/products')
            .then((resolve)=>{
                return resolve.json()
            })
            .then((data)=>{
                setData(data.countByCategory)
            })
    }, [])
    return (
        <React.Fragment>
            <div className="col-lg-6 mb-4">						
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">Brands in Data Base</h5>
                    </div>
                    <div className="card-body">
                            <div className="row">
                            <div className="col-lg-6 mb-4" style={{ height: "150px", marginTop: "32px" }}>
                                    <div className="card bg-dark text-white shadow" style={{height: "150px"}}>
                                        <div className="card-body">
                                                <h3>Chevrolet</h3> 
                                                <p>Total de productos: {data?.Chevrolet}</p>
                                        </div>
                                    </div>
                                </div>
                                    <div className="col-lg-6 mb-4" style={{ height: "150px", marginTop: "32px"  }}>
                                        <div className="card bg-dark text-white shadow" style={{height: "150px"}}>
                                            <div className="card-body">
                                                <h3>Citroen</h3> 
                                                <p>Total de productos: {data?.Citroen}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 mb-4" style={{ height: "150px" }}>
                                        <div className="card bg-dark text-white shadow" style={{height: "150px"}}>
                                            <div className="card-body">
                                                <h4>Ford</h4> 
                                                <p>Total de productos: {data?.Ford}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 mb-4" style={{ height: "150px" }}>
                                        <div className="card bg-dark text-white shadow" style={{height: "150px"}}>
                                            <div className="card-body">
                                                <h3>Peugeot</h3> 
                                                <p>Total de productos: {data?.Peugeot}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 mb-4" style={{ height: "150px" }}>
                                        <div className="card bg-dark text-white shadow" style={{height: "150px"}}>
                                            <div className="card-body">
                                                <h3>Toyota</h3> 
                                                <p>Total de productos: {data?.Toyota}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 mb-4" style={{ height: "150px" }}>
                                        <div className="card bg-dark text-white shadow" style={{height: "150px"}}>
                                            <div className="card-body">
                                                <h3>Todos</h3> 
                                                <p>Total de productos:24</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
        </React.Fragment>

)
 
};

export default Brands;