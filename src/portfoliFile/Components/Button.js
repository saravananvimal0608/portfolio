const Button = () =>{
    return(<div>
         <div className="d-flex justify-content-center m-3">
        <button
          onClick={() => {
            const link = document.createElement("a");
            link.href = "/sarvan3.pdf";
            link.download = "Saravanan_Vimal_CV.pdf";
            link.click();
          }}
          style={{
            backgroundColor: "#2e1b68",
            borderRadius: "20px",
            border: "2px solid blue",
            color: "white",
          }}
        >
          Download CV{" "}
        </button>
      </div>
    </div>)
}
export default Button