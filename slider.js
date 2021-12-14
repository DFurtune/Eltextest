(function(){
//If you want to include more images, add the link name and URL of the image in the array list below.
	let images_list = [
		{"url":"./img/Slider1.jpg","name":"image 1","link":""},
		{"url":"./img/Slider2.jpg","name":"image 2","link":""},
		{"url":"./img/Slider3.jpg","name":"image 3","link":""}
	];

	let slider_id = document.querySelector("#slider");

	// append all images
	let dots_div = "";
	let images_div = "";
	for (let i = 0; i < images_list.length; i++) {
		// if no link without href="" tag
		let href = (images_list[i].link == "" ? "":' href="'+images_list[i].link+'"');
		images_div += '<a'+href+' class="hcg-slides"'+(i === 0 ? ' style="display:block"':'')+'>'+
						'<span class="hcg-slide-number">'+(i+1)+'/'+images_list.length+'</span>'+
						'<img src="'+images_list[i].url+'" alt="'+images_list[i].name+'">'+
					 '</a>';
	}
	slider_id.querySelector(".hcg-slider-body").innerHTML = images_div;
	let slide_index = 0;

	let images = slider_id.querySelectorAll(".hcg-slides");
	let prev_button = slider_id.querySelector(".hcg-slide-prev");
	let next_button = slider_id.querySelector(".hcg-slide-next");

	function showSlides() {
		if (slide_index > images.length-1) {
			slide_index = 0;
		}
		if (slide_index < 0) {
			slide_index = images.length-1;
		}
		for (let i = 0; i < images.length; i++) {
			images[i].style.display = "none";
			if (i == slide_index) {
				images[i].style.display = "block";
			}
		}
	}

	prev_button.addEventListener("click", function(event) {
		event.preventDefault();
		slide_index--;
		showSlides();
	}, false);

	next_button.addEventListener("click", function(event){
		event.preventDefault();
		slide_index++;
		showSlides();
	}, false);

})();
