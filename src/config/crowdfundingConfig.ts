import type { CrowdfundingConfig } from "../types/config";

export const crowdfundingConfig: CrowdfundingConfig = {
	items: [
		{
			label: "霸王龙皮肤",
			itemName: "霸王龙科技风格皮肤",
			itemDescription: "为方舟飞升中的霸王龙制作全新的科技风格皮肤。",
			itemImage: "/assets/images/crowdfunding/item-1.png",
			itemGallery: [
				"/assets/images/crowdfunding/item-1.png",
				"/assets/images/crowdfunding/item-2.png",
			],
			current: 0,
			target: 100,
			currency: "元",
			note: "支持完成后会优先推进这项内容，赞助请直接通过QQ联系我。",
			updatedAt: "2026-06-26",
		},
		{
			label: "鲨齿龙皮肤",
			itemName: "鲨齿龙科技风格皮肤",
			itemDescription: "为方舟飞升中的鲨齿龙制作全新的科技风格皮肤。",
			itemImage: "/assets/images/crowdfunding/item-2.png",
			itemGallery: ["/assets/images/crowdfunding/item-2.png"],
			current: 0,
			target: 100,
			currency: "元",
			note: "支持完成后会优先推进这项内容，赞助请直接通过QQ联系我。",
			updatedAt: "2026-06-26",
		},
		{
			label: "南方巨兽龙皮肤",
			itemName: "南方巨兽龙科技风格皮肤",
			itemDescription: "为方舟飞升中的南方巨兽龙制作全新的科技风格皮肤。",
			itemImage: "/assets/images/crowdfunding/item-1.png",
			itemGallery: ["/assets/images/crowdfunding/item-1.png"],
			current: 0,
			target: 100,
			currency: "元",
			note: "支持完成后会优先推进这项内容，赞助请直接通过QQ联系我。",
			updatedAt: "2026-06-26",
		},
	],
};
