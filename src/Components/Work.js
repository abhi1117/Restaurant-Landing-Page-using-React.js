import React from 'react'
import PickMeal from "../Assets/pick-meals-image.png";
import ChooseMeal from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";
import { BsFillPlayCircleFill } from 'react-icons/bs';


const Work = () => {
  const WorkInfoData =[
    {
        image: PickMeal,
        title:"Pick Meals",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet assumenda, ex aspernatur sequi maiores minima debitis cumque dolor, minus aut, exercitationem eligendi cum illum necessitatibus consequatur voluptatum alias voluptatem ipsa?", 
    },

    {
        image: ChooseMeal,
        title:"Choose how often",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet assumenda, ex aspernatur sequi maiores minima debitis cumque dolor, minus aut, exercitationem eligendi cum illum necessitatibus consequatur voluptatum alias voluptatem ipsa?", 
    },

    {
        image: DeliveryMeals,
        title:"Fast Deliveries",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet assumenda, ex aspernatur sequi maiores minima debitis cumque dolor, minus aut, exercitationem eligendi cum illum necessitatibus consequatur voluptatum alias voluptatem ipsa?", 
    }
  ];
  return <div className="work-section-wrapper">
        <div className="work-section-top">
            <p className="primary-subheading">Work</p>
            <h1 className="primary-heading">How It Works</h1>
            <p className= "primary-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi id numquam ut ea sit corporis ad ex praesentium dolorum obcaecati, quia, sapiente non adipisci harum ipsa sed rem aliquid natus.
            </p>
        </div>
        <div className="work-section-bottom">
            {
                WorkInfoData.map((data) => (
                    <div className="work-section-info">
                    <div className="info-boxes-img-container">
                        <img src={data.image} alt="" />
                        </div>
                        <h2>{data.title}</h2>
                        <p>{data.text}</p>
            </div>
           ))}

        </div>
  </div>
};

export default Work;
