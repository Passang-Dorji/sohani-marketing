"use client";

import { motion } from "framer-motion";

const products = [
	{
		id: 1,
		name: "Fresh Lavender",
		description:
			"Gentle on fabrics, tough on stains. Perfect for everyday laundry.",
		price: "Nu. 12.99/-",
		size: "2L",
		color: "from-purple-400 to-purple-600",
		icon: "💜",
		features: ["Anti-bacterial", "Color Safe", "Long-lasting Fragrance"],
	},
	{
		id: 2,
		name: "Ocean Breeze",
		description: "Deep cleaning power with the refreshing scent of the ocean.",
		price: "Nu. 14.99/-",
		size: "2.5L",
		color: "from-sky-400 to-blue-600",
		icon: "🌊",
		features: ["Stain Remover", "Fresh Scent", "Eco-Friendly"],
		popular: true,
	},
	{
		id: 3,
		name: "Citrus Burst",
		description: "Energizing citrus formula that removes the toughest stains.",
		price: "Nu. 13.99/-",
		size: "2L",
		color: "from-orange-400 to-yellow-500",
		icon: "🍊",
		features: ["Grease Fighter", "Brightening", "Natural Enzymes"],
	},
	{
		id: 4,
		name: "Pure & Gentle",
		description:
			"Hypoallergenic formula perfect for sensitive skin and baby clothes.",
		price: "Nu. 15.99/-",
		size: "2L",
		color: "from-pink-300 to-rose-400",
		icon: "👶",
		features: ["Hypoallergenic", "No Dyes", "Dermatologist Tested"],
	},
	{
		id: 5,
		name: "Power Clean Pro",
		description: "Industrial strength cleaning for the dirtiest jobs.",
		price: "Nu. 18.99/-",
		size: "3L",
		color: "from-emerald-400 to-green-600",
		icon: "💪",
		features: ["Heavy Duty", "Odor Eliminator", "Work Clothes"],
	},
	{
		id: 6,
		name: "Midnight Rose",
		description: "Luxurious rose-scented formula for premium fabric care.",
		price: "Nu. 16.99/-",
		size: "2L",
		color: "from-rose-400 to-red-500",
		icon: "🌹",
		features: ["Premium Care", "Silk Safe", "Elegant Scent"],
	},
];

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 30 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
		},
	},
};

export default function Products() {
	return (
		<section id="products" className="py-20 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Section Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-center mb-16"
				>
					<span className="inline-block px-4 py-2 rounded-full bg-sky-100 text-sky-600 font-semibold text-sm mb-4">
						Our Products
					</span>
					<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
						Choose Your Perfect
						<span className="text-sky-500"> Clean</span>
					</h2>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto">
						Discover our range of premium laundry solutions designed to keep
						your clothes looking and smelling amazing.
					</p>
				</motion.div>

				{/* Products Grid */}
				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
				>
					{products.map((product) => (
						<motion.div
							key={product.id}
							variants={itemVariants}
							whileHover={{ y: -10 }}
							className="relative group"
						>
							{product.popular && (
								<div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
									<span className="px-4 py-1 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-white text-sm font-bold shadow-lg">
										⭐ Most Popular
									</span>
								</div>
							)}

							<div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
								{/* Product Image Area */}
								<div
									className={`h-48 bg-gradient-to-br ${product.color} flex items-center justify-center relative overflow-hidden`}
								>
									<motion.div
										whileHover={{ scale: 1.2, rotate: 10 }}
										className="text-7xl"
									>
										{product.icon}
									</motion.div>

									{/* Decorative bubbles */}
									<div className="absolute top-4 left-4 w-8 h-8 bg-white/20 rounded-full" />
									<div className="absolute bottom-4 right-4 w-12 h-12 bg-white/10 rounded-full" />
									<div className="absolute top-1/2 right-8 w-6 h-6 bg-white/15 rounded-full" />
								</div>

								{/* Product Info */}
								<div className="p-6">
									<div className="flex justify-between items-start mb-3">
										<h3 className="text-xl font-bold text-gray-900">
											{product.name}
										</h3>
										<span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
											{product.size}
										</span>
									</div>

									<p className="text-gray-600 mb-4 text-sm leading-relaxed">
										{product.description}
									</p>

									{/* Features */}
									<div className="flex flex-wrap gap-2 mb-4">
										{product.features.map((feature, index) => (
											<span
												key={index}
												className="text-xs px-2 py-1 bg-sky-50 text-sky-600 rounded-full"
											>
												{feature}
											</span>
										))}
									</div>

									{/* Price & CTA */}
									<div className="flex items-center justify-between pt-4 border-t border-gray-100">
										<div>
											<span className="text-2xl font-bold text-gray-900">
												{product.price}
											</span>
										</div>
										<motion.button
											whileHover={{ scale: 1.05 }}
											whileTap={{ scale: 0.95 }}
											className={`px-5 py-2.5 rounded-full bg-gradient-to-r ${product.color} text-white font-semibold shadow-lg hover:shadow-xl transition-shadow`}
										>
											Order Now
										</motion.button>
									</div>
								</div>
							</div>
						</motion.div>
					))}
				</motion.div>

				{/* CTA Banner */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.3 }}
					className="mt-16 p-8 md:p-12 rounded-3xl gradient-primary text-white text-center relative overflow-hidden"
				>
					{/* Background decoration */}
					<div className="absolute top-0 left-0 w-full h-full opacity-10">
						<div className="absolute top-4 left-1/4 text-8xl">🧼</div>
						<div className="absolute bottom-4 right-1/4 text-8xl">✨</div>
					</div>

					<div className="relative z-10">
						<h3 className="text-2xl md:text-3xl font-bold mb-4">
							Can&apos;t decide? We&apos;ll help you choose!
						</h3>
						<p className="text-sky-100 mb-6 max-w-2xl mx-auto">
							Contact us on WhatsApp and our experts will recommend the perfect
							product for your needs.
						</p>
						<motion.a
							href="https://wa.me/+97517845563?text=Hi! I need help choosing the right detergent."
							target="_blank"
							rel="noopener noreferrer"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className="inline-flex items-center gap-2 px-8 py-4 bg-white text-sky-600 rounded-full font-bold shadow-xl hover:shadow-white/20 transition-all"
						>
							<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
								<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
							</svg>
							Chat with Expert
						</motion.a>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
