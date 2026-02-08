const Loader = () => {
  return (
    <div className="text-center py-6">
      <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600 mx-auto"></div>
      <p className="mt-2">Scanning in progress...</p>
    </div>
  );
};

export default Loader;
