
function readMore() {
    var moreText = document.getElementById("more-text");
    var button = document.getElementById("read-button");

    if (moreText.classList.contains("hidden")) {
        moreText.classList.remove("hidden");
        button.textContent = "Read Less";
    } else {
        moreText.classList.add("hidden");
        button.textContent = "Read More";
    }
}

function showInfo() {
    var info = document.getElementById("personal-info");
    var button = document.getElementById("info-button");

    if (info.classList.contains("hidden")) {
        info.classList.remove("hidden");
        button.textContent = "Hide Information";
    } else {
        info.classList.add("hidden");
        button.textContent = "Show Information";
    }
}