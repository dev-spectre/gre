interface ButtonProps {
  label: string;
  onClick?: () => void;
  bgColor?: string;
}

export function Button({ label, onClick, bgColor }: ButtonProps) {
  return (
    <div className="py-[2px] px-[2px] rounded-lg bg-gradient-to-t inline-block from-[#1b438f] to-[#34a0bd]">
      <button style={{ backgroundColor: bgColor }} className={`text-white py-2 px-3 w-full rounded-md hover:cursor-pointer capitalize`} type="button" onClick={onClick}>
        {label}
      </button>
    </div>
  );
}
