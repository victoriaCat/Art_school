import React from "react";

export function decodeString(str) {
    if (typeof (window) === 'object') {
        return Buffer.from(str, 'base64').toString('utf8');
    } else return ' ';
}
