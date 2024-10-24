import axios from "axios";

const upload = async (file) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "kaarya");

  try {
    const res = await axios.post('https://api.cloudinary.com/v1_1/ddznotklc/image/upload', data);
//import.meta.env.VITE_UPLOAD_LINK

    const { url } = res.data;
    return url;
  } catch (error) {
    console.log(error);
  }
};

export default upload;