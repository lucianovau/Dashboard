import React, {useEffect, useState } from 'react'; 

function LastProduct(){
    const [data, setData] = useState(null);
    const [idLast, setId] = useState(null);
    const [img, setImg] = useState(null);

	useEffect(()=>{
		fetch('http://localhost:3030/api/products')
		.then(response => response.json())
        .then((data)=>{
             return (data.products.pop())
          })
        .then((data)=>{
            setId(data.id)
        })
	}, []);

    useEffect(()=>{
        
        fetch(`http://localhost:3030/api/products/${idLast}`)
        .then(response => response.json())
        .then((data)=>{
            setData(data)
        })
    }, [idLast]);

    useEffect(()=>{
        
        fetch(`http://localhost:3030/api/products/${idLast}/img`)
        .then(response => response.json())
        .then((data)=>{
            setImg(data)
        })
    }, [idLast]);
    
    return(
        <React.Fragment>
                {/*<!-- Last Product in DB -->*/}
                <div className="col-lg-6 mb-4">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h5 className="m-0 font-weight-bold text-gray-800">Last product in Data Base</h5>
                        </div>
                        <div className="card-body">
                            <h3>{data?.name}</h3>
                            <div className="text-center">
                                <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src= {img?`http://localhost:3030/${img[4]}`: null } alt=""/>
                            </div>
                            <p>{data?.descripcion}</p>
                            <a className="btn btn-outline-dark" target="_blank" rel="nofollow" href={`${data?.detail}`}>View product detail</a>
                        </div>
                    </div>
                </div>
        </React.Fragment>
	) 
}

export default LastProduct;