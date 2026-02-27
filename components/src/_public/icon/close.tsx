export default function CloseIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 28 28"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			{...props}
		>
			<circle cx="14" cy="14" r="11" />
			<path d="M18 10 10 18" />
			<path d="M10 10 18 18" />
		</svg>
	);
}
