const regexImproveImageQuality = (urlImage: string)=> {
    return urlImage.replace(/\w\.jpg/gi, "W.jpg");
}
export default regexImproveImageQuality;