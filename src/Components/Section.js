import React, { useEffect, useState } from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import Text from "./Text";

const Section = () => {
  const [images, setImages] = useState();

  useEffect(() => {
    fetch("./images.json")
      .then(res => res.json())
      .then((data) => {
        console.log(data);
        setImages(data);
      });
  }, []);

  return (
    <div className="mx-8">
      <div>
        <p className="text-4xl font-bold">
          Summer Art Camp! 5 days of Artists and Painting Monet,
        </p>
        <p className="text-4xl font-bold">Van Gogh, Matisse, & More</p>
        <p className="text-lg flex justify-items-center items-center text-gray-400 my-4">
          Multi-Day Course
          <AiOutlineQuestionCircle className="ml-3" />
        </p>
      </div>
      <div className="grid grid-cols-2">
        <div>
          <Text></Text>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-red-500 rounded-tl-lg object-cover">
            <img className="" src={images[0].image1} alt="" />
          </div>
          <div className="grid gap-2">
            <div className="bg-red-300 rounded-tr-lg">
            <img src={images[0].image2} alt="" />
            </div>
            <div className="bg-red-800">
            <img src={images[0].image3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
