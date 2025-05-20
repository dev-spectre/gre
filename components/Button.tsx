interface ButtonProps {
  label: string;
  onClick?: () => void;
  bgColor?: string;
}

export function Button({ label, onClick, bgColor }: ButtonProps) {
  return (
    <div className="rounded-lg bg-gradient-to-t from-[#1b438f] to-[#34a0bd] px-[2px] py-[2px]">
      <button
        style={{ backgroundColor: bgColor }}
        className={`w-full rounded-md px-3 py-2 text-inherit capitalize hover:cursor-pointer`}
        type="button"
        onClick={onClick}
      >
        {label}
      </button>
    </div>
  );
}
