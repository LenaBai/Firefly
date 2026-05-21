import type { SponsorConfig } from "../types/config";

export const sponsorConfig: SponsorConfig = {
	// 页面标题，如果留空则使用 i18n 中的翻译
	title: "",

	// 页面描述文本，如果留空则使用 i18n 中的翻译
	description: "",

	// 赞助用途说明
	usage:
		"您的赞助将用于服务器维护、内容创作和功能开发，帮助我持续提供优质内容。",

	// 是否显示赞助者列表
	showSponsorsList: true,

	// 是否显示评论区，需要先在commentConfig.ts启用评论系统
	showComment: true,

	// 是否在文章详情页底部显示赞助按钮
	showButtonInPost: true,

	// 赞助方式列表
	methods: [
		{
			name: "支付宝",
			icon: "fa7-brands:alipay",
			// 收款码图片路径（需要放在 public 目录下）
			qrCode: "/assets/images/sponsor/alipay2.png",
			link: "",
			description: "使用 支付宝 扫码赞助",
			enabled: true,
		},
		{
			name: "微信",
			icon: "fa7-brands:weixin",
			qrCode: "/assets/images/sponsor/wechat2.png",
			link: "",
			description: "使用 微信 扫码赞助",
			enabled: true,
		},
		{
			name: "ko-fi",
			icon: "simple-icons:kofi",
			qrCode: "https://ko-fi.com/shinalena",
			link: "",
			description: "Buy a Coffee for Firefly",
			enabled: true,
		},
		{
			name: "爱发电",
			icon: "simple-icons:afdian",
			qrCode: "",
			link: "https://www.ifdian.net/a/Lena_Bai",
			description: "通过 爱发电 进行赞助",
			enabled: true,
		},
	],

	// 赞助者列表（可选）
	sponsors: [
		// 示例：已实名赞助者
		{
			name: "道九闲歌",
			amount: "感谢支持",
			date: "2026-05-19",
		},

		// 示例：匿名赞助者
		{
			name: "匿名用户",
			amount: "感谢支持",
			date: "2025-10-01",
		},
		{
			name: "旦那さん",
			amount: "感谢支持",
			date: "2026-05-14",
		},
		{
			name: "瑹",
			amount: "感谢支持",
			date: "2026-05-17",
		},
		{
			name: "lost-",
			amount: "感谢支持",
			date: "2026-04-30",
		},
		{
			name: "月忻",
			amount: "感谢支持",
			date: "2026-04-09",
		},
		{
			name: "扑朔迷离",
			amount: "感谢支持",
			date: "2026-05-22",
		},
		{
			name: "仙于点威",
			amount: "感谢支持",
			date: "2026-05-22",
		},
		{
			name: "石黑英雄红凯",
			amount: "感谢支持",
			date: "2026-05-22",
		},
		{
			name: "烤面包机",
			amount: "感谢支持",
			date: "2026-05-22",
		},
		{
			name: "琦晓雪",
			amount: "感谢支持",
			date: "2026-05-22",
		},
		{
			name: "水月",
			amount: "感谢支持",
			date: "2026-05-22",
		},
		{
			name: "♂90%的苏打",
			amount: "感谢支持",
			date: "2026-05-22",
		},
		{
			name: "连接酶",
			amount: "感谢支持",
			date: "2026-05-22",
		},
		{
			name: "尘",
			amount: "感谢支持",
			date: "2026-05-22",
		},
		{
			name: "「CENSORED」",
			amount: "感谢支持",
			date: "2026-05-22",
		},
		{
			name: "昔涟",
			amount: "感谢支持",
			date: "2026-05-22",
		},
		{
			name: "danten",
			amount: "感谢支持",
			date: "2026-05-22",
		},
		{
			name: "寂如夜静如水",
			amount: "感谢支持",
			date: "2026-05-22",
		},
	],
};
