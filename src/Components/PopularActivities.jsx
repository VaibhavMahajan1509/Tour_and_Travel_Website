import React from "react";
import styles from "./PopularActivities.module.css";

const activities = [
  {
    id: 1,
    title: "Discover Singapore",
    location: "European Way, Southampton, United Kingdom",
    image: "/popularactivite1.png",
    rating: 3,
    reviews: 5,
    oldPrice: 100,
    newPrice: 92,
    duration: "5 days - 4 nights",
    tags: ["Escorted Tour", "Rail Tour"],
  },
  {
    id: 2,
    title: "Kiwiana Panorama",
    location: "European Way, Southampton, United Kingdom",
    image: "/popularactivite2.jpg",
    rating: 4,
    reviews: 9,
    oldPrice: 87,
    newPrice: 82,
    duration: "2 days - 1 night",
    tags: ["River Cruise", "Wildlife"],
  },
  {
    id: 3,
    title: "Anchorage To Quito",
    location: "European Way, Southampton, United Kingdom",
    image: "/popularactivite3.jpg",
    rating: 4,
    reviews: 9,
    oldPrice: 87,
    newPrice: 82,
    duration: "2 days - 1 night",
    tags: ["Escorted Tour", "River Cruise"],
  },
  {
    id: 4,
    title: "Anchorage To La Paz",
    location: "European Way, Southampton, United Kingdom",
    image: "/popularactivite4.jpg",
    rating: 5,
    reviews: 20,
    oldPrice: null,
    newPrice: 434,
    duration: "Unlimited",
    tags: ["River Cruise", "Rail Tour"],
  },
  {
    id: 5,
    title: "Exotic Maldives",
    location: "European Way, Southampton, United Kingdom",
    image: "/popularactivite5.jpg",
    rating: 4.5,
    reviews: 15,
    oldPrice: 200,
    newPrice: 180,
    duration: "7 days - 6 nights",
    tags: ["Beach", "Luxury"],
  },
  {
    id: 6,
    title: "Santorini Escape",
    location: "European Way, Southampton, United Kingdom",
    image: "/popularactivite6.jpg",
    rating: 4.8,
    reviews: 12,
    oldPrice: 250,
    newPrice: 230,
    duration: "5 days - 4 nights",
    tags: ["Honeymoon", "Luxury"],
  },
  {
    id: 7,
    title: "African Safari",
    location: "European Way, Southampton, United Kingdom",
    image: "/popularactivite7.jpg",
    rating: 4.7,
    reviews: 18,
    oldPrice: 300,
    newPrice: 280,
    duration: "6 days - 5 nights",
    tags: ["Wildlife", "Adventure"],
  },
  {
    id: 8,
    title: "Paris Getaway",
    location: "European Way, Southampton, United Kingdom",
    image: "/popularactivite8.jpg",
    rating: 5,
    reviews: 25,
    oldPrice: 150,
    newPrice: 130,
    duration: "3 days - 2 nights",
    tags: ["City Tour", "Romantic"],
  },
];

const ActivityCard = ({ activity }) => {
  return (
    <div className={styles.card}>
      <img src={activity.image} alt={activity.title} className={styles.image} />
      <div className={styles.content}>
        <p className={styles.location}>{activity.location}</p>
        <h5>{activity.title}</h5>
        <p className={styles.rating}>⭐ {activity.rating} ({activity.reviews} reviews)</p>
        <div className={styles.tags}>
          {activity.tags.map((tag, index) => (
            <span key={index} className={styles.tag}>{tag}</span>
          ))}
        </div>
        {activity.oldPrice && <p className={styles.oldPrice}>${activity.oldPrice}</p>}
        <p className={styles.newPrice}>From ${activity.newPrice}</p>
        <p className={styles.duration}>⏳ {activity.duration}</p>
      </div>
    </div>
  );
};

const PopularActivities = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Popular Activities</h2>
      <div className={styles.grid}>
        {activities.map((activity) => (
          <ActivityCard key={activity.id} activity={activity} />
        ))}
      </div>
    </div>
  );
};

export default PopularActivities;
