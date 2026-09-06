// Question 1

function describeValue(value) {
    let type = typeof value;

    if (value) {
        return type + " | truthy";
    } else {
        return type + " | falsy";
    }
}