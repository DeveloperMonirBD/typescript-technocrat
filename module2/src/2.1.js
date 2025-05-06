"use strict";
{
    // Type Assertion
    let anything;
    anything = "Next Level Web Development";
    anything = 222;
    // (anything as string).
    const kgToGm = (value) => {
        if (typeof value === "string") {
            const convertedValue = parseFloat(value) * 1000;
            return `The Converted value is : ${convertedValue}`;
        }
        else if (typeof value === "number") {
            return value * 1000;
        }
        else {
            throw new Error("Invalid type");
        }
    };
    const result1 = kgToGm(1000);
    const result2 = kgToGm("1000");
    console.log(result1);
    try {
    }
    catch (error) {
        console.log(error.message);
    }
}
