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


// Question 3

function validateUsername(name) {

    if (name.length < 4) {
        return "Too Short";
    }

    if (name.includes(" ")) {
        return "No Space Allowed";
    }

    if (name.toLowerCase().includes("admin")) {
        return "Reserved Word";
    }

    return "Available";
}


// Question 4

function getCngFare(distance, isNight = false, waiting = 0) {

    let fare = 50;

    if (distance > 2) {
        fare = fare + (distance - 2) * 15;
    }

    fare = fare + waiting * 2;

    if (isNight) {
        fare = fare * 1.20;
    }

    return fare;
}


// Question 5

const getChaseVerdict = (target, scored, balls) => {

    let need = target - scored;

    if (need <= 0) {
        return "Won";
    }

    if (balls <= 0) {
        return "Lost";
    }

    let rate = (need / balls) * 6;
    let ans;

    if (rate <= 6) {
        ans = "Comfortable";
    } else if (rate <= 12) {
        ans = "Tough";
    } else {
        ans = "Almost Impossible";
    }

    return `Need ${need} runs in ${balls} balls | ${ans}`;
};