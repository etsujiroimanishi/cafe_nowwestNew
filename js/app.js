document.addEventListener("DOMContentLoaded", function () {
    const dropdownBtn = document.getElementById("btn");
    const dropdownMenu = document.getElementById("dropdown");
    const toggleArrow = document.getElementById("arrow");
    const selectedItemContentContainer = document.getElementById("selectedItemContent");

    let selectedItemContent;
    let stateOperation;

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

        if (selectedItemContent === "停止") {
            stateOperation = 0;
        };
        if (selectedItemContent === "低速") {
            stateOperation = 1;
        };
        if (selectedItemContent === "中速") {
            stateOperation = 2;
        };
        if (selectedItemContent === "高速") {
            stateOperation = 3;
        };
        if (selectedItemContent === "ビューン") {
            stateOperation = 4;
        };
        if (selectedItemContent === "半端ない") {
            stateOperation = 5;
        };

        console.log(selectedItemContent);
        console.log(stateOperation);

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

