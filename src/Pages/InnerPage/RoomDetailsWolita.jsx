import { BsArrowLeft, BsArrowRight, BsCheck2 } from "react-icons/bs";
import BreadCrumb from "../../BreadCrumb/BreadCrumb";
import { useState } from "react";
import { FiLogOut } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const RoomDetailsWolita = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const location = useLocation();
  const bookingsData = location.state && location.state;

  const navigate = useNavigate();
  const images = [
    "images/welita/1D6A5488.jpg",
    "images/welita/1D6A5543.jpg",
    "images/welita/1D6A5683.jpg", 

  ];

  const prevBtn = () => {
    setImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };
  const nextBtn = () => {
    setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // booking alert message
  const setAlert = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You booking this rooms?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#008000",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, i want!",
      color: "#fff",
      background: "#c19d68",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Congratulation!",
          text: "Booking Successful!",
          icon: "success",
          background: "#c19d68",
          color: "#fff",
          confirmButtonColor: "#008000",
        });
        navigate("/");
      }
    });
  };
  return (
    <section className="">
      <BreadCrumb title="wolaita sodo Rooms" />

      {/* Room Details */}
      <div className="py-20 2xl:py-[120px] dark:bg-lightBlack">
        <div className="Container grid grid-cols-6 md:grid-cols-7 lg:grid-cols-6 gap-5 ">
          <div className="col-span-6 md:col-span-4">
            {/* Image custom slider */}
            <div
              className="overflow-hidden relative group "
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <img
                src={images[imageIndex]}
                alt=""
                className="transition-all duration-500 delay-300"
              />
              <div className="flex ">
                <span
                  className="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] bg-white dark:bg-lightBlack hover:bg-khaki dark:hover:bg-khaki grid items-center justify-center absolute bottom-[45%] left-[-50px] group-hover:left-4 lg:group-hover:left-6 transition-all duration-300 cursor-pointer"
                  onClick={() => prevBtn()}
                >
                  <BsArrowLeft
                    size={20}
                    className="text-lightBlack dark:text-white hover:text-white"
                  />
                </span>
                <span
                  className="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] bg-white dark:bg-lightBlack hover:bg-khaki dark:hover:bg-khaki grid items-center justify-center absolute bottom-[45%] right-[-50px] group-hover:right-4 lg:group-hover:right-6 transition-all duration-300 cursor-pointer"
                  onClick={() => nextBtn()}
                >
                  <BsArrowRight
                    size={20}
                    className="text-lightBlack dark:text-white hover:text-white"
                  />
                </span>
              </div>
            </div>
            {/* Room content */}
            <div className="pt-5 lg:pt-[35px]  pr-3">
              <p className="text-base font-Lora text-khaki">LUXURY ROOM</p>
              <h2
                className="py-2 sm:py-3 md:py-4 lg:py-[19px] 2xl:py-[25px] font-Garamond text-[22px] sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-[38px] 3xl:text-[40px] leading-6 lg:leading-[26px]  text-lightBlack dark:text-white font-semibold"
                data-aos="zoom-in-up"
                data-aos-duration="1000"
              >
                {bookingsData && bookingsData.title
                  ? bookingsData.title
                  : "wolaita sodo Rooms"}
              </h2>
              <p
                className="text-sm lg:text-base leading-6 text-gray dark:text-lightGray font-normal font-Lora"
                data-aos="zoom-in-up"
                data-aos-duration="1000"
              >
             
             Lewi Resort Sodo is located in Wolaita Sodo, Ethiopia. Nestled on over 54,000 square meters in the lush greenery of Wolaita, our resort blends the untouched beauty of Southern Ethiopia with authentic cultural hospitality. 
             With more than 95 rooms set amidst vibrant natural surroundings, the resort offers an immersive experience enriched by traditional Southern design, cuisine, and ambiance. 
             Whether you’re here for leisure or business, every detail is crafted to provide genuine comfort and a memorable stay.

              </p>
              <p
                className="mt-5 2xl:mt-7 text-sm lg:text-base leading-6 text-gray dark:text-lightGray font-normal font-Lora"
                data-aos="zoom-in-up"
                data-aos-duration="1000"
              >
                Rooms Each room includes a balcony with city views, a flat-screen TV, and a private bathroom equipped with a hot shower and hair dryer. Room amenities also include a fridge and Wifi.
                A restaurant and bar serving traditional Southern dishes and international options.
                A beautiful garden setting for relaxation and outdoor dining.
                Free WiFi available throughout the property.
                Private parking is available.

              </p>
              {/* Check-In and check-Out */}
              <div
                className="md:flex items-center flex-col md:flex-row md:justify-between py-10 lg:py-[60px]"
                data-aos="zoom-in-up"
                data-aos-duration="1000"
              >
                {/* check-in */}
                <div>
                  <div className="flex items-center space-x-2">
                    <FiLogOut className="text-khaki rotate-180" size={24} />
                    <h4 className="text-xl md:text-2xl lg:text-[26px] leading-[26px] font-Garamond text-lightBlack dark:text-white font-semibold ">
                      Check In
                    </h4>
                  </div>
                  <ul className="space-y-2 lg:space-y-3 mt-5 lg:mt-[30px]">
                    <li className="flex items-center">
                      <BsCheck2 size={16} className="text-khaki mr-2" />
                      <span className="text-sm lg:text-base leading-[26px] text-gray dark:text-lightGray font-normal font-Lora">
                        Check-in from 9:00 AM - anytime
                      </span>
                    </li>
                    <li className="flex items-center">
                      <BsCheck2 size={16} className="text-khaki mr-2" />
                      <span className="text-sm lg:text-base leading-[26px] text-gray dark:text-lightGray font-normal font-Lora">
                        Early check-in subject to availability
                      </span>
                    </li>
                  </ul>
                </div>
                {/* check-out */}
                <div className="mt-5 md:mt-0">
                  <div className="flex items-center space-x-2">
                    <FiLogOut className="text-khaki" size={24} />
                    <h4 className="text-xl md:text-2xl lg:text-[26px] leading-[26px] font-Garamond text-lightBlack dark:text-white font-semibold ">
                      Check Out
                    </h4>
                  </div>
                  <ul className="space-y-2 lg:space-y-3 mt-5 lg:mt-[30px]">
                    <li className="flex items-center">
                      <BsCheck2 size={16} className="text-khaki mr-2" />
                      <span className="text-sm lg:text-base leading-[26px] text-gray dark:text-lightGray font-normal font-Lora">
                        Check-out before noon
                      </span>
                    </li>
                    <li className="flex items-center">
                      <BsCheck2 size={16} className="text-khaki mr-2" />
                      <span className="text-sm lg:text-base leading-[26px] text-gray dark:text-lightGray font-normal font-Lora">
                        Check-out from 9:00 AM - anytime
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              {/* House Roles */}
              <div data-aos="zoom-in-up" data-aos-duration="1000">
                <h2
                  className="pb-2 sm:pb-3 md:pb-4 lg:pb-[19px] 2xl:pb-6
                font-Garamond text-[22px] sm:text-2xl md:text-3xl 2xl:text-[32px] leading-7 lg:leading-[26px] text-lightBlack dark:text-white font-semibold"
                >
                  Dining
                </h2>
                <p className="text-sm lg:text-base leading-6 text-gray dark:text-lightGray font-normal font-Lora">
                  Enjoy a diverse menu of local and international cuisine in our lakeside restaurant.
                - Main Restaurant: Serves breakfast, lunch, and dinner with indoor and outdoor seating options.
                - Bar & Lounge: Relax with your favorite drink while enjoying panoramic views of the lake.
                - Fresh Fish Specialties: Taste freshly caught tilapia and other regional favorites, prepared with a southern touch.
                </p>
              </div>
              {/* Childreen & Extra Beds */}
              <div
                className="pt-10 2xl:pt-[60px]"
                data-aos="zoom-in-up"
                data-aos-duration="1000"
              >
                <h2
                  className="pb-2 sm:pb-3 md:pb-4 lg:pb-[19px] 2xl:pb-6
                font-Garamond text-[22px] sm:text-2xl md:text-3xl 2xl:text-[32px] leading-7 lg:leading-[26px] text-lightBlack dark:text-white font-semibold"
                >
                  Local Attractions

                </h2>
                <p className="text-sm lg:text-base leading-6 text-gray dark:text-lightGray font-normal font-Lora mb-5 2xl:mb-[30px]">
                </p>
                <ul className="space-y-2 lg:space-y-3 ">
                  <li className="flex items-center">
                    <BsCheck2 size={16} className="text-khaki mr-2" />
                    <span className="text-sm lg:text-base leading-[26px] text-gray dark:text-lightGray font-normal font-Lora">
                      Amora Gedel Park: A nearby green space ideal for walking and picnics.
                    </span>
                  </li>
                  <li className="flex items-center">
                    <BsCheck2 size={16} className="text-khaki mr-2" />
                    <span className="text-sm lg:text-base leading-[26px] text-gray dark:text-lightGray font-normal font-Lora">
                      Fish Market: A lively local experience where fresh fish is caught, sold, and cooked on the spot.
                    </span>
                  </li>
                  <li className="flex items-center">
                    <BsCheck2 size={16} className="text-khaki mr-2" />
                    <span className="text-sm lg:text-base leading-[26px] text-gray dark:text-lightGray font-normal font-Lora">
                      Sidama Cultural Sites: Discover the traditions, music, and history of the Sidama people.
                    </span>
                  </li>
                  <li className="flex items-center">
                    <BsCheck2 size={16} className="text-khaki mr-2" />
                    <span className="text-sm lg:text-base leading-[26px] text-gray dark:text-lightGray font-normal font-Lora">
                  Lake Hawassa: Take a boat ride, birdwatch, or stroll along the lake promenade.
                    
                    </span>
                  </li>
                   <li className="flex items-center">
                    <BsCheck2 size={16} className="text-khaki mr-2" />
                    <span className="text-sm lg:text-base leading-[26px] text-gray dark:text-lightGray font-normal font-Lora">

                    </span>
                  </li>
                   <li className="flex items-center">
                    <BsCheck2 size={16} className="text-khaki mr-2" />
                    <span className="text-sm lg:text-base leading-[26px] text-gray dark:text-lightGray font-normal font-Lora">


                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="col-span-6 md:col-span-3 lg:col-span-2">
            {/* booking details sidebar */}
            <div>
              <div className=" bg-whiteSmoke dark:bg-normalBlack px-7 py-8 md:px-8 md:py-10 lg:px-9 lg:py-11 2xl:px-10 2xl:pt-[45px] 2xl:pb-[30px] grid-flow-row-dense">
                <h4 className="font-Garamond text-xl sm:text-[22px] md:text-2xl xl:text-3xl leading-7 md:leading-8 lg:leading-10 xl:leading-[50px] 2xl:leading-[60px] 3xl:leading-[70px] text-lightBlack dark:text-white font-semibold mb-4">
                  Booking
                </h4>
                <div
                  className="grid items-center gap-[18px] "
                  data-aos="zoom-in-up"
                  data-aos-duration="1000"
                >
                  <div className="bg-white dark:bg-lightBlack h-10 lg:h-[50px] 2xl:h-[56px] grid items-center justify-start px-3 sm:px-5 2xl:px-6 ">
                    <p className="text-sm md:text-[15px] leading-[26px] font-Lora font-medium text-lightBlack dark:text-white">
                      Check In -{" "}
                      <span className="text-khaki">
                        {bookingsData && bookingsData.selectedInDate
                          ? new Date(bookingsData.selectedInDate)
                              .toDateString()
                              .slice(4)
                          : new Date().toDateString().slice(4)}
                      </span>
                    </p>
                  </div>
                  <div className="bg-white dark:bg-lightBlack h-10 lg:h-[50px] 2xl:h-[56px] grid items-center justify-start px-3 sm:px-5 2xl:px-6">
                    <p className="text-sm md:text-[15px] leading-[26px] font-Lora font-medium text-lightBlack dark:text-white">
                      Check Out -{" "}
                      <span className="text-khaki">
                        {bookingsData && bookingsData.selectedOutDate
                          ? new Date(bookingsData.selectedOutDate)
                              .toDateString()
                              .slice(4)
                          : new Date(
                              new Date().setDate(new Date().getDate() + 3)
                            )
                              .toDateString()
                              .slice(4)}
                      </span>{" "}
                    </p>
                  </div>
                  <div className="bg-white dark:bg-lightBlack h-10 lg:h-[50px] 2xl:h-[56px] grid items-center justify-start px-3 sm:px-5 2xl:px-6">
                    <p className="text-sm md:text-[15px] leading-[26px] font-Lora font-medium text-lightBlack dark:text-white">
                      Adult -{" "}
                      <span className="text-khaki">
                        0
                        {bookingsData && bookingsData.adult
                          ? bookingsData.adult
                          : "2"}
                      </span>{" "}
                    </p>
                  </div>
                  <div className="bg-white dark:bg-lightBlack h-10 lg:h-[50px] 2xl:h-[56px] grid items-center justify-start px-3 sm:px-5 2xl:px-6">
                    <p className="text-sm md:text-[15px] leading-[26px] font-Lora font-medium text-lightBlack dark:text-white">
                      Children -{" "}
                      <span className="text-khaki">
                        0
                        {bookingsData && bookingsData.children
                          ? bookingsData.children
                          : "1"}
                      </span>{" "}
                    </p>
                  </div>
                  <div className="bg-white dark:bg-lightBlack h-10 lg:h-[50px] 2xl:h-[56px] grid items-center justify-start px-3 sm:px-5 2xl:px-6">
                    <p className="text-sm md:text-[15px] leading-[26px] font-Lora font-medium text-lightBlack dark:text-white">
                      Rooms -{" "}
                      <span className="text-khaki">
                        0
                        {bookingsData && bookingsData.room
                          ? bookingsData.room
                          : "1"}
                      </span>{" "}
                    </p>
                  </div>
                </div>
              </div>

              <div className="py-5">
                <button
                  className="bg-khaki w-full h-10 2xl:h-[50px] text-white font-Lora font-semibold px-5 hover-animBg after:rounded-none after:bg-normalBlack"
                  onClick={() => setAlert()}
                >
                  Confirm Booking
                </button>
              </div>
            </div>

            {/* Amenities */}
            <div
              className="mt-3 sm:mt-4 md:mt-5 lg:mt-6"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <h4 className="font-Garamond text-xl sm:text-[22px] md:text-2xl xl:text-3xl leading-7 md:leading-8 lg:leading-10 xl:leading-[50px] 2xl:leading-[60px] 3xl:leading-[70px] text-lightBlack dark:text-white font-semibold mb-6">
                Amenities
              </h4>
              <div className="grid items-center ">
                <div className="flex items-center py-5 border-b-[1px] border-lightGray dark:border-gray">
                  <img
                    src="/images/inner/room-amenities-1.png"
                    className="text-khaki mr-2 md:mr-3 xl:mr-[15px]"
                  />
                  <span className="text-sm lg:text-[15px] leading-[26px] text-gray dark:text-lightGray font-normal font-Lora">
                    Max person 4
                  </span>
                </div>
                <div className="flex items-center py-5 border-b-[1px] border-lightGray dark:border-gray">
                  <img
                    src="/images/inner/room-amenities-2.png"
                    className="text-khaki mr-2 md:mr-3 xl:mr-[15px]"
                  />
                  <span className="text-sm lg:text-[15px] leading-[26px] text-gray dark:text-lightGray font-normal font-Lora">
                    Free WiFi Available
                  </span>
                </div>
                <div className="flex items-center py-5 border-b-[1px] border-lightGray dark:border-gray">
                  <img
                    src="/images/inner/room-amenities-3.png"
                    className="text-khaki mr-2 md:mr-3 xl:mr-[15px]"
                  />
                  <span className="text-sm lg:text-[15px] leading-[26px] text-gray dark:text-lightGray font-normal font-Lora">
                    Swimming Pools
                  </span>
                </div>
                <div className="flex items-center py-5 border-b-[1px] border-lightGray dark:border-gray">
                  <img
                    src="/images/inner/room-amenities-4.png"
                    className="text-khaki mr-2 md:mr-3 xl:mr-[15px]"
                  />
                  <span className="text-sm lg:text-[15px] leading-[26px] text-gray dark:text-lightGray font-normal font-Lora">
                    Breakfast
                  </span>
                </div>
                <div className="flex items-center py-5 border-b-[1px] border-lightGray dark:border-gray">
                  <img
                    src="/images/inner/room-amenities-5.png"
                    className="text-khaki mr-2 md:mr-3 xl:mr-[15px]"
                  />
                  <span className="text-sm lg:text-[15px] leading-[26px] text-gray dark:text-lightGray font-normal font-Lora">
                    250 SQFT Rooms
                  </span>
                </div>
                <div className="flex items-center py-5 ">
                  <img
                    src="/images/inner/room-amenities-6.png"
                    className="text-khaki mr-2 md:mr-3 xl:mr-[15px]"
                  />
                  <span className="text-sm lg:text-[15px] leading-[26px] text-gray dark:text-lightGray font-normal font-Lora">
                    Gym facilities
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomDetailsWolita;
