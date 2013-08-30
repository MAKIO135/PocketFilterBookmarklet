if(document.location != 'http://getpocket.com/a/queue/list/'){
	alert('Pocket Filter Bookmarklet works only with List View');
	document.location = 'http://getpocket.com/a/queue/list/';
}


else {
	if($('#PocketFilter').length === 0){
		var div = $('<div id="PocketFilter"><input type="text" style="margin:0 10px;" value="tag1, tag2, ..." id="PocketFilterTags" onblur="if (this.value == "") {this.value = "tag1, tag2, ...";}" onfocus="if (this.value == "tag1, tag2, ...") {this.value = "";}"><p style="color:#fff; display:inline;"><input id="orFilter" style="margin:0 10px;" type="radio" name="filterGroup" checked>OR filter<input id="andFilter" style="margin:0 10px;" type="radio" name="filterGroup">AND filter</p><button style="margin:0 10px; padding:0 5px;" onclick="filter();">Filter tags</button><p style="color:#fff; display:inline;">By <a href="http://twitter.com/makio135" target="_blank" style="color:#fff; text-decoration:none;">@Makio135</a></p></div>');
		$(div).css({
			'position': 'absolute',
			'top': 0,
			'left': 0,
			'width': '100%',
			'height': '30px',
			'z-index':'9999999',
			'background-color': '#333',
			'padding-top': '10px'
		});
		$('body').append(div);
	}

	function filter(){
		var filters = $('#PocketFilterTags').val().split(',');
		for (var i = 0; i < filters.length; i++) {
			while(filters[i].charAt(0) === ' ') filters[i] = filters[i].substr(1);
		}
		// console.log(filters);

		var items = $('li.item');
		if(filters[0] === ""){
			for(var i=0, len=items.length;i<len;i++){
				$(items[i]).show();
			}
		}
		else{
			var filterId = $("input[@name=filterGroup]:checked").attr('id');
			// console.log(filterId);
			for(var i=0, len=items.length;i<len;i++){
				var tags = $(items[i]).find('.tags>span>a');
				var filterOK = false;

				if(filterId === "orFilter"){
					filterOK = false;
					for(var t=0, len2=tags.length; t<len2; t++){
						// console.log('item '+i+': '+$(tags[t]).text());
						for(var f=0, len3=filters.length; f<len3; f++){
							if($(tags[t]).text() === filters[f]){
								// console.log('item '+i+': found '+ filters[f]);
								filterOK = true;
							}
						}
					}
				}
				else if(filterId === "andFilter"){
					filterOK = true;
					var hasFilter = new Array(filters.length);
					for(var f=0, len3=filters.length; f<len3; f++){
						hasFilter[f] = false;
						for(var t=0, len2=tags.length; t<len2; t++){
							if($(tags[t]).text() === filters[f]){
								hasFilter[f] = true;
								// console.log('item '+i+': found '+ filters[f]);
							}
						}
						if(!hasFilter[f]) filterOK = false;
					}
				}
				// console.log('filterOK: '+ filterOK);
				if(!filterOK) $(items[i]).hide();
				else $(items[i]).show();
			}
		}
	}
}