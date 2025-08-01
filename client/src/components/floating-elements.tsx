export default function FloatingElements() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div className="floating-element top-20 left-10 w-4 h-4 bg-accent-teal rounded-full animate-float"></div>
      <div 
        className="floating-element top-40 right-20 w-6 h-6 border-2 border-accent-orange rotate-45 animate-float" 
        style={{ animationDelay: "2s" }}
      ></div>
      <div 
        className="floating-element bottom-40 left-20 w-8 h-8 border border-accent-teal rounded-full animate-float" 
        style={{ animationDelay: "4s" }}
      ></div>
      <div 
        className="floating-element top-1/2 right-10 w-3 h-3 bg-accent-orange rounded-full animate-float" 
        style={{ animationDelay: "1s" }}
      ></div>
    </div>
  );
}
