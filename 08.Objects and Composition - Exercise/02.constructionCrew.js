function constructionCrew(worker) {

    //     if (worker.dizziness) {
    //         worker.levelOfHydrated = worker.weight * 0.1 * worker.experience;
    //         worker.dizziness = false;
    //     }

    //     return worker

    // shallow copy
    return worker.dizziness
        ? {
            ...worker,
            levelOfHydrated: worker.weight * 0.1 * worker.experience,
            dizziness: false
        }
        : { ...worker }

}



console.log(constructionCrew({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true
}));

console.log(constructionCrew({
    weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true
}));

console.log(constructionCrew({
    weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false
}));

