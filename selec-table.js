(function ($) {
    $row = {
        text: "",
        id: -1
    };
    $.fn.selectable = function (tabindex) {
        $(this).find("tr").each(function () {
            if ($(this).index() != 0) {
                $(this).addClass("selectable-default");
                $(this).attr("tabindex", ((tabindex == null) ? "10" : tabindex));
                $(this).click(function () {
                    event($(this));
                });
                $(this).keypress(function (e) {
                    if (e.which == 13) {
                        event($(this));
                    }
                });
            }
        });
    };

    function event(obj) {
        if($(obj).hasClass("selectable-active"))
        {
            $(obj).removeClass("selectable-active");
            $row.id = -1;
            $row.text = "";
            return false;
        }
        $(obj).parent().find("tr").each(function () {
            $(this).removeClass("selectable-active");
        });
        $(obj).addClass("selectable-active");
        $row.text = $(obj).text();
        $row.id = $(obj).index();
    }
}(jQuery));