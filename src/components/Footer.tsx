import Image from "next/image";
import Logo from "../../public/images/logo.png";

const Footer = () => {
    return (
        <footer className="border-t border-white/10 bg-[#080808] text-white">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-4 py-8 md:flex-row md:px-6">

                {/* Footer left. */}
                <div
                    className="flex items-center gap-3"
                >
                    <span className="flex h-9 w-9 items-center justify-center rounded-full font-black text-black">
                        <Image
                            src={Logo}
                            alt="Workout"
                        />
                    </span>

                    <span className="text-xl font-black">
                        FIT<span className="text-[#ccff00]">LOG</span>
                    </span>
                </div>

                {/* Copyright. Footer right. */}
                <p className="text-center text-sm text-gray-500 md:text-right">
                    © 2026 FitLog — Workout Library. Train hard, log honest.
                </p>

            </div>
        </footer>
    );
};

export default Footer;