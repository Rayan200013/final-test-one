// import { Link } from "@mui/material";
// import React from "react";
// import { useState, useEffect } from "react";
// import "owl.carousel/dist/assets/owl.carousel.css"; // Import Owl Carousel CSS
// import "owl.carousel/dist/assets/owl.theme.default.css"; // Import Owl Carousel default theme CSS
// import $ from "jquery"; // Import jQuery

// const Home = () => {
//   const [activeItem, setActiveItem] = useState(null);

//   const handleItemClick = (index) => {
//     setActiveItem(index === activeItem ? null : index);
//   };

//   useEffect(() => {
//     // Owl Carousel initialization
//     $(".custom-carousel").owlCarousel({
//       autoWidth: true,
//       loop: true,
//     });

//     // Click event for items
//     $(".custom-carousel .item").click(function () {
//       $(".custom-carousel .item").not($(this)).removeClass("active");
//       $(this).toggleClass("active");
//     });
//   }, []);

//   return (
//     <div className="carousel">
//       <div className="carousel__nav">
//         <span id="moveLeft" className="carousel__arrow">
//           <svg
//             className="carousel__icon"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//           >
//             <path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"></path>
//           </svg>
//         </span>
//         <span id="moveRight" className="carousel__arrow">
//           <svg
//             className="carousel__icon"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//           >
//             <path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path>
//           </svg>
//         </span>
//       </div>
//       <div className="carousel-item carousel-item--1">
//         <div className="carousel-item__image"></div>
//         <div className="carousel-item__info">
//           <div className="carousel-item__container">
//             <h2 className="carousel-item__subtitle">The grand moment</h2>
//             <h1 className="carousel-item__title">Le tour</h1>
//             <p className="carousel-item__description">
//               Sed ut perspiciatis unde omnis iste natus error sit voluptatem
//               accusantium doloremque laudantium, totam rem aperiam.
//             </p>
//             <Link to="#" className="carousel-item__btn">
//               Explore the tour
//             </Link>
//           </div>
//         </div>
//       </div>
//       <div className="carousel-item carousel-item--2">
//         <div className="carousel-item__image"></div>
//         <div className="carousel-item__info">
//           <div className="carousel-item__container">
//             <h2 className="carousel-item__subtitle">The big window</h2>
//             <h1 className="carousel-item__title">Minimal window</h1>
//             <p className="carousel-item__description">
//               Clear Glass Window With Brown and White Wooden Frame iste natus
//               error sit voluptatem accusantium doloremque laudantium.
//             </p>
//             <Link to="#" className="carousel-item__btn">
//               Read the article
//             </Link>
//           </div>
//         </div>
//       </div>
//       <div className="carousel-item carousel-item--3">
//         <div className="carousel-item__image"></div>
//         <div className="carousel-item__info">
//           <div className="carousel-item__container">
//             <h2 className="carousel-item__subtitle">Tropical palms</h2>
//             <h1 className="carousel-item__title">Palms</h1>
//             <p className="carousel-item__description">
//               Sed ut perspiciatis unde omnis iste natus error sit voluptatem
//               accusantium doloremque laudantium, totam rem aperiam.
//             </p>
//             <Link to="#" className="carousel-item__btn">
//               Explore the palms
//             </Link>
//           </div>
//         </div>
//       </div>
//       <div className="carousel-item carousel-item--4">
//         <div className="carousel-item__image"></div>
//         <div className="carousel-item__info">
//           <div className="carousel-item__container">
//             <h2 className="carousel-item__subtitle">Beach</h2>
//             <h1 className="carousel-item__title">The beach</h1>
//             <p className="carousel-item__description">
//               Sed ut perspiciatis unde omnis iste natus error sit voluptatem
//               accusantium doloremque laudantium, totam rem aperiam.
//             </p>
//             <Link to="#" className="carousel-item__btn">
//               Explore the beach
//             </Link>
//           </div>
//         </div>
//       </div>
//       <div className="carousel-item carousel-item--5">
//         <div className="carousel-item__image"></div>
//         <div className="carousel-item__info">
//           <div className="carousel-item__container">
//             <h2 className="carousel-item__subtitle">The white building</h2>
//             <h1 className="carousel-item__title">White building</h1>
//             <p className="carousel-item__description">
//               Sed ut perspiciatis unde omnis iste natus error sit voluptatem
//               accusantium doloremque laudantium, totam rem aperiam.
//             </p>
//             <Link to="#" className="carousel-item__btn">
//               Read the article
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;
