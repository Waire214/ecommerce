window.onscroll = function() {
    scrollfunc();
};
function scrollfunc(){
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var Eleheight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll/Eleheight) * 1000;
    document.getElementById("bar").style.width = scrolled + "%";
}

////// learning point
// let gallery = document.getElementById("gallery");
// let point = [1,2,3,4,5]
// point.sort(sortFunc);
// var para = document.createElement("p");
// var textN = document.createTextNode(point[0]);
// para.appendChild(textN);
// gallery.appendChild(para);
// var strange = document.createElement("p");
// var red = document.createTextNode(point[1]);
// strange.appendChild(red);
// gallery.appendChild(strange);



//beginning of main project
let gallery = document.getElementById("gallery");

//function to sort anything randomly

function sortFunc() {
    return 0.5 - Math.random();
}

//creating html elements and setting attributes in dom

let firstImage = document.createElement("img")
firstImage.setAttribute("src", "images/hair6_ov66pm/hair6_ov66pm_c_scale,w_1200.jpg")
firstImage.setAttribute("sizes", "(min-width: 1200px) 25%, 100vw")
firstImage.setAttribute("srcset", 
"images/hair6_ov66pm/hair6_ov66pm_c_scale,w_300.jpg 300w,images/hair6_ov66pm/hair6_ov66pm_c_scale,w_741.jpg 741w,images/hair6_ov66pm/hair6_ov66pm_c_scale,w_1047.jpg 1047w,images/hair6_ov66pm/hair6_ov66pm_c_scale,w_1140.jpg 1140w,images/hair6_ov66pm/hair6_ov66pm_c_scale,w_1200.jpg 1200w");
firstImage.classList.add("img")

let secondImage = document.createElement("img")
secondImage.setAttribute("src", "images/hair1_mgwelg/hair1_mgwelg_c_scale,w_1200.jpg")
secondImage.setAttribute("sizes", "(min-width: 1200px) 25%, 100vw")
secondImage.setAttribute("srcset", 
"images/hair1_mgwelg/hair1_mgwelg_c_scale,w_300.jpg 300w,images/hair1_mgwelg/hair1_mgwelg_c_scale,w_695.jpg 695w,images/hair1_mgwelg/hair1_mgwelg_c_scale,w_946.jpg 946w,images/hair1_mgwelg/hair1_mgwelg_c_scale,w_1060.jpg 1060w,images/hair1_mgwelg/hair1_mgwelg_c_scale,w_1200.jpg 1200w");
secondImage.classList.add("img")

let thirdImage = document.createElement("img")
thirdImage.setAttribute("src", "images/hair2_zspiuv/hair2_zspiuv_c_scale,w_1200.jpg")
thirdImage.setAttribute("sizes", "(min-width: 1200px) 25%, 100vw")
thirdImage.setAttribute("srcset", 
"images/hair2_zspiuv/hair2_zspiuv_c_scale,w_300.jpg 300w,images/hair2_zspiuv/hair2_zspiuv_c_scale,w_642.jpg 642w,images/hair2_zspiuv/hair2_zspiuv_c_scale,w_833.jpg 833w,images/hair2_zspiuv/hair2_zspiuv_c_scale,w_1033.jpg 1033w,images/hair2_zspiuv/hair2_zspiuv_c_scale,w_1200.jpg 1200w");
thirdImage.classList.add("img")

let fourthImage = document.createElement("img")
fourthImage.setAttribute("src", "images/hair3_ykgwas/hair3_ykgwas_c_scale,w_1200.jpg")
fourthImage.setAttribute("sizes", "(min-width: 1200px) 25%, 100vw")
fourthImage.setAttribute("srcset", 
"images/hair3_ykgwas/hair3_ykgwas_c_scale,w_300.jpg 300w,images/hair3_ykgwas/hair3_ykgwas_c_scale,w_655.jpg 655w,images/hair3_ykgwas/hair3_ykgwas_c_scale,w_859.jpg 859w,images/hair3_ykgwas/hair3_ykgwas_c_scale,w_1117.jpg 1117w,images/hair3_ykgwas/hair3_ykgwas_c_scale,w_1200.jpg 1200w");
fourthImage.classList.add("img")

