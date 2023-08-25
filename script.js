var resultDisplayed = false;

document.getElementById("btn").addEventListener("click", function() {
    if (!resultDisplayed) {
        calculateLove();
        resultDisplayed = true;
    }
});

function calculateLove() {
    var name1 = document.getElementById("love1").value;
    var name2 = document.getElementById("love2").value;
    var resultElement = document.getElementById("result");
    var loveGif = document.getElementById("loveGif");

    if (name1 === "" || name2 === "") {
        resultElement.textContent = "Please type both Names..";
        resultElement.style.color = "red";
        loveGif.style.display = "none";
        return;
    }

    // Display GIF image
    loveGif.style.display = "block";

    // Delay showing the love percentage
    setTimeout(function() {
        // Hide the GIF image
        loveGif.style.display = "none";

        // Calculate and display love percentage
        var lovePercentage = Math.floor(Math.random() * 101);

        // Create a span element with the class
        var lovePercentageSpan = document.createElement("span");
        lovePercentageSpan.textContent = `${lovePercentage}%`;
        lovePercentageSpan.classList.add("love-percentage"); // Add the class

        if (lovePercentage >= 81) {
            resultElement.innerHTML = `Congratulations! ${name1} and ${name2} You have`;
            resultElement.appendChild(lovePercentageSpan); // Append the span element
            resultElement.innerHTML += "Love & You both Love each Other so much";
        } else if (lovePercentage >= 61) {
            resultElement.innerHTML = `Congratulations! ${name1} and ${name2} You have`;
            resultElement.appendChild(lovePercentageSpan);
            resultElement.innerHTML += "Love And you both are happy";
        } else if (lovePercentage >= 41) {
            resultElement.innerHTML = `Congratulations! ${name1} and ${name2} You have`;
            resultElement.appendChild(lovePercentageSpan);
            resultElement.innerHTML += "Love. it's great But you both should improve your love";
        } else if (lovePercentage >= 21) {
            resultElement.innerHTML = `Congratulations! ${name1} and ${name2} You have`;
            resultElement.appendChild(lovePercentageSpan);
            resultElement.innerHTML += "Love that's good but you need more love!";
        } else {
            resultElement.innerHTML = `OPPS! ${name1} and ${name2}`;
            resultElement.appendChild(lovePercentageSpan);
            resultElement.innerHTML += "Love. I'm sorry to see that. Don't be sad! you both should eat milk, banana and green vegetable to increase love! ";
            resultElement.style.color = "red";
        }


    }, 2000); // Delay of 2000 milliseconds (2 seconds) before calculating the love percentage
}

// Add event listener to Try Again button
var reloadpage = document.getElementById("btn2");
reloadpage.addEventListener("click", function() {
    location.reload(); // Reload the page
    reloadpage.style.display = "none"; // Hide the Try Again button
});
