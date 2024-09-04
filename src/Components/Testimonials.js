import React from 'react'
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";


const Testimonials = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 classNme="primary-heading">
          What They Are Saying
        </h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet id atque consequuntur obcaecati, vitae mollitia expedita, aut assumenda nihil iusto totam doloremque quod omnis aliquam cupiditate accusamus. Sint, deleniti labore.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat accusamus animi nihil, alias numquam eos quae cumque aliquid et delectus quasi libero rem blanditiis, soluta nostrum quos, unde officia. Dolorum?
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Jhon Doe</h2>
      </div>
    </div>
  );
};

export default Testimonials;
