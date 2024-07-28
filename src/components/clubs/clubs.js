import * as React from "react"
import {graphql, useStaticQuery} from "gatsby"
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import Slider from 'react-slick';
import {useEffect, useState} from "react";
import mockCarouselData from '../../data/mockClubsData';


const Clubs = () => {

    const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "clubs" } }) {
        edges {
          node {
            relativePath
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, width: 110, height: 110)
            }
          }
        }
      }
    }
  `);

    const [carouselItems, setCarouselItems] = useState([]);

    useEffect(() => {
        // Simulate API call with mock data
        const fetchCarouselItems = async () => {
            try {
                // Simulate a delay
                await new Promise(resolve => setTimeout(resolve, 1000));
                setCarouselItems(mockCarouselData);
            } catch (error) {
                console.error('Error fetching carousel items:', error);
            }
        };

        fetchCarouselItems();
    }, []);

    const images = data.allFile.edges.reduce((acc, {node}) => {
        acc[node.relativePath.split('/').pop()] = getImage(node.childImageSharp);
        return acc;
    }, {});

    const settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 768, // Adjust this value based on your mobile breakpoint
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div className="carousel-container">
            <Slider {...settings}>
                {carouselItems.map((item, index) => (
                    <div key={index} className="d-flex flex-column align-items-center text-center">
                        <a href={item.extraLink} target="_blank" rel="noopener noreferrer"
                           className="d-flex flex-column align-items-center text-center text-decoration-none text-body">
                            {images[item.imageName] && (
                                <GatsbyImage image={images[item.imageName]}
                                             alt={item.title}
                                             className="rounded-circle mb-3"
                                             imgStyle={{width: 110, height: 110}}
                                />
                            )}
                            <div className="text w-100">
                                <h3 className="fs-5 fw-medium mb-2 m-0 ">{item.title}</h3>
                            </div>
                        </a>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default Clubs
