//@ts-ignore
const config = {
	async redirects() {
		return [
			{
				source: "/discord",
				destination: "https://discord.gg/school",
				permanent: true,
			},
		];
	},
	images: {
		domains: [
			// for local testing purposes
			"www.schoolsimplified.org",
			"schoolsimplified.org",
			// notion-hosted images
			"s3.us-west-2.amazonaws.com",
		],
	},
	// rust compiler (5x faster build times)
	swcMinify: false,
};

const withBundleAnalyzer = require("@next/bundle-analyzer")({
	enabled: process.env.ANALYZE === "true",
});
module.exports = withBundleAnalyzer(config);
