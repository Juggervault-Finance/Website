import classNames from "classnames";
import { GoDotFill } from "react-icons/go"

type Props = {
    label: React.ReactNode;
} & React.InputHTMLAttributes<HTMLButtonElement>;

// Classes defined in tailwind.config.ts
const buttonClasses = "py-3 px-4 rounded-[32px] bg-basic-100 border border-[#E7E7E7] flex items-center justify-evenly font-medium text-[#95B0FF]";

export const FancyButton = ({ label, ...props }: Props) => {
    return (
        <button className={classNames(buttonClasses)}>
            <GoDotFill color="#95B0FF" size={20} />
            {label}
        </button>
    )
}