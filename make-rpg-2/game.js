import 'https://unpkg.com/@hackforplay/common@^0.10/dist/register';

// ここからゲームがはじまったときのルール
rule.ゲームがはじまったとき(async function() {
	Hack.changeMap('map1'); // map1 をロード
	
	const player = rule.つくる('プレイヤー', 3, 5, 'map1', ('▼ むき', Dir.した));
	window.player = player;
	
	/*+ キャラクター アイテム */
});
// ここまでゲームがはじまったときのルール
