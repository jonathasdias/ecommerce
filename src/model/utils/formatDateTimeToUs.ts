function formatDateTimeToUs(dateISO:string) {
    const date = new Date(dateISO);
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
  
    return `${month}/${day}/${year} ${hours}:${minutes}:${seconds}`;
}

export default formatDateTimeToUs;