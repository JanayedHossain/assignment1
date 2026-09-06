// Question 1

function describeValue(value) {
    let type = typeof value;

    if (value) {
        return type + " | truthy";
    } else {
        return type + " | falsy";
    }
}


// Question 2

function getDayType(day) {
    day = day.toLowerCase();

    switch (day) {
        case "friday":
        case "saturday":
            return "Weekend";

        case "sunday":
        case "monday":
        case "tuesday":
        case "wednesday":
        case "thursday":
            return "Working Day";

        default:
            return "Invalid Day";
    }
}

