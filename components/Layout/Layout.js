import Navigation from "../Navigation/Navigation";

const Layout = (props) => {
  return (
    <>
      <Navigation></Navigation>
      <main className="container">{props.children}</main>
    </>
  );
};

export default Layout;
