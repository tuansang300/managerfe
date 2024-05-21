import React, { useEffect, useState } from "react";

interface ImageComponentProps {
  base64Data: string;
}

function ImageDecode({ base64Data }: ImageComponentProps) {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    if (base64Data) {
      const decodedImage = `data:image/jpeg;base64,${base64Data}`;
      setImageUrl(decodedImage);
    }
  }, [base64Data]);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {imageUrl && (
        <img
          src={imageUrl}
          alt="Decoded Image"
          style={{ maxWidth: "100%", maxHeight: "100%" }}
        />
      )}
    </div>
  );
}

export default ImageDecode;
