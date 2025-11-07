const Button = () => {
  return (
    <div>
      <div className="d-flex justify-content-center m-3">
        <button
          onClick={() => {
            const link = document.createElement("a");
            link.href = "SARAVANAN-RESUME.pdf";
            link.download = "SARAVANAN-RESUME.pdf";
            link.target = '_self'
            link.click();
          }}
          style={{
            backgroundColor: "#2e1b68",
            borderRadius: "20px",
            border: "2px solid blue",
            color: "white",
          }}
          type="button"
        >
          Download CV
        </button>
      </div>
    </div>
  );
};
export default Button;
