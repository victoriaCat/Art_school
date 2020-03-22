import React from "react";

export function findWorkshop(workshopsArray, workshopId) {
    return workshopsArray.find(workshop => workshop.id == workshopId);
}

export function determineAlbum(path) {
    let album;
    const linkArr = path.split('/');
    if (linkArr.some((item) => {
        return item === 'adults';
    })) {
        album = 'workshop_' + linkArr[linkArr.length - 1] + '_adults';
    }
    if (linkArr.some((item) => {
        return item === 'kids';
    })) {
        album = 'workshop_' + linkArr[linkArr.length - 1] + '_kids';
    }
    return album;
}

export function determineID(path) {
    const linkArr = path.split('/');
    return linkArr[linkArr.length - 2];
}