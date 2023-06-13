import React from 'react';
import '../styles/specifications.css';

function Specification({ autoData }) {

  const carSpecifications = {
    MAKE: autoData.autoMake,
    MODEL: autoData.title,
    STATUS: "IN STOCK",
    YEAR: autoData.year,
    MILEAGE: autoData.mileage,
    VIN: autoData.vin,
    VERSION: autoData.autoVersion,
    FUEL: autoData.fuel,
    ENGINE: autoData.engine,
    HORSEPOWER: autoData.horsePower,
    TRANSMISSION: autoData.transmission,
    DOORS: autoData.doors,
    CONDITION: autoData.condition,
    DRIVE: autoData.Drive,
    SEATS: autoData.seats,
    COLOR: autoData.color,
    INTERIORCOLOR: autoData.interiorColor,
    PRICE: autoData.price,
    WARRANTY: autoData.Warranty,
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