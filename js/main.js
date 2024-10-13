jQuery(document).ready(function () {
jQuery("#switchCheckbox").change(function () {
    let data= {
        "night":" night ",
        "night_details":"night-details",
        "checked":"checked",

    }
    localStorage.setItem("theme-mode",JSON.stringify(data));
    let return_data=localStorage.getItem("theme-mode");
    if(this.checked){
        jQuery('body').addClass(JSON.parse(return_data).night);
        jQuery('section').addClass(JSON.parse(return_data).night_details);
        jQuery(this).attr("checked",JSON.parse(return_data).checked)

    }else{
        localStorage.clear('theme-mode');
        jQuery('body').removeClass(JSON.parse(return_data).night);
        jQuery('section').removeClass(JSON.parse(return_data).night_details);
        jQuery.removeAttribute("checked");

    }

});
    if(localStorage.getItem('theme-mode')){
        let return_data = localStorage.getItem('theme-mode');
        jQuery('body').addClass(JSON.parse(return_data).night);
        jQuery('section').addClass(JSON.parse(return_data).night_details);
        jQuery("#switchCheckbox").attr("checked",JSON.parse(return_data).checked);

    }
jQuery('#submit').on('click',function (e) {
    e.preventDefault();
    let name=$('#name').val();
    let family=$('#family').val();
    let  code=$('#code').val();
    let  age=$('#age').val();


    if (age>=12 && age<=14){
        alert(" در رده سنی 12 تا 14 سال ثبت نام شده اید"      )
    }else if (age>=15 && age<=17){

        alert("شما در رده سنی 15 تا 17 سال ثبت نام شده اید")
    }else if (age>=18 && age<=30){
        alert("شما در رده سنی 18 تا 30 سال ثبت نام شده اید")

    }else {
        alert("فعلا در رده سنی شما ثبت نامی نداریم")
    }

})

});