import React from "react";

const Header = ({ title, subtitle }: { title: string; subtitle?: string }) => {
  return (
    <>
      <h2 className="h2-bold text-neutral-600">{title}</h2>
      {subtitle && (
        <p className="text-neutral-500 mt-4 p-16-regular">{subtitle}</p>
      )}
    </>
  );
};

export default Header;
