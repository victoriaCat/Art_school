import React from "react";

export function findWorkshop(workshopsArray, workshopId) {
    return workshopsArray.find(workshop => workshop.id == workshopId);
}

export function determineAlbum(path) {
    let album, name;
    const linkArr = path.split('/');
    name = linkArr[linkArr.length - 1].split(/([&?])/) ? linkArr[linkArr.length - 1].split(/([&?])/)[0] : linkArr[linkArr.length - 1];
    if (linkArr.some((item) => {
        return item === 'adults';
    })) {
        album = 'workshop_' + name + '_adults';
    }
    if (linkArr.some((item) => {
        return item === 'kids';
    })) {
        album = 'workshop_' + name + '_kids';
    }
    return album;
}

export function determineID(path) {
    const linkArr = path.split('/');
    return linkArr[linkArr.length - 2];
}