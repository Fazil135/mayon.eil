export default function PrivacyPolicy() {
    return (
        <div className="pt-40 pb-20 container mx-auto px-6 max-w-4xl">
            <h1 className="text-4xl font-serif text-brand-charcoal mb-8">Privacy Policy</h1>
            <div className="space-y-6 text-brand-gray leading-relaxed">
                <p>Last updated: {new Date().toLocaleDateString()}</p>
                <p>At Mayon.eil, we value your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website or book our services.</p>

                <h2 className="text-2xl font-bold text-brand-charcoal mt-8">Information We Collect</h2>
                <p>We collect information that you provide directly to us, such as when you book an appointment, sign up for our newsletter, or contact us. This may include your name, email address, phone number, and appointment preferences.</p>

                <h2 className="text-2xl font-bold text-brand-charcoal mt-8">How We Use Your Information</h2>
                <p>We use your information to provide satisfying services, communicate with you about your appointments, improving our website, and sending you promotional updates (if you opted in).</p>

                <h2 className="text-2xl font-bold text-brand-charcoal mt-8">Data Security</h2>
                <p>We implement appropriate security measures to protect your personal information against unauthorized access or disclosure.</p>

                <h2 className="text-2xl font-bold text-brand-charcoal mt-8">Contact Us</h2>
                <p>If you have any questions about this Privacy Policy, please contact us at hello@mayoneil.com.</p>
            </div>
        </div>
    );
}
