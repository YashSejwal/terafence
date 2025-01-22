import React from "react";

interface BlogPreviewProps {
  title: string;
  description: string;
  image?: string; // Optional image for the blog post preview
  onClick?: () => void; // Optional click handler
}

const BlogPreview: React.FC<BlogPreviewProps> = ({
  title,
  description,
  image,
  onClick,
}) => {
  return (
    <div
      className="border border-gray-300 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
      onClick={onClick}
    >
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-cover"
        />
      )}
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default BlogPreview;