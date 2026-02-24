const Spinner = () => {
  return (
    <div className="spinner">
      {[...Array(7)].map((_, i) => (
        <span
          key={i}
          style={{
            left: `${i * 8}px`,
            animationDelay: `${i * 0.125}s`,
          }}
        />
      ))}
    </div>
  );
};

export default Spinner;
