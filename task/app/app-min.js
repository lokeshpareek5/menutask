/*! menutask 1.0.0 2019-04-25 */

$(document).ready(function(){$.ajax({type:"GET",url:"https://jsonblob.com/api/jsonBlob/6766327f-607d-11e9-95ef-9bcb815ba4a4",dataType:"json",success:function(a){var i=$("<nav></nav>"),s=$("<ul></ul>").attr("class","main-nav");i.append(s);var d=$("<div class='dropdownContent' style='width: 200px; height: 100px; display: inline-block;'></div>");i.append(d),$.each(a,function(a,n){var e=$("<li class='main-nav-item'></li>").append($("<a></a>").attr("href","#").html(a));s.append(e),$("#menuTarget").append(i);var t=$("<ul></ul>").attr("class","sub-menu-"+a);d.append(t),t.attr("class","hide sub-menu-"+a),t.attr("data-for",a),$.each(n,function(a,n){var e=$("<li class='sub-main-nav-item'></li>").append($("<a></a>").attr("href","#").html(n.title));t.append(e)}),$("#menuTarget").append(i)})}}),$(document).on("mouseover",".main-nav-item",function(){var a=$(this);$(document).find(".sub-menu-"+a[0].textContent).removeClass("hide")}),$(document).on("mouseleave",".main-nav-item",function(){var a=$(this);$(document).find(".sub-menu-"+a[0].textContent).addClass("hide")})});