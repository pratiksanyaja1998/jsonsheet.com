import React, { useState } from 'react';
import { sourcebitDataClient } from 'sourcebit-target-next';
import { toast } from 'react-toastify';
import { Layout } from '../components';
import { SubmitButton } from '../components';
import _ from 'lodash';
import axios from 'axios';

const ContactUs = (props) => {
    const data = _.get(props, 'data');
    const config = _.get(data, 'config');

    const [loading, setLoading] = useState(false);
    const [detail, setDetail] = useState({
        name: '',
        email: '',
        query: '',
        message: ''
    });

    let handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        console.log(detail);

        try {
            axios
                .post('https://api.whitelabelapp.in/lookup/inquiry/create', {
                    name: detail.name,
                    email: detail.email,
                    query: detail.query,
                    message: detail.message
                })
                .then(function (response) {
                    console.log('res', response);

                    toast.success('Request successfull', {
                        position: 'top-center',
                        autoClose: 5000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: 'dark'
                    });
                    setDetail({ name: '', email: '', query: '', message: '' });
                    setLoading(false);
                })
                .catch(function (error) {
                    console.log(error);
                    setDetail({ name: '', email: '', query: '', message: '' });
                    setLoading(false);
                    toast.error('Request faill', {
                        position: 'bottom-left',
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined
                    });
                });
        } catch (err) {
            console.log(err);
        }
    };

    const handleChange = (event) => {
        setDetail({ ...detail, [event.target.name]: event.target.value });
    };
    console.log(detail);
    return (
        <Layout
            page={{
                title: 'Contact-us',
                seo: {
                    title: 'Contact-us',
                    description: 'Contact-us page'
                },
                layout: 'page'
            }}
            config={config}
        >
            <main id="contactUs" className="site-content contact-root">
                <section className="section features bg-none py-5 py-sm-6 contact-root">
                    <div className="container container--medium">
                        <div className="text-center">
                            <h2 className="section__title mt-0">Get in Touch with us</h2>
                            <div className="section__subtitle">Need an expert? You’re welcome to leave your contact info and we’ll get in touch shortly.</div>
                        </div>
                        <div className="item_content grid mt-5">
                            <div className="cell-12 cell-md-6 ">
                                <div className="item card  card--vert contact-card">
                                    <div className="mx-5 my-5" style={{ color: 'white' }}>
                                        <div className="text-center my-5">
                                            <h5 style={{ fontWeight: 'normal', marginTop: '40px' }}>Contact Us</h5>
                                        </div>
                                        <div>
                                            <div>
                                                <p style={{ fontSize: '16px' }}>Email : admin@spyhunteritsolution.in</p>
                                            </div>
                                        </div>
                                        <div>
                                            <div style={{ fontSize: '16px' }}>
                                                <p style={{ fontSize: '16px' }}>
                                                    Address : Spyhunter It Solution
                                                    <br />
                                                    104-Global Point,
                                                    <br />
                                                    Sarthana Jakat Naka,
                                                    <br />
                                                    Surat, India
                                                    <br />
                                                </p>
                                            </div>
                                        </div>
                                        <div>
                                            <iframe
                                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1859.46925209965!2d72.90466784453756!3d21.234287029194064!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0475a8b4f9c41%3A0x73cbbce6635f7c29!2sSpyhunter%20IT%20Solution!5e0!3m2!1sen!2sin!4v1655707539248!5m2!1sen!2sin"
                                                frameBorder="0"
                                                style={{ height: 200, width: '100%' }}
                                                allowfullscreen
                                                loading="lazy"
                                            ></iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cell-12 cell-md-6 ">
                                <div className="item card  card--vert">
                                    <form className="mx-5 my-5 form_data" onSubmit={handleSubmit}>
                                        <div className="mb-3">
                                            <lable> Name</lable>
                                            <input
                                                type="text"
                                                name="name"
                                                className="input-style"
                                                value={detail.name}
                                                placeholder="Enter Your Name"
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label style={{ fontWeight: 0 }}> Email</label>
                                            <input
                                                type="email"
                                                name="email"
                                                className="input-style"
                                                value={detail.email}
                                                placeholder="Enter Your Email"
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label>Query</label>
                                            <input
                                                type="text"
                                                name="query"
                                                className="input-style"
                                                value={detail.query}
                                                placeholder="Enter Your Query"
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label>Message</label>
                                            <textarea
                                                name="message"
                                                className="input-style"
                                                style={{ resize: 'none' }}
                                                value={detail.message}
                                                placeholder="Enter Your Message"
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>

                                        <div className="mb-3 text-center">
                                            <SubmitButton title="INQUIERY NOW" onPressButton={() => {}} loading={loading} />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    );
};
export async function getStaticProps({ params }) {
    // console.log('Page [...slug].js getStaticProps, params: ', params);
    // const pagePath = '/' + (params.slug ? params.slug.join('/') : '');
    const props = await sourcebitDataClient.getStaticPropsForPageAtPath('');
    return { props };
}
export default ContactUs;
