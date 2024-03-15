const useImageUpload = () => {
  const uploadImage = async (imageData: (string | Blob)[]) => {
    const formData = new FormData();
    formData.append("image", imageData[0]);

    const response = await fetch(
      "https://api.imgbb.com/1/upload?key=7d3d53dbb59221ba8a247777dc1e3e66",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();
    return data;
  };

  return { uploadImage };
};

export default useImageUpload;
