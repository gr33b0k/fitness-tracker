import "./PageContent.css";

const PageContent = ({ isTransparent, gridColumns, children }) => {
  return (
    <section
      style={{
        gridTemplateColumns: `repeat(${gridColumns}, 1fr)`,
        ...(isTransparent && {
          backgroundColor: "transparent",
          padding: 0,
        }),
      }}
      className="main__content"
    >
      {children}
    </section>
  );
};

export default PageContent;
