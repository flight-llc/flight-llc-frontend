import { FC } from 'react';

export const ContactUs: FC = () => {
    return (
        <div className="w-full bg-white text-black flex justify-center">
            <div className="w-3/5 my-8">
                <p className="text-center uppercase text-[#6E7491] text-lg font-semibold my-8">Contact us</p>

                <div className="text-[#6E7491] text-center text-sm py-8">
                    <p>Our travel specialists, who are fully committed to providing excellent service,
                        are available to help with all of your travel requirements or inquiries.
                        Regardless of your starting point or desired destination,
                        we can make your journey comfortable and convenient at a discount of 15-40%.
                        Please complete the form below and a representative will reach out to you promptly.
                    </p>

                    <section className="w-full flex justify-center">
                        <form className="w-1/2 my-12">
                            <input type="email"
                                className="w-full outline-none border text-sm border-[#A1B0CC] p-2.5 mb-4"
                                placeholder="Email" />
                            <br />
                            <input type="text"
                                placeholder="Your name"
                                className="w-full outline-none border text-sm border-[#A1B0CC] p-2.5 mb-4" />
                            <br />
                            <input
                                type="text"
                                placeholder="Phone number"
                                className="w-full outline-none border text-sm border-[#A1B0CC] p-2.5 mb-4" />
                            <br />
                            <textarea rows={4}
                                placeholder="Message"
                                className="w-full outline-none border text-sm border-[#A1B0CC] p-2.5 mb-4" />
                            <br />
                            <div className="w-full flex justify-start gap-2">
                                <input
                                    type="checkbox"
                                    value={""}
                                    id="sms" />
                                <label htmlFor="sms" className="text-sm text-[#A1B0CC]">
                                    Send price quotes by SMS
                                </label>
                            </div>
                            <br />
                            <input
                                type="Submit"
                                value="Contact us"
                                className="w-full outline-none capitalize bg-[#0C68BE] cursor-pointer text-white p-2.5 mb-4" />
                        </form>
                    </section>

                    <section className="flex justify-center">
                        <div className="w-full">
                            <div className="w-px h-12 bg-[#6E7491] mx-auto mb-8" />
                            <p className="text-center text-xs">24/7 CUSTOMER SERVICE&emsp;<strong>+1 310 749 56 56</strong></p>

                            <div className="text-xs my-16 text-center">
                                <p>
                                    *Price shown is a Round Trip fare in business class per person and based on weekday travel (Monday-Thursday).
                                    The price is total includes all taxes and fees and is in USD.
                                    The fares will vary based on class of travel availability, airline and city of departure.
                                    Business-Class.com will not identify all travel partners or details
                                    so not to compete with retail sales of our partners. Savings up to 40%
                                    off are based on un-restricted fares of major airlines and can vary depending on the fare rules.
                                    All fares are non-refundable and cannot be exchanged or transferred.
                                    Please call us directly to check the most current prices and availability.
                                    Other restrictions may apply. All fares are subject to change until ticketed.
                                    FREE EXCHANGE - our agreement with all major Carriers is to shelter passengers from the inconvenience of COVID-19
                                    related delays and cancellations. If the travel is to/from one of these affected areas,
                                    passenger may be eligible to reschedule with no change fee within
                                    the limitations of those policies.
                                    Fare and/or tax difference may apply.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}