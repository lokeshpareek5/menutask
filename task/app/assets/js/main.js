$( document ).ready(function() {
    //get menu items using ajax
    $.ajax({
        type: 'GET', 
        url: 'https://jsonblob.com/api/jsonBlob/6766327f-607d-11e9-95ef-9bcb815ba4a4',
        dataType: 'json',
        success: function (data) {
            var nav = $("<nav></nav>");
            var ul = $("<ul></ul>").attr("class", "main-nav");
            nav.append(ul);
            var subMenuContent = $("<div class='dropdownContent' style='width: 200px; height: 100px; display: inline-block;'></div>");
            nav.append(subMenuContent);
            $.each(data, function(index, element) {
                var li = $("<li class='main-nav-item'></li>").append($("<a></a>").attr("href", "#").html(index));
                ul.append(li);
                $("#menuTarget").append(nav);
                
                var subMenuUl = $("<ul></ul>").attr("class", "sub-menu"+'-'+index);
                subMenuContent.append(subMenuUl);
                subMenuUl.attr("class", "hide sub-menu"+'-'+index);
                subMenuUl.attr("data-for", index);
                $.each(element, function(index, element) {
                    var li = $("<li class='sub-main-nav-item'></li>").append($("<a></a>").attr("href", "#").html(element.title));
                    subMenuUl.append(li);
                });
                
                $("#menuTarget").append(nav);
            });
        }
    });
    
    $(document).on( "mouseover", ".main-nav-item", function(){
        var $this = $(this);
        var subMenu = $(document).find(".sub-menu-"+ $this[0].textContent);
        subMenu.removeClass("hide");
    });
   
    $(document).on( "mouseleave", ".main-nav-item", function(){
        var $this = $(this);
        var subMenu = $(document).find(".sub-menu-"+ $this[0].textContent);
        subMenu.addClass("hide");
    });
});
