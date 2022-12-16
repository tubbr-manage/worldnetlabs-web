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

function activatetab(selected){ //selected should be element
    tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab=>{
        tab.classList.remove('tab-active');
    });
    selected.classList.add('tab-active');
}


$(".tab").on("click", function (event) {
    selected = event.target.getAttribute('href').slice(1);
    event.preventDefault();
    // console.log(event.target);
    document.querySelectorAll('.tab-info').forEach(tab => tab.style.display = 'none');
    document.getElementById(selected).style.display = 'block';
    activatetab(event.target);
});

document.querySelector('.tab').click();