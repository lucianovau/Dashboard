import React, {useEffect, useState } from 'react'; 

function Totals(){
	const [dataProd, setDataprod] = useState(null);

	useEffect(()=>{
		fetch('http://localhost:3030/api/products')
		.then(response => response.json() )
		.then((data)=>{
			setDataprod(data)
		})
	}, [])

    const [dataUser, setDatauser] = useState(null);

	useEffect(()=>{
		fetch('http://localhost:3030/api/users')
		.then(response => response.json() )
		.then((data)=>{
			setDatauser(data)
		})
	}, [])

    return(
        <React.Fragment>
				{/*<!-- Content Row Totals-->*/}
					<div className="row">

						{/*<!-- Total products -->*/}
						<div className="col-md-4 mb-4">
							<div className="card border-left-primary shadow h-100 py-2">
								<div className="card-body">
									<div className="row no-gutters align-items-center">
										<div className="col mr-2">
											<div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Products in Data Base</div>
											<div className="h5 mb-0 font-weight-bold text-gray-800">{dataProd?.count}</div>
										</div>
										<div className="col-auto">
											<i class="fas fa-car" style={{ color: "gray", fontSize: "2rem"}}></i>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/*<!-- Total users -->*/}
						<div className="col-md-4 mb-4">
							<div className="card border-left-success shadow h-100 py-2">
								<div className="card-body">
									<div className="row no-gutters align-items-center">
										<div className="col mr-2">
											<div className="text-xs font-weight-bold text-success text-uppercase mb-1">Total Users</div>
											<div className="h5 mb-0 font-weight-bold text-gray-800">{dataUser?.count}</div>
										</div>
										<div className="col-auto">
										<i className="fas fa-user fa-2x" style={{ color: "gray", fontSize: "2rem"}}></i>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/*<!-- Total Categorias -->*/}
						<div className="col-md-4 mb-4">
							<div className="card border-left-warning shadow h-100 py-2">
								<div className="card-body">
									<div className="row no-gutters align-items-center">
										<div className="col mr-2">
											<div className="text-xs font-weight-bold text-warning text-uppercase mb-1">Total Brands
											</div>
											<div className="h5 mb-0 font-weight-bold text-gray-800">5</div>
										</div>
										<div className="col-auto">
									<i class="fas fa-shield-alt" style={{ color: "gray", fontSize: "2rem"}}></i>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
			{/*<!-- End movies in Data Base -->*/}
        </React.Fragment>
	) 
}

export default Totals;