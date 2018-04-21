import 'hackforplay/core';

function createMap1() {
	// map1 というマップを作る
	const mapName = 'map1';

	// 15, 10 の大きさにする ( 32 の部分は書き換えないでください )
	const map = new RPGMap(32, 32, 15, 10);

	map.imagePath = 'enchantjs/x2/dotmat.gif';

	const ___ = -1;

	// マップの地形をつくる
	map.bmap.loadData(
		[
			[
				342,
				342,
				342,
				342,
				342,
				342,
				342,
				342,
				342,
				342,
				342,
				342,
				342,
				342,
				342
			],
			[
				342,
				342,
				342,
				342,
				342,
				342,
				342,
				342,
				342,
				342,
				342,
				342,
				342,
				342,
				342
			],
			[
				342,
				342,
				342,
				342,
				342,
				342,
				342,
				342,
				342,
				342,
				342,
				342,
				342,
				342,
				342
			],
			[
				342,
				342,
				342,
				342,
				342,
				342,
				342,
				342,
				342,
				342,
				342,
				342,
				342,
				342,
				342
			],
			[
				342,
				342,
				342,
				342,
				342,
				342,
				342,
				342,
				342,
				342,
				342,
				342,
				342,
				342,
				342
			],
			[
				342,
				342,
				342,
				342,
				342,
				342,
				342,
				342,
				342,
				342,
				342,
				342,
				342,
				342,
				342
			],
			[
				342,
				342,
				342,
				342,
				342,
				342,
				342,
				342,
				342,
				342,
				342,
				342,
				342,
				342,
				342
			],
			[
				342,
				342,
				342,
				342,
				342,
				342,
				342,
				342,
				342,
				342,
				342,
				342,
				342,
				342,
				342
			],
			[
				342,
				342,
				342,
				342,
				342,
				342,
				342,
				342,
				342,
				342,
				342,
				342,
				342,
				342,
				342
			],
			[
				342,
				342,
				342,
				342,
				342,
				342,
				342,
				342,
				342,
				342,
				342,
				342,
				342,
				342,
				342
			]
		],
		[
			[
				321,
				321,
				321,
				341,
				341,
				341,
				___,
				___,
				___,
				341,
				341,
				___,
				___,
				321,
				321
			],
			[
				321,
				321,
				321,
				___,
				___,
				___,
				___,
				___,
				___,
				___,
				___,
				___,
				___,
				321,
				321
			],
			[
				321,
				321,
				321,
				___,
				___,
				___,
				___,
				___,
				___,
				___,
				___,
				___,
				___,
				321,
				321
			],
			[
				341,
				341,
				341,
				___,
				___,
				___,
				___,
				___,
				___,
				___,
				___,
				___,
				___,
				341,
				341
			],
			[
				___,
				___,
				___,
				___,
				___,
				___,
				___,
				___,
				___,
				___,
				___,
				___,
				___,
				___,
				___
			],
			[
				___,
				___,
				___,
				___,
				___,
				___,
				___,
				___,
				___,
				___,
				___,
				___,
				___,
				___,
				402
			],
			[
				___,
				___,
				___,
				___,
				___,
				___,
				___,
				___,
				___,
				___,
				___,
				___,
				___,
				___,
				___
			],
			[
				321,
				321,
				321,
				___,
				___,
				___,
				321,
				341,
				321,
				___,
				___,
				___,
				___,
				321,
				321
			],
			[
				321,
				321,
				321,
				___,
				___,
				___,
				321,
				402,
				321,
				___,
				___,
				___,
				___,
				321,
				321
			],
			[
				341,
				341,
				341,
				341,
				341,
				341,
				341,
				341,
				341,
				341,
				341,
				___,
				___,
				341,
				341
			]
		]
	);

	// マップの歩ける場所を決める
	// 1 なら歩けないし、 0 なら歩ける
	map.cmap = [
		[1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1],
		[1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
		[1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
		[1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1],
		[1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1]
	];

	Hack.maps[mapName] = map;
}

function createMap2() {
	// map2 というマップを作る
	const mapName = 'map2';

	// 15, 10 の大きさにする ( 32 の部分は書き換えないでください )
	const map = new RPGMap(32, 32, 15, 10);

	map.imagePath = 'enchantjs/x2/dotmat.gif';

	const ___ = -1;

	// マップの地形をつくる
	map.bmap.loadData(
		[
			[
				323,
				323,
				323,
				323,
				323,
				323,
				323,
				323,
				323,
				323,
				323,
				323,
				323,
				323,
				323
			],
			[
				323,
				323,
				323,
				323,
				323,
				323,
				323,
				323,
				323,
				323,
				323,
				323,
				323,
				323,
				323
			],
			[
				323,
				323,
				323,
				323,
				323,
				323,
				323,
				323,
				323,
				323,
				323,
				323,
				323,
				323,
				323
			],
			[
				323,
				323,
				323,
				323,
				323,
				323,
				323,
				323,
				323,
				323,
				323,
				323,
				323,
				323,
				323
			],
			[
				323,
				323,
				323,
				323,
				323,
				323,
				323,
				323,
				323,
				323,
				323,
				323,
				323,
				323,
				323
			],
			[
				323,
				323,
				323,
				323,
				323,
				323,
				323,
				323,
				323,
				323,
				323,
				323,
				323,
				323,
				323
			],
			[
				323,
				323,
				323,
				323,
				323,
				323,
				323,
				323,
				323,
				323,
				323,
				323,
				323,
				323,
				323
			],
			[
				323,
				323,
				323,
				323,
				323,
				323,
				323,
				323,
				323,
				323,
				323,
				323,
				323,
				323,
				323
			],
			[
				323,
				323,
				323,
				323,
				323,
				323,
				323,
				323,
				323,
				323,
				323,
				323,
				323,
				323,
				323
			],
			[
				323,
				323,
				323,
				323,
				323,
				323,
				323,
				323,
				323,
				323,
				323,
				323,
				323,
				323,
				323
			]
		],
		[
			[
				320,
				320,
				320,
				320,
				320,
				320,
				320,
				320,
				320,
				320,
				___,
				___,
				___,
				___,
				___
			],
			[
				320,
				340,
				340,
				340,
				340,
				340,
				340,
				340,
				340,
				340,
				___,
				___,
				___,
				___,
				___
			],
			[
				320,
				___,
				___,
				___,
				___,
				___,
				___,
				___,
				___,
				___,
				___,
				___,
				___,
				___,
				___
			],
			[
				320,
				___,
				___,
				___,
				340,
				340,
				340,
				340,
				320,
				320,
				___,
				___,
				___,
				___,
				___
			],
			[
				320,
				___,
				___,
				___,
				___,
				___,
				___,
				___,
				320,
				320,
				___,
				___,
				___,
				___,
				___
			],
			[
				320,
				320,
				320,
				320,
				320,
				320,
				320,
				___,
				320,
				320,
				320,
				320,
				320,
				320,
				320
			],
			[
				320,
				320,
				320,
				320,
				320,
				320,
				340,
				___,
				340,
				320,
				320,
				320,
				320,
				320,
				320
			],
			[
				320,
				320,
				320,
				320,
				320,
				320,
				___,
				___,
				___,
				320,
				320,
				320,
				320,
				320,
				320
			],
			[
				320,
				320,
				320,
				320,
				320,
				320,
				___,
				___,
				___,
				340,
				320,
				320,
				320,
				320,
				320
			],
			[
				340,
				340,
				340,
				340,
				340,
				340,
				___,
				___,
				___,
				___,
				340,
				340,
				340,
				340,
				340
			]
		]
	);

	// マップの歩ける場所を決める
	// 1 なら歩けないし、 0 なら歩ける
	map.cmap = [
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
		[1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
		[1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1],
		[1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1],
		[1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1],
		[1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1],
		[1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1]
	];

	Hack.maps[mapName] = map;
}

Hack.on('load', createMap1);
Hack.on('load', createMap2);
