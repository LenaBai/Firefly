import type { CrowdfundingConfig } from "../types/config";

export const crowdfundingConfig: CrowdfundingConfig = {
	items: [
		{
			label: "霸王龙皮肤",
			itemName: "霸王龙科技风格皮肤",
			itemDescription: "为方舟飞升中的霸王龙制作全新的科技风格皮肤。",
			itemImage: "/assets/images/crowdfunding/item-1.jpg",
			itemGallery: [
				"/assets/images/crowdfunding/item-1.jpg",
				"/assets/images/crowdfunding/item-2.png",
			],
			current: 0,
			target: 300,
			currency: "元",
			note: "支持完成后会优先推进这项内容。",
			updatedAt: "2026-06-26",
		},
		{
			label: "鲲鹏龙皮肤",
			itemName: "鲲鹏龙科技风格皮肤",
			itemDescription: "为方舟飞升中的鲲鹏龙制作全新的科技风格皮肤。",
			itemImage: "/assets/images/crowdfunding/item-2.png",
			itemGallery: ["/assets/images/crowdfunding/item-2.png"],
			current: 0,
			target: 280,
			currency: "元",
			note: "第二个众筹项目，可与上方同时进行。",
			updatedAt: "2026-06-26",
		},
	],
};
