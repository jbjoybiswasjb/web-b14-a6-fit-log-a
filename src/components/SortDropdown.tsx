"use client";

interface SortDropdownProps {
    value: string;
    onChange: (value: string) => void;
}

const SortDropdown = ({
    value,
    onChange,
}: SortDropdownProps) => {
    return (
        <div className="relative">

            <select
                value={value}
                onChange={(event) =>
                    onChange(event.target.value)
                }
                className="appearance-none rounded-full border border-white/20 bg-[#151515] py-3 pl-5 pr-10 text-sm font-bold text-white outline-none"
            >
                <option value="duration">
                    Duration
                </option>

                <option value="calories">
                    Calories
                </option>

                <option value="rating">
                    Rating
                </option>
            </select>

            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white">
                ↓
            </span>

        </div>
    );
};

export default SortDropdown;