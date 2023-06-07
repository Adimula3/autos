import React from 'react';
import '../styles/specifications.css';
import Footer from "../component/footer";


function Specification(props) {

    const carSpecifications = {
        MAKE: "LEXUS",
        MODEL: "SERIES 3",
        STATUS: "IN STOCK",
        YEAR: "2016",
        MILEAGE: "4,980",
        VIN: "234HDGSGF34623",
        VERSION: "1.2",
        FUEL: "PETROL",
        ENGINE: "16000",
        HORSEPOWER: "400",
        TRANSMISSION: "MANUAL",
        DOORS: "2",
        CONDITION: "NON DRIVER",
        DRIVE: "FRONT",
        SEATS: "5",
        COLOR: "RED",
        INTERIORCOLOR: "ORANGE",
        PRICE: "FIXED",
       WARRANTY: "NO",
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