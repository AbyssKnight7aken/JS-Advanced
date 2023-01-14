function timeToWalk(steps, stepLength, speed) {

    const distanceInMeters = steps * stepLength;
    const speedInMetersPerSecond = speed / 3.6;
    const rest = Math.floor(distanceInMeters / 500) * 60;
    const time = distanceInMeters / speedInMetersPerSecond + rest;
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor(time / 60);
    const seconds = Math.round(time % 60);

    console.log(`${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`);

}

timeToWalk(4000, 0.60, 5)
timeToWalk(2564, 0.70, 5.5)