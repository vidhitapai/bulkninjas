import React from 'react'
import {Card} from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
const { SearchBar } = Search;


const array  = [{
    ID: 1,
    name: "Chair",
    mrp: 5000,
    discountedPrice: 4000,
    totalQuantity: 500,
    ordersPlaced: 100,
    category: "Home"
}, 
{
    ID: 2,
    name: "Book",
    mrp: 100,
    discountedPrice: 80,
    totalQuantity: 500,
    ordersPlaced: 400,
    category: "Stationary"
},
{
    ID: 3,
    name: "Glasses",
    mrp: 450,
    discountedPrice: 350,
    totalQuantity: 1000,
    ordersPlaced: 300,
    category: "Home"
},
{
    ID: 4,
    name: "Shoes",
    mrp: 6000,
    discountedPrice: 5500,
    totalQuantity: 100,
    ordersPlaced: 100,
    category: "Footwear"
}];





const Dashboard = () => {
        //  array.map((product) => {
                return ( 
                <div>
                    {/* <tr> 
                        <td>product.name</td>
                        <td>product.mrp<td>
                        <td>product.discountedPrice</td>
                        <td>product.ordersPlaced</td>
                        <td>product.category</td>
                    </tr>
                </div>
                );
                });    
            } */}
        </div>
    );
    
    
}
export default  Dashboard; 