export default function PrimaryButton({ children, className }) {
  return (
    <button
      className={`px-4 py-2 border border-nl_button_border bg-white flex justify-around items-center ${className}`}
    >
      {children}
    </button>
  );
}
