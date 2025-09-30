import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  axios.defaults.withCredentials = true;

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('https://folio-backend-one.vercel.app/api/submit-form', {
        ...formData,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      const data = await response.data;
  
      if (data.success) {
        console.log('Form data submitted successfully!');
        setFormData({
            name: '',
            email: '',
            message: '',
          });
        toast.success('Thanks, I will reply ASAP!', {
            position: toast.POSITION.TOP_CENTER,
            style: {
                fontSize: '16px',
              },
              progressBarStyle: {
                background: '#e38528',
              },
          });
      } else {
        toast.error('There was an error submitting your message.', {
            position: toast.POSITION.TOP_CENTER,
          });
        console.error('Form submission failed.');
      }
    } catch (error) {
      console.error('Server error:', error);
      toast.error('Server error. Please try again later.', {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <section className=" px-10 py-20 px-20 sm:px-20 lg:px-15" id="contact">
        <div className=" mx-auto">
          <h1 className="heading mb-16" style={{ wordSpacing: '10px' }}>
            Get In <span>Touch</span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-700/50">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <FontAwesomeIcon icon={faEnvelope} className="text-white text-2xl" />
              </div>
              <h3 className="text-[17px] font-bold text-white mb-3">Email</h3>
              <p className="text-gray-300 mb-4 text-[17px]">Feel free to reach out anytime</p>
              <a 
                href="mailto:kirmadashukla@gmail.com" 
                className="text-[17px] text-yellow-400 hover:text-yellow-300 transition-colors duration-300 font-medium"
              >
                kirmadashukla@gmail.com
              </a>
            </div>

            <div className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-700/50">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <FontAwesomeIcon icon={faPhone} className="text-white text-2xl" />
              </div>
              <h3 className="text-[17px] font-bold text-white mb-3">Phone</h3>
              <p className="text-gray-300 mb-4 text-[17px]">Available during business hours</p>
              <a 
                href="https://wa.me/9302931857" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-[17px] text-yellow-400 hover:text-yellow-300 transition-colors duration-300 font-medium block"
              >
                +91 9302931857
              </a>
        
            </div>

            <div className="text-[17px] bg-gray-800/30 backdrop-blur-lg rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-700/50">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-white text-2xl" />
              </div>
              <h3 className="text-[17px] font-bold text-white mb-3">Location</h3>
              <p className="text-gray-300 mb-4">Open to opportunities worldwide</p>
              <p className="text-yellow-400 font-medium">Prayagraj, Uttar Pradesh</p>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-xl mb-16 h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230660.451880246!2d81.636771140177!3d25.402482059146426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398534c9b20bd49f%3A0xa2237856ad4041a!2sPrayagraj%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1693310502552!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: '0' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Location"
            ></iframe>
          </div>
        </div>
      </section>

     
    </>
  );
};

export default Contact;