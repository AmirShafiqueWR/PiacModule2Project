import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa"; // Importing icons from react-icons

const ContactSection: React.FC = () => {
  return (
    <section className="bg-white px-20 py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="text-lg mb-8">We'd love to hear from you anytime!</p>
      </div>
      <div className="container mx-auto flex flex-wrap justify-center items-center">
        <div className="w-full md:w-1/2 p-4">
          <div className="p-6 h-full">
            <div className="mb-6 flex items-center">
              <FaEnvelope className="inline-block w-6 h-6 mr-2 text-red-600" />{" "}
              {/* Email icon */}
              <span className="font-bold">Email:</span>{" "}
              <a
                href="mailto:info@iqbalricemills.com"
                className="text-blue-500 underline"
              >
                info@iqbalricemills.com
              </a>
            </div>
            <div className="mb-6 flex items-center">
              <FaPhoneAlt className="inline-block w-6 h-6 mr-2 text-red-600" />{" "}
              {/* Phone icon */}
              <span className="font-bold">Phone:</span> +92-47-6331534, 6332724
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="inline-block w-6 h-6 mr-2 text-red-600" />{" "}
              {/* Location icon */}
              <span className="font-bold">Address:</span> 3 Km Faisalabad Road,
              Chiniot, Punjab, Pakistan
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-4">
        <iframe 
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d319846.1287746409!2d72.9958681!3d31.6959533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39223c7ffab363fd%3A0x7325016141576a45!2sIqbal%20Rice%20Mills%20%28Pvt.%29%20LIMITED!5e0!3m2!1sen!2sus!4v1695244153305!5m2!1sen!2sus"
  className="w-full h-96 rounded-lg shadow-lg" 
  allowFullScreen={false}
  loading="lazy" 
  title="Office Location">
</iframe>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
