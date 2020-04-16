document.addEventListener("DOMContentLoaded", () => {
    // By defaut submit button is disable
    document.querySelector("#submit").disabled = true;

    // Enable button only if ther is a text in the input field
    document.querySelector('#task').onkeyup = () => {
        if (document.querySelector('#task').value.length > 0)
            document.querySelector('#submit').disabled = false;
        else
            document.querySelector('#submit').disabled = true;
    };

    document.querySelector("#new-task").onsubmit = () => {
        // Create a new item for list
        const li = document.createElement("li");
        li.innerHTML = document.querySelector("#task").value;

        // Add new item to task list
        document.querySelector("#tasks").append(li);

        // Clear input filed
        document.querySelector("#task").value = "";
        document.querySelector("#submit").disabled = true;

        // Stop form from submitting
        return false;
    };
});
