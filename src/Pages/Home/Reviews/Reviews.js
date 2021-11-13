import React, { useEffect, useState } from 'react';
import Reviewing from '../Reviewing/Reviewing';

const Reviews = () => {
    const [reviews,setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/review')
        .then(res => res.json())
        .then(data => setReviews(data))
        
    }, [])
    return (
        <div>
            <h1 className="m-5 text-dark fw-bolder">Customer Review</h1>
              <div className="trendyProductStyle">
                  {
                      reviews.map(review => <Reviewing
                        key={review._id}
                        sendReview={review}
                      >
                      </Reviewing>)
                  }
              </div>
        </div>
    );
};

export default Reviews;