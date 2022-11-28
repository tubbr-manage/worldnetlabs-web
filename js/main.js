// const TAB_MAP={
//     UIdesign: "UIdesign_info",
//     FullStack: "FullStack_info",
//     DevopsEng: "DevopsEng_info",
//     QAEng: "QAEng_info",
//     ScrumMaster: "ScrumMaster_info",
//     BusinessAnalysts: "BusinessAnalysts_info",
//     CloudArchit: "CloudArchit_info"
// }

// let selected;

$(".tab").on("click", function (event) {
    selected = event.target.getAttribute('href').slice(1);
    event.preventDefault();
    // console.log(selected);
    document.querySelectorAll('.tab-info').forEach(tab => tab.style.display = 'none');
    document.getElementById(selected).style.display = 'block';
});

document.querySelector('.tab').click();