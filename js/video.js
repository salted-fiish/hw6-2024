var video;

window.addEventListener("load", function () {
    console.log("Good job opening the window");

    // Get the video element
    video = document.getElementById("player1");

    // Initialize video settings
    video.autoplay = false;
    video.loop = false;
    console.log("Autoplay is set to", video.autoplay);
    console.log("Loop is set to", video.loop);

    // Play button functionality
    document.querySelector("#play").addEventListener("click", function () {
        video.play();
        updateVolumeDisplay();
        console.log("Play Video");
    });

    // Pause button functionality
    document.querySelector("#pause").addEventListener("click", function () {
        video.pause();
        console.log("Pause Video");
    });

    // Slow Down button functionality
    document.querySelector("#slower").addEventListener("click", function () {
        video.playbackRate *= 0.9; // Decrease playback speed by 10%
        console.log("New speed:", video.playbackRate);
    });

    // Speed Up button functionality
    document.querySelector("#faster").addEventListener("click", function () {
        video.playbackRate /= 0.9; // Increase playback speed by reversing the slow-down effect
        console.log("New speed:", video.playbackRate);
    });

    // Skip Ahead button functionality
    document.querySelector("#skip").addEventListener("click", function () {
        video.currentTime += 10; // Move the video ahead by 10 seconds
        if (video.currentTime >= video.duration) {
            video.currentTime = 0; // Reset to the beginning if the end is reached
        }
        console.log("Current time:", video.currentTime);
    });

    // Mute/Unmute button functionality
    document.querySelector("#mute").addEventListener("click", function () {
        video.muted = !video.muted; // Toggle mute state
        this.textContent = video.muted ? "Unmute" : "Mute"; // Update button text
        console.log("Muted:", video.muted);
    });

    // Volume slider functionality
    document.querySelector("#slider").addEventListener("input", function () {
        video.volume = this.value / 100; // Update the volume based on the slider value
        updateVolumeDisplay(); // Update the volume display
        console.log("Volume:", video.volume);
    });

    // Apply "Old School" style
    document.querySelector("#vintage").addEventListener("click", function () {
        video.classList.add("oldSchool"); // Add the "oldSchool" class to the video
        console.log("Applied oldSchool style");
    });

    // Remove "Old School" style
    document.querySelector("#orig").addEventListener("click", function () {
        video.classList.remove("oldSchool"); // Remove the "oldSchool" class from the video
        console.log("Removed oldSchool style");
    });
});

// Helper function to update the volume display
function updateVolumeDisplay() {
    const volumeDisplay = document.querySelector("#volume");
    volumeDisplay.textContent = `${Math.round(video.volume * 100)}%`; // Display volume percentage
}
