import {useState, useRef} from "react";
import {Camera} from "../utils/webcam";

const ButtonHandler = ({cameraRef}) => {
    const [streaming, setStreaming] = useState(null); // streaming state
    const webcam = new Camera(); // webcam handler

    return (
        <div className="btn-container">
            {/* Webcam Handler */}
            <button
                onClick={() => {
                    // if not streaming
                    if (streaming === null) {
                        webcam.open(cameraRef.current); // open webcam
                        cameraRef.current.style.display = "block"; // show camera
                        setStreaming("camera"); // set streaming to camera
                    }
                    // closing video streaming
                    else if (streaming === "camera") {
                        webcam.close(cameraRef.current);
                        cameraRef.current.style.display = "none";
                        setStreaming(null);
                    } else alert(`Can't handle more than 1 stream\nCurrently streaming : ${streaming}`); // if streaming video
                }}
            >
                {streaming === "camera" ? "Закрити" : "Відкрити"} камеру
            </button>
            <div>
                {streaming === "camera" ? "Покажи палець вгору! 👍" : ""}
            </div>
        </div>
    );
};

export default ButtonHandler;
