import { Link } from "react-router";

const Navbar: React.FC = () => {
    
  const items = [
    { address: "/", title: "Home" },
    { address: "/posts", title: "Posts" },
    { address: "/about", title: "About" },
    { address: "/contact-us", title: "Contact Us" },
  ];

  const className = "bg-slate-400 text-white p-2 rounded-xl";

  return (
    <div className="w-full bg-slate-100 flex gap-x-6 justify-center items-center p-3 mt-3">
      {items.map((item) => (
        <Link key={item.title} className={className} to={item.address}>
          {item.title}
        </Link>
      ))}
    </div>
  );
};
export default Navbar;
