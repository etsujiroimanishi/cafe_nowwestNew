
let stateOperation = 0;

document.addEventListener("DOMContentLoaded", function () {
    const dropdownBtn = document.getElementById("btn");
    const dropdownMenu = document.getElementById("dropdown");
    const toggleArrow = document.getElementById("arrow");
    const selectedItemContentContainer = document.getElementById("selectedItemContent");

    let selectedItemContent;

    const toggleDropdown = function () {
        dropdownMenu.classList.toggle("show");
        toggleArrow.classList.toggle("arrow");
    };

    const handleDropdownItemClick = function (event) {
        // 選択された項目の内容を取得
        selectedItemContent = event.currentTarget.textContent.trim();

        // ドロップダウンを非表示にする
        toggleDropdown();

        // 取得した内容を表示する
        selectedItemContentContainer.textContent = `運転状態は:  ${selectedItemContent}`;

        const BananaCircle = document.getElementById("HOME_circle");

        BananaCircle.classList.remove("banana_circle0", "banana_circle1", "banana_circle2", "banana_circle3", "banana_circle4", "banana_circle5");

        // 選択された項目に応じてクラスを追加
        switch (selectedItemContent) {
            case "停止":
                stateOperation = 0;
                BananaCircle.classList.add("banana_circle0");
                break;
            case "低速":
                stateOperation = 1;
                BananaCircle.classList.add("banana_circle1");
                break;
            case "中速":
                stateOperation = 2;
                BananaCircle.classList.add("banana_circle2");
                break;
            case "高速":
                stateOperation = 3;
                BananaCircle.classList.add("banana_circle3");
                break;
            case "ビューン":
                stateOperation = 4;
                BananaCircle.classList.add("banana_circle4");
                break;
            case "半端ない":
                stateOperation = 5;
                BananaCircle.classList.add("banana_circle5");
                break;
        }
       

        console.log(selectedItemContent);
        console.log(stateOperation);
        return stateOperation;

    };

    // ドロップダウンボタンがクリックされたときの処理
    dropdownBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        toggleDropdown();
    });

    // ドキュメント全体がクリックされたときの処理
    document.addEventListener("click", function () {
        if (dropdownMenu.classList.contains("show")) {
            toggleDropdown();
        }
    });

    // ドロップダウンメニューの各項目がクリックされたときの処理
    const dropdownItems = dropdownMenu.querySelectorAll("a");
    dropdownItems.forEach(function (item) {
        item.addEventListener("click", handleDropdownItemClick);
    
    });
});
