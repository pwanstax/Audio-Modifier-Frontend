import "./Style.css";

const BacktoHome = (props: any) => {
  const refreshHandler = () => {
    window.location.reload();
  };

  return (
    <button className="Button-one" onClick={refreshHandler}>
      Back To Home
    </button>
  );
};

export default BacktoHome;
