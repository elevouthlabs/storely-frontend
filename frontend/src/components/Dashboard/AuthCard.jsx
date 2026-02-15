const AuthCard = ({ icon, heading, body }) => {
  return (
    <div className="flex gap-4">
      <div className="h-12 w-12 bg-white/20 rounded-[10px]">
        {/* Icon here */}
      </div>
      <div>
        <h1 className="font-bold text-lg">{heading}</h1>
        <p className="font-sans text-white/70">{body}</p>
      </div>
    </div>
  );
};

export default AuthCard;