let fifthImage = document.createElement("img")
fifthImage.setAttribute("src", "images/hair4_yye1hr/hair4_yye1hr_c_scale,w_1200.jpg")
fifthImage.setAttribute("sizes", "(min-width: 1200px) 25%, 100vw")
fifthImage.setAttribute("srcset", 
"images/hair4_yye1hr/hair4_yye1hr_c_scale,w_300.jpg 300w,images/hair4_yye1hr/hair4_yye1hr_c_scale,w_738.jpg 738w,images/hair4_yye1hr/hair4_yye1hr_c_scale,w_1037.jpg 1037w,images/hair4_yye1hr/hair4_yye1hr_c_scale,w_1132.jpg 1132w,images/hair4_yye1hr/hair4_yye1hr_c_scale,w_1200.jpg 1200w");
fifthImage.classList.add("img")

let sixthImage = document.createElement("img")
sixthImage.setAttribute("src", "images/hair5_qpdfkq/hair5_qpdfkq_c_scale,w_1200.jpg")
sixthImage.setAttribute("sizes", "(min-width: 1200px) 25%, 100vw")
sixthImage.setAttribute("srcset", 
"images/hair5_qpdfkq/hair5_qpdfkq_c_scale,w_300.jpg 300w,images/hair5_qpdfkq/hair5_qpdfkq_c_scale,w_708.jpg 708w,images/hair5_qpdfkq/hair5_qpdfkq_c_scale,w_977.jpg 977w,images/hair5_qpdfkq/hair5_qpdfkq_c_scale,w_1154.jpg 1154w,images/hair5_qpdfkq/hair5_qpdfkq_c_scale,w_1200.jpg 1200w");
sixthImage.classList.add("img")

let seventhImage = document.createElement("img")
seventhImage.setAttribute("src", "images/hair7_eddfph/hair7_eddfph_c_scale,w_1200.jpg")
seventhImage.setAttribute("sizes", "(min-width: 1200px) 25%, 100vw")
seventhImage.setAttribute("srcset", 
"images/hair7_eddfph/hair7_eddfph_c_scale,w_300.jpg 300w,images/hair7_eddfph/hair7_eddfph_c_scale,w_652.jpg 652w,images/hair7_eddfph/hair7_eddfph_c_scale,w_907.jpg 907w,images/hair7_eddfph/hair7_eddfph_c_scale,w_1124.jpg 1124w,images/hair7_eddfph/hair7_eddfph_c_scale,w_1200.jpg 1200w");
seventhImage.classList.add("img")

//add the dom elements to an array
//randomly sort the array
//append the array[index] to the gallery dom
//set the transition property to make it smooth

function randomGalleryChange() {
    var galleryImages = [firstImage, secondImage, thirdImage, fourthImage, fifthImage, sixthImage, seventhImage];

    galleryImages.sort(sortFunc);

    gallery.appendChild(galleryImages[0]);
    gallery.appendChild(galleryImages[1]);
    gallery.appendChild(galleryImages[2]);
    gallery.appendChild(galleryImages[3]);
    gallery.appendChild(galleryImages[4]);
    gallery.appendChild(galleryImages[5]);
    gallery.appendChild(galleryImages[6]);

    gallery.style.transitionTimingFunction = "ease";
}

//set the interval to make the random auto

let timer = setInterval(randomGalleryChange, 1000);

//remove auto when gallery section is moved over
//add auto when your mouse is out of the gallery section

gallery.addEventListener("mouseover", function(){
    clearInterval(timer);
  })

gallery.addEventListener("mouseout", function(){
    timer = setInterval(randomGalleryChange,1000);
})

//create a new div and append it to the gallery dom

let textDiv = document.createElement("div");
let textNode = document.createTextNode("I am being shuffled randomly");
textDiv.appendChild(textNode);
textDiv.classList.add("gallery")
textDiv.style.backgroundColor = "tomato";
gallery.appendChild(textDiv);