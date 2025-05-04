"use strict";
var _a, _b;
{
    // ternary operator || optional chaining || nullish coalescing operator
    const age = 15;
    if (age > 18) {
        console.log('Adult');
    }
    else {
        console.log('Not Adult');
    }
    // Using ternary operator
    const isAdult = age > 18 ? 'Adult' : 'Not Adult';
    console.log({ isAdult });
    // Nullish coalescing operator
    // null / undefined --> decition making
    const isAuthenticated = null;
    const result1 = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : 'Guest';
    const result2 = isAuthenticated ? isAuthenticated : 'Guest';
    console.log({ result1 }, { result2 });
    const user = {
        name: 'John Doe',
        address: {
            city: 'New York',
            road: '5th Avenue',
            presentaddress: 'ctg town',
        }
    };
    const permanentAddress = (_b = (_a = user === null || user === void 0 ? void 0 : user.address) === null || _a === void 0 ? void 0 : _a.permanentAddress) !== null && _b !== void 0 ? _b : 'No Address Found';
    console.log({ permanentAddress });
}
