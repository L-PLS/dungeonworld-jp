
Hooks.once('init', () => {

	if(typeof Babele !== 'undefined') {
		
		Babele.get().register({
			module: 'dungeonworld-jp',
			lang: 'ja',
			dir: 'compendium'
		});
	}
});