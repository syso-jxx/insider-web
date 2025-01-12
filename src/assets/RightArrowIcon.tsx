export default function RightArrowIcon({
  width,
  height,
}: {
  width?: number;
  height?: number;
}) {
  return (
    <svg
      width={width || 8}
      height={height || 12}
      viewBox='0 0 8 12'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M1.5 11L6.5 6L1.5 1'
        stroke='#8F8F8F'
        strokeWidth='1.66667'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
