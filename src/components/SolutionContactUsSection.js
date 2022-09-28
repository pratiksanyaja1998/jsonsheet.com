import React from 'react'
import {Icon} from '../components';
import { useRouter } from 'next/router'

const SolutionContactUsSection = (props) => {
    const router = useRouter()
  return (
    <div className="contact-us-section py-5">
    <div className="container">
        <div className="grid grid-gap-small my-2">
            <div className="cell-12 cell-sm-12 cell-md-8 cell-lg-8 my-2">
                <h2 className="title">{props.title}</h2>
            </div>
            <div className="cell-12 cell-sm-12 cell-md-4 cell-lg-4 my-2 contact-us-section-title ">
                <div className="text-center">
                    <button
                        className="btn btn--primary contact-us-btn"
                        onClick={() => {
                            router.push('https://jsonsheet.com/contact-us');
                        }}
                    >
                        <Icon icon={'arrow-right'} />
                        <span className={'order-first'}>Contact Us</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default SolutionContactUsSection