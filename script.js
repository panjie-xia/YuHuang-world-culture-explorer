const cards = document.querySelectorAll(".country-card");

cards.forEach((card) => {
    card.addEventListener("click", function (e) {
        // 点击文字详情区域：只展开/收起，不跳转
        if (e.target.closest(".card-detail")) {
            card.classList.toggle("open");
            return;
        }
        // 点击卡片其他地方：跳转页面
        const link = card.getAttribute("data-href");
        if (link) {
            location.href = link;
        }
    });
});
