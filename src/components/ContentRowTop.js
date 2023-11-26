import React from 'react'; 
import Totals from './Totals';
import LastProduct from './LastProduct';
import Brands from './Brands';
import Products from './Products';
import { Pagination } from './Pagination';
function ContentRowTop(){
	
    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">Concesionaria SN Dashboard</h1>
					</div>
				
					{/*<!-- Content Row Totals -->*/}
					<Totals></Totals>
					{/*<!-- End -->*/}
					
					{/*<!-- Content Row Last Movie in Data Base -->*/}
					<div className="row">
						<LastProduct></LastProduct>
						{/*<!-- Brands in DB -->*/}
						<Brands></Brands>
					</div>
					{/*<!--End Content Row Top-->*/}
           			 <h2 style={{textAlign: 'center', margin: '0px 0px 30px 0px'}}>Listado de Productos</h2>
				<Products></Products>
				</div>
          </React.Fragment>
    )

}
export default ContentRowTop;