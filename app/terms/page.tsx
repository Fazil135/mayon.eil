export default function TermsAndConditions() {
    return (
        <div className="pt-40 pb-20 container mx-auto px-6 max-w-4xl">
            <h1 className="text-4xl font-serif text-brand-charcoal mb-8">Terms and Conditions</h1>
            <div className="space-y-6 text-brand-gray leading-relaxed">
                <p>Last updated: {new Date().toLocaleDateString()}</p>
                <p>Please read these Terms and Conditions carefully before using the Mayon.eil website or booking our services.</p>

                <h2 className="text-2xl font-bold text-brand-charcoal mt-8">Booking and Cancellations</h2>
                <p>Appointments can be booked online. We require at least 24 hours notice for cancellations or rescheduling. Late cancellations may incur a fee.</p>

                <h2 className="text-2xl font-bold text-brand-charcoal mt-8">Service Guarantee</h2>
                <p>We strive to provide the highest quality nail services. If you are dissatisfied with your service, please let us know within 24 hours so we can address your concerns.</p>

                <h2 className="text-2xl font-bold text-brand-charcoal mt-8">Health and Safety</h2>
                <p>Please inform us of any medical conditions or allergies prior to your service. We reserve the right to refuse service if we believe it may compromise your health or safety.</p>

                <h2 className="text-2xl font-bold text-brand-charcoal mt-8">Changes to Terms</h2>
                <p>We reserve the right to modify these terms at any time. Your continued use of our services constitutes acceptance of the new terms.</p>
            </div>
        </div>
    );
}
