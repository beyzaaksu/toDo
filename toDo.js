let ListDOM = document.querySelector("#list")
let addDOM = document.querySelector("#liveToastBtn")
let taskInfo = document.querySelector("#task")


    addDOM.addEventListener("click", newElement)
    //listeye task eklemek
    function newElement(event) {
    //önce girilen text boş mu değil mi kontrol edeceğiz eğer boşsa uyarı çıkılacak doluysa ekleme işlemi yapılacak
    if ((taskInfo.value).trim().length > 0) //eğer girilen text boş değilse
    {   
        //listeye taski ekleme işlemi
        let listItem = document.createElement('li')
        listItem.innerHTML = taskInfo.value
        ListDOM.appendChild(listItem)
        //ekleme işlemi bittikten sonra değeri boş hale getirme işlemi
        taskInfo.value = ""
        //Toast işlemi
        let alertDOM = document.querySelectorAll("#liveToast")[0];
        let bsAlert = new bootstrap.Toast(alertDOM);
        bsAlert.show()
        showAlert("success", "Todo Eklendi!")
    }
    //eğer boş girilirse uyarı Toast işlemi
    else {
        let alertDOM = document.querySelectorAll("#liveToast")[1];
        let bsAlert = new bootstrap.Toast(alertDOM);
        bsAlert.show()
        showAlert("danger", "Lütfen bir Todo giriniz!")
    }
}

    //listedeki tıkladığımız taskin üstünün çizilmesi ve check eklenmesi
    let ulDOM = document.querySelector("ul")
    ulDOM.addEventListener("click", function (event) {
       if (event.target.tagName === "LI") {
          event.target.classList.toggle("checked");
        }
    }, false);

    //listedeki tasklara x işareti eklenmesi ve ona tıklandığı zaman silinmesi
    // x işaretinin eklenmesi işlemi
    let tasksDOM = document.getElementsByTagName("li")
    for (let i = 0; i < tasksDOM.length; i++) {
      let span = document.createElement("span");
      let txt = document.createTextNode("\u00D7");
      span.className = "close";
      span.appendChild(txt);
      tasksDOM[i].appendChild(span);
    }
    //tıklama işlemi sonucu silinmesi işlemi
    let close = document.getElementsByClassName("close");
    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function () {
           let div = this.parentElement;
           div.style.display = "none";
        }
    }