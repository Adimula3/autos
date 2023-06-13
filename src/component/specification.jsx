import React from 'react';
import '../styles/specifications.css';
import Footer from "../component/footer";
import { useParams } from 'react-router-dom'

function Specification({autoDatas}) {
    
  const params = useParams();

    const carSpecifications = {
        MAKE:  autoDatas[parseInt(params.productId) - 1].autoMake,
        MODEL: autoDatas[parseInt(params.productId) -1 ].title,
        STATUS: "IN STOCK",
        YEAR: autoDatas[parseInt(params.productId) - 1].year,
        MILEAGE: autoDatas[parseInt(params.productId) - 1].mileage,
        VIN: autoDatas[parseInt(params.productId) -1 ].vin,
        VERSION: autoDatas[parseInt(params.productId) - 1].autoVersion,
        FUEL: autoDatas[parseInt(params.productId) - 1].fuel,
        ENGINE:autoDatas[parseInt(params.productId) -1 ].engine,
        HORSEPOWER: autoDatas[parseInt(params.productId) - 1].horsePower,
        TRANSMISSION: autoDatas[parseInt(params.productId) - 1].transmission,
        DOORS: autoDatas[parseInt(params.productId) -1 ].doors,
        CONDITION: autoDatas[parseInt(params.productId) - 1].condition,
        DRIVE:autoDatas[parseInt(params.productId) - 1].Drive,
        SEATS: autoDatas[parseInt(params.productId) -1 ].seats,
        COLOR: autoDatas[parseInt(params.productId) -1 ].color,
        INTERIORCOLOR: autoDatas[parseInt(params.productId) -1 ].interiorColor,
        PRICE: autoDatas[parseInt(params.productId) - 1].price,
        WARRANTY: autoDatas[parseInt(params.productId) -1 ].Warranty,
      };
    return (
        <div>
          <table className="car-details-table">
            <tbody>
                {Object.entries(carSpecifications).map(([key, value]) => (
                  <tr key={key}>
                    <td className="table-cell">{key}</td>
                    <td className="table-cell">{value}</td>
                  </tr>
              ))}
            </tbody>  
          </table>
        </div>
    );
}

export default Specification;