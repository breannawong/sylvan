module.exports = function (url, width = 1200) {
  if (!url || !url.includes("cloudinary.com")) {
    return url;
  }

  return url.replace(
    "/upload/",
    `/upload/f_auto,q_auto,w_${width}/`
  );
};
