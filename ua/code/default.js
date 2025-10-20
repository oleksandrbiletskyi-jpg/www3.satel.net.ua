// Предзагрузка изображений (элементов дизайна страницы)

var preload_images = [
  "bg_left_bottom.png",
  "bg_left_main.png",
  "bg_main.png",
  "bg_menu_hover.png",
  "bg_menu.png",
  "bg_top_left.png",
  "bg_top.png",
  "bottom1.jpg",
  "bottom2.png",
  "bt1.png",
  "bt2.png",
  "bt3.png",
  "bt_cont.png",
  "bt_home.png",
  "bt_search.png",
  "bt_top.png",
  "circle.png",
  "link.png",
  "main1.png",
  "main2.png",
  "main3.png",
  "main4.png",
  "main5.png",
  "main_bg.png",
  "map.jpg",
  "separate.png",
  "top1.jpg",
  "top2.png"
  ];

for(var i = 0; i < preload_images.length; i++) {
  var image = "/images/" + preload_images[i];
  preload_images[i] = new Image();
  preload_images[i].src = image;
}
