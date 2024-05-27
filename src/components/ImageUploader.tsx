"use client";

import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import NextImage from "next/image";
import { DownloadIcon, UploadIcon } from "lucide-react";
import { Button } from "./ui/button";

const ImageUploader: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [roundedImage, setRoundedImage] = useState<string | null>(null);

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [".jpeg", ".png"],
    },
    onDrop: (acceptedFiles: any) => {
      const file = acceptedFiles[0];
      const reader = new FileReader();
      reader.onload = () => {
        const img = new Image();
        img.src = reader.result as string;
        img.onload = () => {
          setImage(img.src);
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");
          if (ctx) {
            const canvasSize = 1000;
            const contentSize = 832;
            const cornerRadius = (22 / 100) * contentSize;
            const offsetX = (canvasSize - contentSize) / 2;
            const offsetY = (canvasSize - contentSize) / 2;

            canvas.width = canvasSize;
            canvas.height = canvasSize;

            ctx.clearRect(0, 0, canvasSize, canvasSize);
            ctx.beginPath();

            // 绘制四个圆角
            ctx.moveTo(offsetX + cornerRadius, offsetY);
            ctx.lineTo(offsetX + contentSize - cornerRadius, offsetY);
            ctx.quadraticCurveTo(
              offsetX + contentSize,
              offsetY,
              offsetX + contentSize,
              offsetY + cornerRadius
            );

            ctx.lineTo(
              offsetX + contentSize,
              offsetY + contentSize - cornerRadius
            );
            ctx.quadraticCurveTo(
              offsetX + contentSize,
              offsetY + contentSize,
              offsetX + contentSize - cornerRadius,
              offsetY + contentSize
            );

            ctx.lineTo(offsetX + cornerRadius, offsetY + contentSize);
            ctx.quadraticCurveTo(
              offsetX,
              offsetY + contentSize,
              offsetX,
              offsetY + contentSize - cornerRadius
            );

            ctx.lineTo(offsetX, offsetY + cornerRadius);
            ctx.quadraticCurveTo(
              offsetX,
              offsetY,
              offsetX + cornerRadius,
              offsetY
            );

            ctx.closePath();
            ctx.clip();

            ctx.drawImage(img, offsetX, offsetY, contentSize, contentSize);
            setRoundedImage(canvas.toDataURL());
          }
        };
      };
      reader.readAsDataURL(file);
    },
  });

  return (
    <div className="mx-auto">
      <input {...getInputProps()} />
      <div
        {...getRootProps()}
        className="relative size-[400px] flex justify-center items-center border-dashed border-gray-300 border-2"
      >
        {!image && (
          <div className="absolute top-[70%] w-[60%] flex flex-col items-center gap-1 text-center">
            <Button variant="default" size="sm">
              <UploadIcon className="mr-2 w-4 h-4" />
              Upload File
            </Button>
            <p className="text-xs text-gray-500">
              Drag and drop files here or click to upload
            </p>
          </div>
        )}
        <NextImage
          src={image || "/placeholder.svg"}
          width={1024}
          height={1024}
          alt={image ? "Preview" : "Placeholder"}
          className="w-[81.25%] aspect-square rounded-[17.875%] shadow-md"
        />
      </div>
      {roundedImage && (
        <div className="flex gap-2 items-center justify-center mt-4">
          <Button asChild>
            <a href={roundedImage} download="rounded_image.png">
              <DownloadIcon className="mr-2 w-4 h-4" /> Download
            </a>
          </Button>
          <Button
            variant="secondary"
            onClick={() => {
              setImage(null);
              setRoundedImage(null);
            }}
          >
            Reset
          </Button>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
