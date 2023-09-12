type Props = {
  children: React.ReactNode;
};

const ListGrid = ({ children }: Props) => {
  return (
    <ul className="grid gap-6 xl:gap-10 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      {children}
    </ul>
  );
};

export default ListGrid;
