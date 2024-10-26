export const PageContainer = ({ children }) => {
  return (
    <main>
      <div className="flex items-center justify-center w-full min-h-screen bg-slate-300">
        {children}
      </div>
    </main>
  );
};
