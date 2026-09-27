import Link from "next/link";

const EmptyState = () => {
    return (
        <div className="rounded-2xl border border-dashed border-white/20 px-6 py-20 text-center">

            <h2 className="text-2xl font-black">
                NOTHING HERE YET
            </h2>

            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-gray-500">
                Browse the library and add a lift to get today moving.
            </p>

            <Link
                href="/"
                className="mt-7 inline-block rounded-full bg-[#ccff00] px-6 py-3 text-sm font-black text-black"
            >
                GO TO WORKOUTS
            </Link>

        </div>
    );
};

export default EmptyState;