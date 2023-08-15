/**
 * Class to handle camera
 */
export class Camera {
  /**
   * Open camera and stream it through video tag.
   * @param {HTMLVideoElement} videoRef video tag reference
   */
  open = (videoRef) => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      const isMobile = 'maxTouchPoints' in navigator && navigator.maxTouchPoints > 0;
      console.log(navigator.userAgent);
      const videoConstraints = isMobile ? { facingMode: "user" } : { facingMode: "environment" };
      navigator.mediaDevices
        .getUserMedia({
          audio: false,
          video: videoConstraints,
        })
        .then((stream) => {
          videoRef.srcObject = stream;
        });
    } else alert("Can't open Camera!");
  };

  /**
   * Close opened camera.
   * @param {HTMLVideoElement} videoRef video tag reference
   */
  close = (videoRef) => {
    if (videoRef.srcObject) {
      videoRef.srcObject.getTracks().forEach((track) => {
        track.stop();
      });
      videoRef.srcObject = null;
    } else alert("Please open the camera first!");
  };
}
