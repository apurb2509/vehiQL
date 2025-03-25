"use client";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { Camera, Upload } from "lucide-react";
import { Button } from "./ui/button";
import { useDropzone } from "react-dropzone";

const HomeSearch = () => {

  const [searchTerm, setSearchTerm] = useState("")
  const [isImageSearchActive, setIsImageSearchActive] = useState(false);
  const [imagePreview, setImagePreview] = useState("");
  const [searchImage, setSearchImage] = useState(null);
  const [isUploading, setIsUploading] = useState(false);


  const handleTextSubmit = () => {};
  const handleImageSearch = () => {};

  const onDrop = (acceptedFiles) => {
    // Do something with the files
  };

  const {getRootProps, getInputProps, isDragActive, isDragReject} = useDropzone({
    onDrop,
  accept: {
    "image/*" : [".jpeg", ".jpg", ".png"],
  },
  maxFiles: 1,
  })



  return (
    <div>
      <form onSubmit={handleTextSubmit}>
      <div className="relative flex items-center">
        <Input
        type="text"
        placeholder="Enter make, model, or use our AI Image Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="pl-10 pr-12 py-6 w-full rounded-full border-gray-300 bg-white/95 backdrop-blur-sm"
        />

        <div className="absolute right-[100px]">
          <Camera 
          size={35}
          onClick={() => setIsImageSearchActive(!isImageSearchActive)}
          className="cursor-pointer rounded-xl p-1.5"
          style={{
            background: isImageSearchActive ? "black" : "",
            color: isImageSearchActive ? "white" : "",
          }}
          />
        </div>

        <Button type="submit" className="absolute right-2 rounded-full">
          Search
        </Button>
      </div>
      </form>

    
    {isImageSearchActive && (
      <div className="mt-4">
      <form onSubmit={handleImageSearch}>
        <div>
          {imagePreview?(
          <div></div>
        ):(
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <div>
            <Upload className="h-12 w-12 text-gray-400 mb-2" />
            <p>
            {isDragActive && !isDragReject 
            ? "Leave the file here to upload" 
            : "Drag & drop a car image or click to select"}
            </p>
            {isDragReject && (
              <p className="text-red-500 mb-2">Invalid image type</p>
            )}
            <p className="text-gray-400 text-sm">
              Support: JPG, PNG (max 5MB)
            </p>
            </div>
            </div>
          )}
        </div>
      </form>
      </div>
    )}
    </div>
  );
};

export default HomeSearch;
