export const dynamicDateFormatter = (timestamp) => {
    const todayTimestamp = Date.now();
    const diffInSeconds = Math.round((todayTimestamp - timestamp) / 1000);
    if (diffInSeconds < 60) {
        return "Less than a minute ago"
    } else if (diffInSeconds < 3600) { // seconds in an hour
        return (secToMins(diffInSeconds) <= 1) ? "1 minute ago" : secToMins(diffInSeconds) + " minutes ago";
    } else if (diffInSeconds < 86400) { // seconds in a day
        return (secToHours(diffInSeconds) <= 1) ? "1 hour ago" : secToHours(diffInSeconds) + " hours ago";
    } else if (diffInSeconds < 2592000) { // seconds in a month (30 days)
        return (secToDays(diffInSeconds) <= 1) ? "1 day ago" : secToDays(diffInSeconds) + " days ago";
    } else if (diffInSeconds < 31536000) { // seconds in a year (365 days)
        return (secToMonths(diffInSeconds) <= 1) ? "1 month ago" : secToMonths(diffInSeconds) + " months ago";
    } else { // difference is more than a year
        return dateFormatter(timestamp);
    }
}

const dateFormatter = (timestamp) => {
    let dateObj = new Date(timestamp)
    let day = dateObj.getDate();
    let month = dateObj.getMonth() + 1;
    let year = dateObj.getFullYear();
    return month + "/" + day + "/" + year;
}

const secToMins = (seconds) => {
    return Math.round(seconds / 60);
}
const secToHours = (seconds) => {
    return Math.round(seconds / 3600);
}
const secToDays = (seconds) => {
    return Math.round(seconds / 86400);
}
const secToMonths = (seconds) => {
    return Math.round(seconds / 2592000);
}