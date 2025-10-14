import React from 'react';

const Privacy = () => {
    return (
        <div className="py-5">
            <h1 className="display-4 mb-4 text-tropical-dark">Privacy Policy for MarcoHotel</h1>
            <p className="lead text-muted">
                This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a booking from marcohotele-paradise.com (the "Site").
            </p>

            {/* ----------------- SECTION 1: Personal Information We Collect ----------------- */}
            <h2 className="mt-5 mb-3">1. Personal Information We Collect</h2>
            <p>
                When you make a reservation or attempt to make a reservation through the Site, we collect certain information from you, including your name, billing address, shipping address, payment information (including credit card numbers), email address, and phone number. We refer to this automatically-collected information as "Order Information."
            </p>

            {/* ----------------- SECTION 2: How We Use Your Personal Information ----------------- */}
            <h2 className="mt-5 mb-3">2. How We Use Your Personal Information</h2>
            <p>
                We use the Order Information that we collect generally to fulfill any reservations placed through the Site (including processing your payment information and providing you with reservation confirmations). Additionally, we use this Order Information to:
            </p>
            <ul>
                <li>Communicate with you;</li>
                <li>Screen our orders for potential risk or fraud; and</li>
                <li>Provide you with information or advertising relating to our products or services (in line with the preferences you have shared with us).</li>
            </ul>

            {/* ----------------- SECTION 3: Sharing Your Personal Information ----------------- */}
            <h2 className="mt-5 mb-3">3. Sharing Your Personal Information</h2>
            <p>
                We share your Personal Information with third parties to help us use your Personal Information, as described above. For example, we use **Stripe/PayPal** to power our online payments—you can read more about how those services use your Personal Information. We may also share your Personal Information to comply with applicable laws and regulations.
            </p>

            {/* ----------------- SECTION 4: Your Rights ----------------- */}
            <h2 className="mt-5 mb-3">4. Your Rights</h2>
            <p>
                If you are a European resident, you have the right to access personal information we hold about you and to ask that your personal information be corrected, updated, or deleted. If you would like to exercise this right, please contact us through the contact information below.
            </p>

            {/* ----------------- CONTACT SECTION ----------------- */}
            <h2 className="mt-5 mb-3">Contact Us</h2>
            <p>
                For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at **privacy@marcohotelexample.com**.
            </p>
        </div>
    );
};

export default Privacy;