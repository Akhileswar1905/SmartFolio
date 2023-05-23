import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../Firebase/Firebase";

export const uploadingImg = (file) => {
  const img = document.querySelector(".img");

  const filename = new Date().getTime() + file.name; //setting filename
  console.log(filename);
  const storageRef = ref(storage, filename);
  const uploadTask = uploadBytesResumable(storageRef, file);
  // Progress
  uploadTask.on(
    "state_changed",
    (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log("Upload is " + progress + "% done");
      switch (snapshot.state) {
        case "paused":
          console.log("Upload is paused");
          break;
        case "running":
          console.log("Upload is running");
          break;
        default:
          break;
      }
    },
    (err) => {
      console.log(err);
    },
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log("File available at", downloadURL);
        img.src = downloadURL;
      });
    }
  );
};

export const hello = () => {
  console.log("Hello world");
};
