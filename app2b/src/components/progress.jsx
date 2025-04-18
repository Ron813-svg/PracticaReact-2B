function progress() {
    return (
      <>
        <div
          className="progress"
          role="progressbar"
          aria-label="Basic example"
          aria-valuenow="0"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div className="progress-bar" style={{ width: "0%" }}></div>
        </div>
        <div
          className="progress"
          role="progressbar"
          aria-label="Basic example"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div className="progress-bar" style={{ width: "25%" }}></div>
        </div>
        <div
          className="progress"
          role="progressbar"
          aria-label="Basic example"
          aria-valuenow="50"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div className="progress-bar" style={{ width: "50%" }}></div>
        </div>
        <div
          className="progress"
          role="progressbar"
          aria-label="Basic example"
          aria-valuenow="75"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div className="progress-bar" style={{ width: "75%" }}></div>
        </div>
        <div
          className="progress"
          role="progressbar"
          aria-label="Basic example"
          aria-valuenow="100"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div className="progress-bar" style={{ width: "100%" }}></div>
        </div>
      </>
    );
  }
  

export default progress;