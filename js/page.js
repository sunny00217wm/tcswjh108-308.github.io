$(document).ready(function(){$('<div>').append($('div#load')[0]).html();$('main').attr('style','display:block;');$("section div#concent h1, section div#concent h2").each(function(){var text=$(this).text();$("nav#section ul").append(`<li class='tag-${this.nodeName.toLowerCase()}'><a href='#${text.toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,'')}'>${text}</a></li>`);$(this).attr("id",text.toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,''));$("nav#section ul li:first-child a").parent().addClass("active");});$("nav#section ul li").on("click","a",function(event){var position=$($(this).attr("href")).offset().top-190;$("html, body").animate({scrollTop: position},400);$("nav#section ul li a").parent().removeClass("active");$(this).parent().addClass("active");event.preventDefault();});})
