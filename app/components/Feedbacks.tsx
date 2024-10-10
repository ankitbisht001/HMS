import React from 'react'
import style from './Web.module.css'
import Image from 'next/image'
import { Stars } from './Images'


const feedbacks = [
  {
    user: 'Anurag,',
    feedback: 'Ahotel is renowned for its exceptional hospitality, service excellence, and affordable prices. Truly a top choice!'
  },
  {
    user: 'Anuj,',
    feedback: 'Ahotel stands out with its superb hospitality, outstanding service, and great value. An excellent experience!'
  },
  {
    user: 'Vinita,',
    feedback: 'Exceptional hospitality and top-notch service at Ahotel, combined with affordable rates. Highly recommend!'
  },
  {
    user: 'Himanshu,',
    feedback: 'Ahotel excels in hospitality and service, offering great value for money. It’s a must-visit for anyone!'
  },
  {
    user: 'Ankit,',
    feedback: 'Known for its fantastic hospitality and service excellence, Ahotel provides exceptional value. A true gem!'
  },
  {
    user: 'Kapil,',
    feedback: 'Ahotel delivers remarkable hospitality and service, all while being budget-friendly. An outstanding choice!'
  },
  {
    user: 'Riya,',
    feedback: 'Experience Ahotel’s superior hospitality and service excellence at unbeatable prices. An excellent stay!'
  },
  {
    user: 'Abdul,',
    feedback: 'For unparalleled hospitality, exceptional service, and great prices, Ahotel is the perfect destination!'
  }
];

const Feedbacks = () => {
  return (
    <div className={style.feedbacksParent}>
      {feedbacks.map((item, index) => (
        <div key={index} className={style.feedBox}>
          <h5 className={style.user}>{item.user}</h5>
          <p className={style.userFeedback}>{item.feedback}</p>
          <div className={style.rating}>
            <Image src={Stars} alt='rating' className={style.starRating} />
            <Image src={Stars} alt='rating' className={style.starRating} />
            <Image src={Stars} alt='rating' className={style.starRating} />
            <Image src={Stars} alt='rating' className={style.starRating} />
            <Image src={Stars} alt='rating' className={style.starRating} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Feedbacks;
