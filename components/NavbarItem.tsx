import { FC } from "react";

interface INavbarItem {
  label: string;
}

const NavbarItem: FC<INavbarItem> = ({ label }) => {
  return (
    <div className="text-white cursor-pointer hover:text-gray-300 transition">
      {label}
    </div>
  );
};

export default NavbarItem;
