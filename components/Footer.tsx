import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-slate-950 border-t border-slate-900 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                <div className="col-span-1 md:col-span-1">
                    <Link href="/" className="flex items-center gap-2 mb-4">
                        <Image
                            src="/logo-removebg-preview.png"
                            alt="Obeo Digital Logo"
                            width={40}
                            height={40}
                            className="object-contain"
                        />
                        <span className="text-xl font-bold text-white">Obeo Digital</span>
                    </Link>
                    <p className="text-slate-500 text-sm">
                        Scale your ads profitably with data-driven strategies and premium traffic sources.
                    </p>
                </div>

                <div>
                    <h3 className="text-white font-semibold mb-4">Services</h3>
                    <ul className="space-y-2 text-slate-400 text-sm">
                        <li><Link href="/#services" className="hover:text-blue-400 transition-colors">Telegram Ads</Link></li>
                        <li><Link href="/#services" className="hover:text-blue-400 transition-colors">Meta Ads</Link></li>
                        <li><Link href="/#services" className="hover:text-blue-400 transition-colors">X Ads</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-white font-semibold mb-4">Company</h3>
                    <ul className="space-y-2 text-slate-400 text-sm">
                        <li><Link href="/#process" className="hover:text-blue-400 transition-colors">How We Work</Link></li>
                        <li><Link href="/#contact" className="hover:text-blue-400 transition-colors">Contact Us</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-white font-semibold mb-4">Legal</h3>
                    <ul className="space-y-2 text-slate-400 text-sm">
                        <li><Link href="/privacy-policy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
                        <li><Link href="/terms-conditions" className="hover:text-blue-400 transition-colors">Terms & Conditions</Link></li>
                        <li><span className="text-slate-400">Responsible Gaming</span></li>
                        <li><span className="text-slate-400 font-bold">18+</span></li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-slate-600 text-sm">
                    © {new Date().getFullYear()} Obeo Digital sp. z o.o. All rights reserved.
                </p>
                <div className="flex gap-4">
                    {/* Social icons or extra links if needed */}
                </div>
            </div>
        </footer>
    );
}
