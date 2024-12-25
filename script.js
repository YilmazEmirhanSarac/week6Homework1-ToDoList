function newElement() {
    const taskInput = document.getElementById("task");
    const taskValue = taskInput.value.trim(); // Bosluklari temizler

    if (taskValue === "") {
        // Hata mesaji cikartir
        const errorToast = document.querySelector("#liveToast.error");
        errorToast.classList.remove("hide");
        errorToast.classList.add("show");
        setTimeout(() => {
            errorToast.classList.remove("show");
            errorToast.classList.add("hide");
        }, 4000);

    } else {
        // Yeni liste elemanini ekler
        const ul = document.getElementById("list");
        const li = document.createElement("li");
        li.textContent = taskValue;

        ul.appendChild(li);
        addDeleteButtons();
        addMarkAsDoneListener();

        // Basari mesaji cikarir
        const successToast = document.querySelector("#liveToast.success");
        successToast.classList.remove("hide");
        successToast.classList.add("show");
        setTimeout(() => {
            successToast.classList.remove("show");
            successToast.classList.add("hide");
        }, 4000);

        // Input alanini temizler
        taskInput.value = "";
    }    
}

function addDeleteButtons() {
    const listItems = document.querySelectorAll("#list li");
    listItems.forEach((li) => {
        // Delete buttonun olup olmadigini kontrol ediyoruz varsa eklememek icin
        if (!li.querySelector(".delete-btn")) {
            const deleteButton = document.createElement("button");
            deleteButton.className = "delete-btn";
    
            const icon = document.createElement("i");
            icon.className = "fa-solid fa-xmark";
            icon.style.fontSize = "16px";
            deleteButton.appendChild(icon);
  
        deleteButton.addEventListener("click", () => {
            li.remove();
        });
  
        li.appendChild(deleteButton);
        }
    });
}

function addMarkAsDoneListener() {
    const listItems = document.querySelectorAll("#list li");
    listItems.forEach((li) => {
        if (!li.classList.contains("clickable")) {
            li.classList.add("clickable");

            li.addEventListener("click", () => {
                li.classList.toggle("checked");
            });
        }
    });
}

// Html kisminda onceden ekledigimiz li elementleri icin fonksiyonlari calistiriyoruz
addDeleteButtons();
addMarkAsDoneListener();
