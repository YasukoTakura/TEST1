var p = Forguncy.Page;
p.ready(function () {
        p.getCell("momyCell").bind("mouseenter", function (e) {
            var textCell = p.getCell("motext1");
            textCell.setValue("マウスがあたってます");
        }
       );

        p.getCell("momyCell").bind("mouseleave", function (e) {
            var textCell = p.getCell("motext1");
             textCell.setValue("");
        }
        );
}
);