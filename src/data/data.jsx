import offer1 from '../assets/p-d1.jpeg';
import offer2 from '../assets/pd-2.jpeg';
import offer3 from '../assets/pd-3.jpeg';
import offer4 from '../assets/pd-4.jpeg';
import offer5 from '../assets/car5.jpeg';
import car1 from '../assets/car1.jpeg';
import car2 from '../assets/car2.jpeg';
import car3 from '../assets/car3.jpeg';
import car4 from '../assets/car4.jpeg';
import car5 from '../assets/car5.jpeg';
import car6 from '../assets/car6.jpeg';
import car7 from '../assets/car7.jpeg';
import car8 from '../assets/car6.jpeg';
import slide1 from "../assets/slide01.jpg";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/auto-slider.jpg";


const autoDatas = [
    {
        id: 1,
        src: car1,
        alt: "Image 1",
        title: "Volkswagen Atlas 2",
        about: "Volkswagen Atlas about aute reprehender voluptate velit esacium fugiat nula pariatur excepteurd magna aliqua uet enim ad minim veniam quis nostrud ...",
        autoMake: "Volkswagen",
        year: "2014",
        fuel: "plugin electric",
        transmission: "Manual",
        autoVersion: "1.3",
        mileage: "4980",
        horsePower: "300HP",
        Drive: "4x4",
        price: "20,000,000",
        condition: "New",
        vin: "234HDGSGF34623",
        engine: "16000",
        doors: "2",
        seats: "5",
        color: "RED",
        interiorColor: "ORANGE",
        Warranty: "NO",
        url: slide1,
        heroStyle: "hero-style-right",
        contentStyle: "carousel-content-right",
        productImages: [
            car1, offer5, offer2, offer1, offer3
        ],
    },
    {
        id: 2,
        src: car2,
        alt: "Image 1",
        title: "Nissan Murano",
        about: "Nissan Murano about reprehender voluptate velit esacium fugiat nula pariatur excepteurd magna aliqua uet enim ad minim veniam quis nostrud ...",
        autoMake: "Nissan",
        year: "2014",
        fuel: "diesel",
        transmission: "Manual",
        autoVersion: "1.4",
        mileage: "5980",
        horsePower: "400HP",
        Drive: "4x4",
        price: "8,000,000",
        condition: "Used",
        vin: "234HDGSGF34623",
        engine: "16000",
        doors: "2",
        seats: "5",
        color: "YELLOW",
        interiorColor: "BLACK",
        Warranty: "NO",
        url: slide2,
        heroStyle: "hero-style-left",
        contentStyle: "carousel-content-left",
        productImages: [
            car2, offer1, offer2, offer3, offer4
        ],
    },
    {
        id: 3,
        src: car3,
        alt: "Image 1",
        title: "Mazda CX 9 SUV",
        about: "Mazda about Duis aute reprehender voluptate velit esacium fugiat nula pariatur excepteurd magna aliqua uet enim ad minim veniam quis nostrud ...",
        autoMake: "Mazda",
        year: "2014",
        fuel: "diesel",
        transmission: "Manual",
        autoVersion: "1.5",
        mileage: "6980",
        horsePower: "500HP",
        Drive: "4x4",
        price: "2,000,000",
        condition: "Tokunbo",
        vin: "334HDGSGF34623",
        engine: "36000",
        doors: "2",
        seats: "5",
        color: "GREEN",
        interiorColor: "BROWN",
        Warranty: "NO",
        url: slide3,
        heroStyle: "hero-style-right",
        productImages: [
            car3, offer1, offer2, offer3, offer4
        ],
    },
    {
        id: 4,
        src: car4,
        alt: "Image 1",
        title: "Renault Koleos",
        about: "Renault Koleos about Duis aute reprehender voluptate velit esacium fugiat nula pariatur excepteurd magna aliqua uet enim ad minim veniam quis nostrud ...",
        autoMake: "Renault",
        year: "2014",
        fuel: "petrol",
        transmission: "Manual",
        autoVersion: "1.8",
        mileage: "7980",
        horsePower: "500HP",
        Drive: "4x4",
        price: "15,000,000",
        condition: "Tokunbo",
        vin: "234HDGSGF34623",
        engine: "16000",
        doors: "1",
        seats: "2",
        color: "RED",
        interiorColor: "BLACK",
        Warranty: "NO",
        url: car6,
        heroStyle: "hero-style-right",
        productImages: [
            car4, offer1, offer2, offer3, offer4
        ],
    },
    {
        id: 5,
        src: car5,
        alt: "Image 1",
        title: "Volkswagen Atlas 2",
        about: "Duis aute reprehender voluptate velit esacium fugiat nula pariatur excepteurd magna aliqua uet enim ad minim veniam quis nostrud",
        autoMake: "Volkswagen",
        year: "2020",
        fuel: "petrol",
        transmission: "Automatic",
        autoVersion: "1.9",
        mileage: "9980",
        horsePower: "800HP",
        Drive: "4x4",
        price: "22,000,000",
        condition: "New",
        vin: "234HDGSGF34623",
        engine: "30000",
        doors: "4",
        seats: "5",
        color: "BLACK",
        interiorColor: "BLACK",
        Warranty: "NO",
        url: car4,
        heroStyle: "hero-style-right",
        productImages: [
            car5, offer4, offer5, offer3, offer5
        ],
    },
    {
        id: 6,
        src: car6,
        alt: "Image 1",
        title: "Audi Q5 3",
        about: "Duis aute reprehender voluptate velit esacium fugiat nula pariatur excepteurd magna aliqua uet enim ad minim veniam quis nostrud",
        autoMake: "Audi",
        year: "2020",
        fuel: "petrol",
        transmission: "Semi-Automatic",
        autoVersion: "2.3",
        mileage: "4980",
        horsePower: "100HP",
        Drive: "4x4",
        price: "6,000,000",
        condition: "Used",
        vin: "234HDGSGF34623",
        engine: "40000",
        doors: "4",
        seats: "5",
        color: "PINK",
        interiorColor: "PINK",
        Warranty: "NO",
        url: car3,
        heroStyle: "hero-style-left",
        productImages: [
            car6, offer3, offer4, offer2, offer5
        ],
    },
    {
        id: 7,
        src: car7,
        alt: "Image 1",
        title: "Audi RS 4 Avant",
        about: "Duis aute reprehender voluptate velit esacium fugiat nula pariatur excepteurd magna aliqua uet enim ad minim veniam quis nostrud",
        autoMake: "Audi",
        year: "2020",
        fuel: "petrol",
        transmission: "Automatic",
        autoVersion: "3.3",
        mileage: "1980",
        horsePower: "200HP",
        Drive: "4x4",
        price: "18,000,000",
        condition: "Tokunbo",
        vin: "234HDGSGF34623",
        engine: "80000",
        doors: "4",
        seats: "5",
        color: "GREY",
        interiorColor: "GREY",
        Warranty: "NO",
        url: car1,
        heroStyle: "hero-style-right",
        productImages: [
            car7, offer2, offer5, offer4, offer1
        ],
    },
    {
        id: 8,
        src: car8,
        alt: "Image 1",
        title: "DS 7 Crossback",
        about: "Duis aute reprehender voluptate velit esacium fugiat nula pariatur excepteurd magna aliqua uet enim ad minim veniam quis nostrud",
        autoMake: "DS",
        year: "2010",
        fuel: "petrol",
        transmission: "Manual",
        autoVersion: "1.3",
        mileage: "4980",
        horsePower: "300HP",
        Drive: "4x4",
        price: "10,000,000",
        condition: "New",
        vin: "234HDGSGF34623",
        engine: "16000",
        doors: "2",
        seats: "5",
        color: "RED",
        interiorColor: "ORANGE",
        Warranty: "NO",
        url: offer5,
        heroStyle: "hero-style-left",
        productImages: [
            car8, offer1, offer2, offer3, offer5
        ],
    },
];




export { autoDatas }