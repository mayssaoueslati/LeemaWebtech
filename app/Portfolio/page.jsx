"use client";
import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, CardColumns } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './portfolio.css';

const Portfolio = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // Fetch card data from your API
    fetch('http://localhost:5001/api/portfolio') // Ensure the URL is correct
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => setCards(data))
      .catch((error) => console.error('Error fetching card data:', error));
  }, []);

  return (
    <div>
      <NavBar />
      <h1 className="titlep">References</h1>
      <div className="p1">
        <p className="textp">Explore the milestones of our journey</p>
        <p className="textp1">Here are some of the projects we've crafted with passion and precision, showcasing our commitment to excellence.</p>
      </div>
      <CardColumns>
        {cards.map((card, index) => (
          <Card key={index} data-aos="fade-up">
            <CardImg alt="Card image cap" src={card.imageSrc} top width="100%" />
            <CardBody>
              <CardTitle tag="h5">{card.title}</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                {card.subtitle}
              </CardSubtitle>
              <CardText>{card.text}</CardText>
            </CardBody>
          </Card>
        ))}
      </CardColumns>
      <Footer />
    </div>
  );
};

export default Portfolio;
