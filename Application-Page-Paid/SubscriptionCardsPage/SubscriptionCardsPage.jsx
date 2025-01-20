import React, { useState } from 'react';
import CountUp from 'react-countup';

const SubscriptionPricingPage = () => {
    const [activeTab, setActiveTab] = useState('Monthly');
    const [showMonthly, setShowMonthly] = useState(true);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        setShowMonthly(tab === 'Monthly');
    };

    return (
        <div className='flex flex-col items-center justify-center h-auto font-primarylw'>
            <div className="text-center max-w-5xl mx-auto py-10">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">
                    Choose Your Perfect Plan
                </h1>
                <p className="mt-4 text-lg text-gray-600">
                    Discover flexible subscription plans tailored to meet your business needs. Whether you're a small startup or a growing enterprise, we've got you covered with affordable and feature-packed plans.
                </p>
            </div>

            {/* Tab for Monthly or Annual Plans */}
            <div className="relative flex items-center justify-between w-64 gap-2 rounded-lg border border-gray-400 bg-white h-12 px-2 shadow-md">
                <div
                    className="absolute h-10 rounded-lg bg-primarylw-2 duration-300"
                    style={{
                        left: activeTab === 'Monthly' ? '0' : '50%',
                        width: '50%',
                    }}
                />
                <button
                    className={`z-10 flex items-center justify-center w-full h-12 text-lg font-semibold relative transition-colors duration-300 ${activeTab === 'Monthly' ? 'text-white' : 'text-gray-700'}`}
                    onClick={() => handleTabClick('Monthly')}
                >
                    Monthly
                </button>
                <button
                    className={`z-10 flex items-center justify-center w-full h-12 text-lg font-semibold relative transition-colors duration-300 ${activeTab === 'Annual' ? 'text-white' : 'text-gray-700'}`}
                    onClick={() => handleTabClick('Annual')}
                >
                    Annual
                </button>
            </div>

            {/* Subscription Plans */}
            <div className="mt-16 grid gap-10 sm:grid-cols-1 lg:grid-cols-3 max-w-7xl mx-auto">
                {/* Basic Plan */}
                <div className="p-8 border border-gray-200 rounded-xl shadow-lg bg-white">
                    <h2 className="text-2xl font-bold text-gray-800 text-center">Basic Plan</h2>
                    <p className="mt-2 text-center text-gray-600">Perfect for freelancers and startups.</p>
                    <div className="mt-6 flex items-center justify-center">
                        <p className="text-4xl font-bold text-gray-800">
                            <CountUp start={0} end={showMonthly ? 19 : 199} duration={1} prefix="$" />
                        </p>
                        <span className="text-gray-600 ml-2">{showMonthly ? '/month' : '/year'}</span>
                    </div>
                    <ul className="mt-6 space-y-4 text-gray-700">
                        <li>✔ Access to all basic features</li>
                        <li>✔ 10 GB of cloud storage</li>
                        <li>✔ Email support</li>
                        <li>✔ Single user access</li>
                    </ul>
                    <a href="#subscribe" className="block mt-6 px-6 py-3 text-center bg-primarylw-2 text-white rounded-lg shadow hover:bg-primarylw transition-colors duration-300">
                        Subscribe Now
                    </a>
                </div>

                {/* Professional Plan */}
                <div className="p-8 border border-gray-200 rounded-xl shadow-lg bg-white">
                    <h2 className="text-2xl font-bold text-gray-800 text-center">Professional Plan</h2>
                    <p className="mt-2 text-center text-gray-600">Ideal for growing teams and small businesses.</p>
                    <div className="mt-6 flex items-center justify-center">
                        <p className="text-4xl font-bold text-gray-800">
                            <CountUp start={0} end={showMonthly ? 49 : 499} duration={1} prefix="$" />
                        </p>
                        <span className="text-gray-600 ml-2">{showMonthly ? '/month' : '/year'}</span>
                    </div>
                    <ul className="mt-6 space-y-4 text-gray-700">
                        <li>✔ All features in Basic Plan</li>
                        <li>✔ 50 GB of cloud storage</li>
                        <li>✔ Priority email and chat support</li>
                        <li>✔ Multi-user access (up to 5 users)</li>
                    </ul>
                    <a href="#subscribe" className="block mt-6 px-6 py-3 text-center bg-primarylw-2 text-white rounded-lg shadow hover:bg-primarylw transition-colors duration-300">
                        Subscribe Now
                    </a>
                </div>

                {/* Enterprise Plan */}
                <div className="p-8 border border-gray-200 rounded-xl shadow-lg bg-white">
                    <h2 className="text-2xl font-bold text-gray-800 text-center">Enterprise Plan</h2>
                    <p className="mt-2 text-center text-gray-600">Designed for large teams and organizations.</p>
                    <div className="mt-6 flex items-center justify-center">
                        <p className="text-4xl font-bold text-gray-800">
                            <CountUp start={0} end={showMonthly ? 99 : 999} duration={1} prefix="$" />
                        </p>
                        <span className="text-gray-600 ml-2">{showMonthly ? '/month' : '/year'}</span>
                    </div>
                    <ul className="mt-6 space-y-4 text-gray-700">
                        <li>✔ All features in Professional Plan</li>
                        <li>✔ Unlimited cloud storage</li>
                        <li>✔ 24/7 dedicated support</li>
                        <li>✔ Unlimited user access</li>
                    </ul>
                    <a href="#subscribe" className="block mt-6 px-6 py-3 text-center bg-primarylw-2 text-white rounded-lg shadow hover:bg-primarylw transition-colors duration-300">
                        Subscribe Now
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SubscriptionPricingPage;
