import FeedBackForm from "../Components/FeedBackForm";
import { formatDate } from "../utils/formatDate";
import { AiFillStar } from "react-icons/ai";
import { useState } from "react";
import avatar from "../assets/images/avatar-icon.png";

const DoctorFeedback = () => {
  const [showFeedBackForm, setShowFeedBackForm] = useState(false);

  return (
    <div>
      <div className="mb-[50px]">
        <h4 className="text-[20px] leading-[30px] font-bold text-[#181a1e] mb-[30px]">
          All reviews (272)
        </h4>

        <div className="flex justify-between gap-10 mb-[30px]">
          <div className="flex gap-3">
            <figure className="w-10 h-10 rounded-full">
              <img src={avatar} alt="img" className="w-full" />
            </figure>

            <div>
              <h5 className="text-base text-blue-600 font-bold">Ali ahmed</h5>

              <p className="text-sm text-textColor">
                {formatDate("02/17/2023")}
              </p>
              <p className="text_para mt-3 font-medium text-[15px]">
                Good services, highly recomended 👍
              </p>
            </div>
          </div>

          <div className="flex gap-1">
            {[...Array(5).keys()].map((_, index) => (
              <AiFillStar key={index} color="#0067FF" />
            ))}
          </div>
        </div>
      </div>

      {!showFeedBackForm && (
        <div className="text-center">
          <button className="btn" onClick={() => setShowFeedBackForm(true)}>
            Give Feedback
          </button>
        </div>
      )}

      {showFeedBackForm && <FeedBackForm />}
    </div>
  );
};

export default DoctorFeedback;
