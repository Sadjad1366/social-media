import { Link } from "react-router";

const Navbar: React.FC = () => {
    
  const items = [
    { address: "/", name: "Home" },
    { address: "/posts", name: "Posts" },
    { address: "/about", name: "About" },
    { address: "/contact-us", name: "Contact Us" },
  ];

  const className = "bg-slate-400 text-white p-2 rounded-xl";

  return (
    <div className="w-full bg-slate-100 flex gap-x-6 justify-center items-center p-3 mt-3">
      {items.map((item) => (
        <Link className={className} to={item.address}>
          {item.name}
        </Link>
      ))}
    </div>
  );
};
export default Navbar;
