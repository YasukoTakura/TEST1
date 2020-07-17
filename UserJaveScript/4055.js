var p = Forguncy.Page;
p.ready(function () {
        p.getCell("myCell").bind("mouseenter", function (e) {
            var textCell = p.getCell("text1");
            textCell.setValue("マウスがあたってます");
        }
       );

        p.getCell("myCell").bind("mouseleave", function (e) {
            var textCell = p.getCell("text1");
             textCell.setValue("");
        }
        );
}
);
///
///var p = Forguncy.Page;
///p.ready(function(){
///    p.getCell("button1").bind("click",null,function(e){
///        var textCell = p.getCell("textbox1");
///        textCell.setValue("test value");
///    })
///});
///
