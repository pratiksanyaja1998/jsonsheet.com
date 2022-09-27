import React from 'react';
import {Icon} from '../components';

const SolutionSignupSection = () => {
    return (
        <section className="sign-up-section pb-5" >
            <div className="container">
                <div className="grid grid-gap-small my-2">
                    <div className="cell-12 cell-md-5 cell-lg-4 my-2 order-md-first sign-up-section-text">
                        <h1 className="Sign-up-text">Start building in Json sheet today</h1>
                        <button className="btn btn--primary Sign-up-btn justify-md-center" onClick={() => window.open('https://app.jsonsheet.com/#/')}>
                            <Icon icon={'arrow-right'} />
                            <span className={'order-first'}>Signup for free</span>
                        </button>
                        <p className="mt-2 Sign-up-text">No credit card needed</p>
                    </div>
                    <div className="cell-12 cell-md-7 cell-lg-8 my-2 order-first ">
                        <img src="images/tab.png" className=" sign-up-section-img" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SolutionSignupSection;
