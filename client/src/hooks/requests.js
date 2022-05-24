

const apiUrl = "http://localhost:5500/api/v1";
async function httpGetPlanets() { // TODO: Once API is ready.
    const data = await fetch(`${apiUrl}/planets`);
    // Load planets and return as JSON.
    return await data.json();
}

async function httpGetLaunches() { // TODO: Once API is ready.
    const response = await fetch(`${apiUrl}/launch`);
    const fetched = await response.json();
    return fetched.sort((a, b) => {
        return a.flightNumber - b.flightNumber;
    });
    // Load launches, sort by flight number, and return as JSON.
}

async function httpSubmitLaunch(launch) { // TODO: Once API is ready.
    try {
        return await fetch(`${apiUrl}/launch`, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(launch)
        });
    } catch (error) {
        return {ok: false};
    }
    // Submit given launch data to launch system.
}

async function httpAbortLaunch(id) {
    // TODO: Once API is ready.
    // Delete launch with given ID.
}

export {
    httpGetPlanets,
    httpGetLaunches,
    httpSubmitLaunch,
    httpAbortLaunch
};
