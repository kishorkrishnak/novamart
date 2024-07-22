
interface PageTitleProps {
  title: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
  return (
    <h1 className="absolute top-2 left-2 md:top-4 md:left-4 font-medium text-xl md:text-2xl text-black">
      {title}
    </h1>
  );
};

export default PageTitle;
