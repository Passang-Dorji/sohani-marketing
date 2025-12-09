"use client";

import { motion } from "framer-motion";

const testimonials = [
	{
		id: 1,
		name: "Sarah ",
		role: "Busy Mom of 3",
		avatar: "👩",
		rating: 5,
		text: "Sohani Clean has been a game changer for our family! With three kids, laundry was always a nightmare. Now everything comes out perfectly clean and smelling amazing. The stain removal is incredible!",
	},
	{
		id: 2,
		name: "Michael ",
		role: "Fitness Enthusiast",
		avatar: "👨",
		rating: 5,
		text: "I work out daily and my gym clothes used to smell terrible even after washing. The Power Clean Pro completely eliminates all odors. My workout gear has never been fresher!",
	},
	{
		id: 3,
		name: "Emily ",
		role: "Eco-Conscious Consumer",
		avatar: "👩‍🦱",
		rating: 5,
		text: "Finally a detergent that's both effective AND eco-friendly! I love that I can get my clothes perfectly clean without harming the environment. The Ocean Breeze scent is absolutely divine.",
	},
	{
		id: 4,
		name: "David Thompson",
		role: "New Dad",
		avatar: "👨‍🦲",
		rating: 5,
		text: "The Pure & Gentle formula is perfect for our baby's clothes. No irritation, no harsh chemicals, just soft and clean baby clothes. Highly recommend for parents!",
	},
	{
		id: 5,
		name: "Lisa Martinez",
		role: "Hotel Manager",
		avatar: "👩‍💼",
		rating: 5,
		text: "We switched all our hotel laundry to Sohani Clean products. The quality is exceptional, our guests love the fresh scent, and the cost savings from the concentrated formula have been significant.",
	},
	{
		id: 6,
		name: "James ",
		role: "Construction Worker",
		avatar: "👷",
		rating: 5,
		text: "My work clothes get absolutely filthy every day. The Power Clean Pro handles grease, dirt, and everything else I throw at it. It's the only detergent that actually works for my needs.",
	},
];

export default function Testimonials() {
	return (
		<section id="testimonials" className="py-20 bg-white overflow-hidden">
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
						Customer Love
					</span>
					<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
						What Our Customers
						<span className="text-sky-500"> Say</span>
					</h2>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto">
						Join thousands of satisfied customers who have made the switch to
						Sohani Clean.
					</p>
				</motion.div>

				{/* Testimonials Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
					{testimonials.map((testimonial, index) => (
						<motion.div
							key={testimonial.id}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							whileHover={{ y: -5 }}
							className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative"
						>
							{/* Quote Icon */}
							<div className="absolute top-4 right-4 text-sky-200 text-4xl">
								&ldquo;
							</div>

							{/* Rating */}
							<div className="flex gap-1 mb-4">
								{[...Array(testimonial.rating)].map((_, i) => (
									<motion.span
										key={i}
										initial={{ opacity: 0, scale: 0 }}
										whileInView={{ opacity: 1, scale: 1 }}
										viewport={{ once: true }}
										transition={{ delay: i * 0.1 }}
										className="text-amber-400 text-xl"
									>
										★
									</motion.span>
								))}
							</div>

							{/* Text */}
							<p className="text-gray-600 mb-6 leading-relaxed relative z-10">
								{testimonial.text}
							</p>

							{/* Author */}
							<div className="flex items-center gap-3">
								<div className="w-12 h-12 rounded-full bg-gradient-to-br from-sky-400 to-cyan-500 flex items-center justify-center text-2xl">
									{testimonial.avatar}
								</div>
								<div>
									<div className="font-bold text-gray-900">
										{testimonial.name}
									</div>
									<div className="text-sm text-gray-500">
										{testimonial.role}
									</div>
								</div>
							</div>
						</motion.div>
					))}
				</div>

				{/* CTA */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-center"
				>
					<p className="text-gray-600 mb-4">
						Ready to experience the Sohani Clean difference?
					</p>
					<motion.a
						href="https://wa.me/+97517845563?text=Hi! I want to order Sohani Clean products."
						target="_blank"
						rel="noopener noreferrer"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						className="inline-flex items-center gap-2 px-8 py-4 bg-green-500 text-white rounded-full font-bold shadow-lg hover:shadow-green-500/30 transition-all"
					>
						<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
							<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
						</svg>
						Order on WhatsApp
					</motion.a>
				</motion.div>
			</div>
		</section>
	);
}
