import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-950 text-slate-300 py-24 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-extrabold text-white text-center mb-12">
          Privacy Policy
        </h1>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-500">
            1. We may collect and process the following personal data:
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-slate-400">
            <li>Messaging platform usernames (e.g. Telegram, WhatsApp)</li>
            <li>Browser and usage data</li>
            <li>Data collected through cookies and tracking technologies</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-500">
            2. How We Collect Data
          </h2>
          <p className="text-slate-400">Personal data may be collected through:</p>
          <ul className="list-disc pl-5 space-y-2 text-slate-400">
            <li>Website forms</li>
            <li>Messaging platforms and bots</li>
            <li>Cookies and similar technologies</li>
            <li>Analytics and advertising tools</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-500">
            3. Purpose and Legal Basis of Processing
          </h2>
          <div className="space-y-2">
            <h3 className="font-semibold text-white">
              Personal data is processed for the following purposes:
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-slate-400">
              <li>Providing and improving our services</li>
              <li>Communication with users</li>
              <li>Marketing and analytics</li>
            </ul>
          </div>
          <div className="space-y-2 mt-4">
            <h3 className="font-semibold text-white">
              Legal bases for processing include:
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-slate-400">
              <li>User consent</li>
              <li>Legitimate interest in operating and improving our services</li>
            </ul>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-500">
            4. Sharing of Data
          </h2>
          <p className="text-slate-400">
            Personal data may be shared with trusted third-party service providers
            strictly for operational purposes, including:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-400">
            <li>Hosting providers</li>
            <li>Analytics services</li>
            <li>Advertising and tracking platforms</li>
            <li>CRM and communication tools</li>
          </ul>
          <p className="text-slate-400 font-medium">
            We do not sell personal data to third parties.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-500">5. Data Retention</h2>
          <p className="text-slate-400">
            Personal data is retained only for as long as necessary to fulfill its
            purpose or to comply with legal obligations.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-500">6. User Rights</h2>
          <p className="text-slate-400">Users have the right to:</p>
          <ul className="list-disc pl-5 space-y-2 text-slate-400">
            <li>Access their personal data</li>
            <li>Request correction or deletion</li>
            <li>Restrict or object to processing</li>
            <li>Request data portability</li>
          </ul>
          <p className="text-slate-400 mt-4">
            Requests can be made by contacting us at the email address listed
            above.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-500">7. Cookies</h2>
          <p className="text-slate-400">
            We use cookies and similar technologies to enhance user experience and
            analyze traffic. Users may manage cookie preferences through the
            cookie banner displayed on the website.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-500">8. Data Security</h2>
          <p className="text-slate-400">
            We apply appropriate technical and organizational measures to protect
            personal data against unauthorized access, loss, or misuse.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-500">
            9. Changes to This Policy
          </h2>
          <p className="text-slate-400">
            This Privacy Policy may be updated from time to time. The latest
            version will always be available on this website.
          </p>
        </section>
      </div>
    </div>
  );
}
