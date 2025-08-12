import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms & Conditions | FITI",
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
                            Terms & Conditions
                        </h1>
                        <div className="bg-white dark:bg-dark_black p-8 rounded-2xl space-y-6">
                            <p>
                                These Terms and Conditions (“<span className="font-semibold">Terms</span>”) govern your access to and use of services provided by Fathi Tech (“<span className="font-semibold">we</span>”, “<span className="font-semibold">us</span>”, or “<span className="font-semibold">our</span>”), including AI software development, MVP consulting, and related solutions.
                            </p>
<br/>
                            <h4 className="font-semibold text-lg">1. Acceptance of Terms</h4>
                            <p>
                                By accessing or using our website or services, you agree to be bound by these Terms and our Privacy Policy. If you do not agree, you may not access or use our services.
                            </p>
<br/>
                            <h4 className="font-semibold text-lg">2. Services Provided</h4>
                            <p>
                                We offer consulting, design, and development of AI-powered applications, MVP (Minimum Viable Product) strategy, architecture, and product delivery. Details of each engagement will be outlined in a formal agreement or proposal.
                            </p>
<br/>
                            <h4 className="font-semibold text-lg">3. Intellectual Property</h4>
                            <p>
                                All content, code, and proprietary technologies developed by FITI remain the intellectual property of FITI unless otherwise agreed in writing. You may not copy, distribute, or reuse our materials without permission.
                            </p>
<br/>
                            <h4 className="font-semibold text-lg">4. Client Responsibilities</h4>
                            <p>
                                Clients agree to provide accurate information, timely feedback, and access to necessary resources during the project lifecycle. Delays in communication or deliverables may affect timelines.
                            </p><br/>
<br/>
                            <h4 className="font-semibold text-lg"><br/>5. Payments & Invoicing</h4>
                            <p>
                                Payment terms will be defined in the proposal or agreement. All fees must be paid as per the agreed milestones. Late payments may result in project delays or service suspension.
                            </p>
<br/>
                            <h4 className="font-semibold text-lg">6. Confidentiality</h4>
                            <p>
                                Both parties agree to maintain the confidentiality of proprietary information shared during the course of the engagement, including business processes, codebases, and strategic documents.
                            </p>
<br/>
                            <h4 className="font-semibold text-lg">7. Limitation of Liability</h4>
                            <p>
                                FITI shall not be liable for indirect, incidental, or consequential damages arising from the use or inability to use our services. Our liability is limited to the amount paid for services rendered.
                            </p>
<br/>
                            <h4 className="font-semibold text-lg">8. Termination</h4>
                            <p>
                                Either party may terminate the agreement with written notice if there is a breach of these Terms or project agreement. Upon termination, all outstanding payments must be settled.
                            </p>
<br/>
                            <h4 className="font-semibold text-lg">9. Governing Law</h4>
                            <p>
                                These Terms are governed by and construed in accordance with the laws of the jurisdiction in which FITI operates.
                            </p>
<br/>
                            <h4 className="font-semibold text-lg">10. Updates to Terms</h4>
                            <p>
                                We reserve the right to update these Terms at any time. Updated versions will be posted on this page with an updated effective date.
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
};
