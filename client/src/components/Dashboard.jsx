import React from 'react'
import {Card} from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
const { SearchBar } = Search;


const array = [{
    name: "Chair",
    mrp: 5000,
    discountedPrice: 4000,
    picture: {
        filePath
    },
    totalQuantity: 500,
    ordersPlaced: 100,
    category: "Home"
}, 
{
    name: "Book",
    mrp: 100,
    discountedPrice: 80,
    picture: {
        filePath
    },
    totalQuantity: 500,
    ordersPlaced: 400,
    category: "Stationary"
},
{
    name: "Glasses",
    mrp: 450,
    discountedPrice: 350,
    picture: {
        filePath
    },
    totalQuantity: 1000,
    ordersPlaced: 300,
    category: "Home"
},
{
    name: "Shoes",
    mrp: 6000,
    discountedPrice: 5500,
    picture: {
        filePath
    },
    totalQuantity: 100,
    ordersPlaced: 100,
    category: "Footwear"
}]
export const Dashboard = () => {
    return (
        <div>
            <Table  bordered hover>
  <thead>
    <tr>
      <th>Sr No</th>
      <th>Product Name </th>
      <th>Orders Placed</th>
      <th>Category</th>
      <th>Discounted Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>array[0].name</td>
      <td>array[0].ordersPlaced</td>
      <td>array[0].category</td>
      <td>array[0].discountedPrice</td>
    </tr>
    <tr>
      <td>2</td>
      <td>array[1].name</td>
      <td>array[1].ordersPlaced</td>
      <td>array[1].category</td>
      <td>array[1].discountedPrice</td>
    </tr>
    <tr>
      <td>3</td>
      <td>array[2].name</td>
      <td>array[2].ordersPlaced</td>
      <td>array[2].category</td>
      <td>array[2].discountedPrice</td>
    </tr>
    <tr>
      <td>4</td>
      <td>array[4].name</td>
      <td>array[4].ordersPlaced</td>
      <td>array[4].category</td>
      <td>array[4].discountedPrice</td>
    </tr>
  </tbody>
</Table>
        </div>
    )
}
