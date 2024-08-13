import React, { useEffect, useState } from "react";

interface AvatarProps {
  size?: number;
}

const Avatar: React.FC<AvatarProps> = ({ size = 100 }) => {
  const [gradient, setGradient] = useState<string>("");

  useEffect(() => {
    const lightModeGradient = "linear-gradient(45deg, #f56565, #f6e05e)"; // Red to Yellow
    const darkModeGradient = "linear-gradient(45deg, #e53e3e, #d69e2e)"; // Darker Red to Darker Yellow

    const isDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setGradient(isDarkMode ? darkModeGradient : lightModeGradient);
  }, []);

  return (
    <div
      className="flex items-center justify-center rounded-full text-white font-bold"
      style={{
        background: gradient,
        width: size,
        height: size,
      }}
    ></div>
  );
};

export default Avatar;
