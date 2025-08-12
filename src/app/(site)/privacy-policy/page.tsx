import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Privacy Policy | FITI",
};

export default function Page() {
    return (
        <section>
            <div
                className="relative w-full pt-44 2xl:pb-20 pb-10 before:absolute before:w-full before:h-full before:bg-linear-to-r before:from-blue_gradient before:via-white before:to-yellow_gradient before:rounded-full before:top-24 before:blur-3xl before:-z-10 dark:before:from-dark_blue_gradient dark:before:via-black dark:before:to-dark_yellow_gradient dark:before:rounded-full dark:before:blur-3xl dark:before:-z-10"
            >
                <div className="container relative z-10">
                    <div className='flex flex-col gap-5'>
                        <h1 className='md:text-6xl text-4xl font-medium text-center'>
                            Privacy Policy
                        </h1>
                        <div className="bg-white dark:bg-dark_black p-8 rounded-2xl space-y-6">

                            <p className="text-opacity-60">
                                This Privacy Policy explains how FITI ("we", "us", or "our") collects, uses, discloses, and protects your personal information when you use our website, software products, consulting services, or any other services we provide (collectively, the "Services").
                            </p>

                            <p className="text-opacity-60">
                                By accessing or using our Services, you agree to the terms of this Privacy Policy. If you do not agree, please do not use our Services.
                            </p>

                            <p className="text-opacity-60">
                                We may update this policy from time to time, and we will notify you by revising the “Last Updated” date at the bottom of this page or through direct communication if required.
                            </p>
<br/>
                            <h4 className="font-semibold text-lg">1. Information We Collect</h4>
                            <p>
                                We may collect personal information directly from you or automatically through your use of our Services. This includes:
                            </p>
                            <ul className="list-disc list-inside space-y-1 ml-4 text-opacity-60">
                                <li>Name, email address, company name, phone number</li>
                                <li>Account credentials</li>
                                <li>Usage data and analytics from our platform or apps</li>
                                <li>Device information, IP address, browser type</li>
                                <li>Any content you voluntarily submit to us</li>
                            </ul>
<br/>
                            <h4 className="font-semibold text-lg">2. How We Use Your Information</h4>
                            <p className="text-opacity-60">
                                We use your information to:
                            </p>
                            <ul className="list-disc list-inside space-y-1 ml-4 text-opacity-60">
                                <li>Provide, maintain, and improve our Services</li>
                                <li>Communicate with you about your account or projects</li>
                                <li>Personalize your experience</li>
                                <li>Conduct research and analysis</li>
                                <li>Comply with legal obligations</li>
                            </ul>
<br/>
                            <h4 className="font-semibold text-lg">3. Payment Processing</h4>
                            <p className="text-opacity-60">
                                We do not directly collect or store payment information. All payments are securely processed via third-party providers (e.g., Stripe or Paddle). Their privacy policies govern how your payment data is handled:
                                <br />
                                <Link href="https://www.stripe.com/privacy" className="text-dark_black underline">Stripe Privacy Policy</Link>
                                <br />
                                <Link href="https://www.paddle.com/legal/privacy" className="text-dark_black underline">Paddle Privacy Policy</Link>
                            </p>
<br/>
                            <h4 className="font-semibold text-lg">4. Information Sharing</h4>
                            <p className="text-opacity-60">
                                We do not sell your personal data. We may share your information with:
                            </p>
                            <ul className="list-disc list-inside space-y-1 ml-4 text-opacity-60">
                                <li>Third-party service providers under confidentiality agreements</li>
                                <li>Legal authorities if required by law</li>
                                <li>Business partners or affiliates as part of project delivery</li>
                            </ul>

                            <h4 className="font-semibold text-lg">5. Data Security</h4>
                            <p className="text-opacity-60">
                                We implement appropriate technical and organizational security measures to protect your data against unauthorized access, loss, misuse, or disclosure. However, no online system is 100% secure.
                            </p>
<br/>
                            <h4 className="font-semibold text-lg">6. Your Rights</h4>
                            <p className="text-opacity-60">
                                You have the right to:
                            </p>
                            <ul className="list-disc list-inside space-y-1 ml-4 text-opacity-60">
                                <li>Access the personal information we hold about you</li>
                                <li>Request correction or deletion of your information</li>
                                <li>Withdraw consent or object to processing</li>
                            </ul>
<br/>
                            <h4 className="font-semibold text-lg">7. Cookies & Tracking</h4>
                            <p className="text-opacity-60">
                                We use cookies and similar technologies to enhance user experience, analyze usage, and deliver personalized content. You can control cookie preferences in your browser settings.
                            </p>

                            <h4 className="font-semibold text-lg">8. Third-Party Links</h4>
                            <p className="text-opacity-60">
                                Our Services may contain links to third-party websites or platforms. We are not responsible for the content or privacy practices of those sites.
                            </p>
<br/>
                            <h4 className="font-semibold text-lg">9. Contact Us</h4>
                            <p className="text-opacity-60">
                                If you have any questions about this Privacy Policy or your data, please contact us at:
                                <br />
                                <span className="font-medium">Email:</span> contact@fiti.solutions
                            </p>

                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Last updated: August 12, 2025
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
