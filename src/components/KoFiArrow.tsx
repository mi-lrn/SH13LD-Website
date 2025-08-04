const KoFiArrow = () => {
  return (
    <svg
      className="absolute"
      style={{
        left: 'calc(50% + 120px)', 
        top: '25px', 
        pointerEvents: 'none',
        transform: 'rotate(-40deg)',
      }}
      width="60"
      height="50"
      viewBox="0 0 60 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M50,10 Q60,48 24,45"
        stroke="#29abe0"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        className="opacity-100"
        style={{
          filter: 'drop-shadow(0 1px 2px rgba(41, 171, 224, 0.3))',
        }}
      />
      <path
        d="M20,45 L25,41 M20,45 L25,49"
        stroke="#29abe0"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        className="opacity-100"
        style={{
          filter: 'drop-shadow(0 1px 2px rgba(41, 171, 224, 0.3))',
        }}
      />
    </svg>
  );
};

export default KoFiArrow; 