import Link from "next/link";

const NotFound = () => {
    return (
        <main className="flex min-h-[80vh] items-center justify-center bg-[#080808] px-4 text-center text-white">

            <div>

                <p className="text-8xl font-black text-[#ccff00]">
                    404
                </p>

                <h1 className="mt-5 text-3xl font-black uppercase">
                    WORKOUT NOT FOUND
                </h1>

                <p className="mt-3 text-gray-500">
                    The page you are looking for does not exist.
                </p>

                <Link
                    href="/"
                    className="mt-7 inline-block rounded-full bg-[#ccff00] px-6 py-3 text-sm font-black text-black"
                >
                    BACK TO WORKOUTS
                </Link>

            </div>

        </main>
    );
};

export default NotFound;