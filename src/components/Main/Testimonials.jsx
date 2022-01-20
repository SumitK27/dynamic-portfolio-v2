import React from "react";

function getStars(rating) {
    const stars = [];
    for (let i = 0; i < rating; i++) {
        stars.push(
            <li key={i}>
                <i className="fas fa-star" />
            </li>
        );
    }
    return stars;
}

const Testimonials = ({ testimonials }) => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12">
                    <div className="art-section-title">
                        <div className="art-title-frame">
                            <h4>Recommendations</h4>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div
                        className="swiper-container art-testimonial-slider"
                        style={{
                            overflow: "visible",
                        }}
                    >
                        <div className="swiper-wrapper">
                            {testimonials.map((testimonial) => (
                                <div
                                    key={`${testimonial.name}, ${testimonial.designation}`}
                                    className="swiper-slide"
                                >
                                    <div className="art-a art-testimonial">
                                        <div className="testimonial-body">
                                            <img
                                                className="art-testimonial-face"
                                                src={testimonial.image}
                                                alt="face"
                                            />
                                            <h5>{testimonial.name}</h5>
                                            <div className="art-el-suptitle mb-15">
                                                {testimonial.designation}
                                            </div>
                                            <div className="mb-15">
                                                {testimonial.review}
                                            </div>
                                        </div>
                                        <div className="art-testimonial-footer">
                                            <div className="art-left-side">
                                                <ul className="art-star-rate">
                                                    {getStars(
                                                        testimonial.rating
                                                    )}
                                                </ul>
                                            </div>
                                            <div className="art-right-side"></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="art-slider-navigation">
                        <div className="art-sn-left">
                            <div className="swiper-pagination" />
                        </div>
                        <div className="art-sn-right">
                            <div className="art-slider-nav-frame">
                                <div className="art-slider-nav art-testi-swiper-prev">
                                    <i className="fas fa-chevron-left" />
                                </div>
                                <div className="art-slider-nav art-testi-swiper-next">
                                    <i className="fas fa-chevron-right" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
