import Image from "next/image";
import BannerImg from "../../../public/images/banner.png";
import Link from "next/link";

const Banner = () => {
    return (
        <section className="bg-[#080808] text-white">
            <div className="mx-auto grid gap-10 md:gap-0 max-w-7xl items-center px-4 py-16 md:px-6 lg:grid-cols-3 lg:py-24">

                {/* Banner Content. */}
                <div className="md:col-span-2">
                    <p className="mb-5 text-xs font-black tracking-[0.3em] text-[#ccff00]">
                        WORKOUT LIBRARY
                    </p>

                    <h1 className="max-w-3xl text-4xl font-black uppercase leading-[0.9] tracking-tight md:text-5xl">
                        TRAIN WITH INTENT. LOG
                        <br />
                        EVERY SET.
                    </h1>

                    <p className="mt-7 max-w-xl text-base leading-7 text-gray-400 md:text-lg">
                        FitLog is a dark, no-nonsense gym companion: pick a lift,
                        lock it into todays plan, and watch the weeks work add up.
                    </p>

                    <Link
                        href={"/library"}
                        className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#ccff00] px-6 py-3 text-sm font-black text-black transition hover:scale-105"
                    >
                        BROWSE WORKOUTS
                        <span className="text-lg">→</span>
                    </Link>
                </div>

                {/* Hero Image. */}
                <div className="relative overflow-hidden rounded-2xl flex justify-center md:justify-end items-center">
                    <Image
                        src={BannerImg}

                        alt="Workout"
                        className="bg-cover"
                    />
                </div>

            </div>
        </section>
    );
};

export default Banner;