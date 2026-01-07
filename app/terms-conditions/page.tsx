import React from "react";

export default function TermsAndConditions() {
    return (
        <div className="min-h-screen bg-gray-950 text-slate-300 py-24 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-4xl mx-auto space-y-8">
                <h1 className="text-4xl font-extrabold text-white text-center mb-12">
                    Terms & Conditions
                </h1>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-blue-500">
                        1. Company Information
                    </h2>
                    <p className="text-slate-400">This website is operated by:</p>
                    <div className="text-slate-300 font-medium">
                        <p>Obeo Digital sp. z o.o.</p>
                        <p>NIP: 8982324138</p>
                        <p>Registered address: Księcia Witolda 1/14, 50-202, Wroclaw, Poland</p>
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-blue-500">
                        2. Nature of Services
                    </h2>
                    <p className="text-slate-400">
                        The Company provides online marketing and advertising services,
                        including informational and promotional content related to third-party
                        platforms.
                    </p>
                    <p className="text-slate-400">
                        The Company does not operate, host, control, or endorse any
                        third-party products, services, platforms, or offers.
                    </p>
                    <p className="text-slate-400">
                        The final use, destination, and compliance of any traffic, content,
                        or user activity generated through the Company’s services remains
                        the sole responsibility of the relevant third party.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-blue-500">
                        3. No Guarantees / No Advice
                    </h2>
                    <p className="text-slate-400">
                        All content and services are provided for informational and
                        entertainment purposes only.
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-slate-400">
                        <li>
                            The Company does not guarantee any results, outcomes, earnings, or
                            profits.
                        </li>
                        <li>
                            Nothing provided by the Company constitutes financial, investment,
                            or professional advice.
                        </li>
                    </ul>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-blue-500">
                        4. Limitation of Liability
                    </h2>
                    <p className="text-slate-400">
                        The Company shall not be liable for any losses, damages, or
                        consequences arising from the use of third-party platforms, services,
                        or offers.
                    </p>
                    <p className="text-slate-400">
                        Users acknowledge that any interaction with third-party services is
                        undertaken at their own risk.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-blue-500">
                        5. Responsible Use
                    </h2>
                    <p className="text-slate-400">
                        Users are responsible for ensuring that their activities comply with
                        applicable laws in their jurisdiction.
                    </p>
                    <p className="text-slate-400 font-medium">
                        This website is intended for users aged 18 years or older.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-blue-500">
                        6. Governing Law
                    </h2>
                    <p className="text-slate-400">
                        These Terms & Conditions are governed by the laws of Poland.
                    </p>
                    <p className="text-slate-400">
                        Any disputes shall be subject to the exclusive jurisdiction of Polish
                        courts.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-blue-500">
                        7. Changes to These Terms
                    </h2>
                    <p className="text-slate-400">
                        The Company reserves the right to modify these Terms & Conditions at
                        any time. Continued use of the website constitutes acceptance of the
                        updated terms.
                    </p>
                </section>
            </div>
        </div>
    );
}
