"use client";

import { motion } from "framer-motion";

const bubbles = [
	{ size: 20, left: "10%", delay: 0 },
	{ size: 35, left: "20%", delay: 1 },
	{ size: 25, left: "35%", delay: 0.5 },
	{ size: 40, left: "50%", delay: 1.5 },
	{ size: 30, left: "65%", delay: 0.8 },
	{ size: 45, left: "80%", delay: 1.2 },
	{ size: 22, left: "90%", delay: 0.3 },
];

export default function Hero() {
	return (
		<section
			id="home"
			className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero"
		>
			{/* Animated Bubbles */}
			{bubbles.map((bubble, index) => (
				<motion.div
					key={index}
					className="absolute bottom-0 rounded-full bg-white/20"
					style={{
						width: bubble.size,
						height: bubble.size,
						left: bubble.left,
					}}
					animate={{
						y: ["-10vh", "-120vh"],
						opacity: [0, 0.8, 0],
						scale: [0.5, 1, 0.8],
					}}
					transition={{
						duration: 6 + index,
						repeat: Infinity,
						delay: bubble.delay,
						ease: "easeInOut",
					}}
				/>
			))}

			{/* Sparkle Effects */}
			<motion.div
				className="absolute top-1/4 left-1/4 w-4 h-4 bg-yellow-300 rounded-full"
				animate={{
					scale: [0, 1, 0],
					opacity: [0, 1, 0],
				}}
				transition={{
					duration: 2,
					repeat: Infinity,
					delay: 0.5,
				}}
			/>
			<motion.div
				className="absolute top-1/3 right-1/4 w-3 h-3 bg-cyan-300 rounded-full"
				animate={{
					scale: [0, 1, 0],
					opacity: [0, 1, 0],
				}}
				transition={{
					duration: 2,
					repeat: Infinity,
					delay: 1,
				}}
			/>
			<motion.div
				className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-white rounded-full"
				animate={{
					scale: [0, 1, 0],
					opacity: [0, 1, 0],
				}}
				transition={{
					duration: 2,
					repeat: Infinity,
					delay: 1.5,
				}}
			/>

			<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					{/* Text Content */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						className="text-center lg:text-left"
					>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.2 }}
							className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm mb-6"
						>
							<span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
							Eco-Friendly Formula
						</motion.div>

						<motion.h1
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.3 }}
							className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
						>
							Experience the
							<span className="block text-cyan-300">Power of Clean</span>
						</motion.h1>

						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.4 }}
							className="text-lg md:text-xl text-sky-100 mb-8 max-w-lg mx-auto lg:mx-0"
						>
							Premium laundry soaps and detergents that leave your clothes
							fresh, bright, and beautifully clean. Safe for your family and the
							environment.
						</motion.p>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.5 }}
							className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
						>
							<motion.a
								href="#products"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="px-8 py-4 rounded-full bg-white text-sky-600 font-bold text-lg shadow-xl hover:shadow-white/20 transition-all"
							>
								Explore Products
							</motion.a>
							<motion.a
								href="https://wa.me/+97517845563"
								target="_blank"
								rel="noopener noreferrer"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="px-8 py-4 rounded-full bg-green-500 text-white font-bold text-lg shadow-xl hover:shadow-green-500/30 transition-all flex items-center justify-center gap-2"
							>
								<svg
									className="w-6 h-6"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
								</svg>
								Chat on WhatsApp
							</motion.a>
						</motion.div>

						{/* Trust Badges */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.6 }}
							className="flex flex-wrap gap-6 justify-center lg:justify-start mt-10"
						>
							{["10K+ Happy Customers", "100% Eco-Friendly", "Lab Tested"].map(
								(badge, index) => (
									<div
										key={index}
										className="flex items-center gap-2 text-sky-100"
									>
										<svg
											className="w-5 h-5 text-green-400"
											fill="currentColor"
											viewBox="0 0 20 20"
										>
											<path
												fillRule="evenodd"
												d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
												clipRule="evenodd"
											/>
										</svg>
										{badge}
									</div>
								)
							)}
						</motion.div>
					</motion.div>

					{/* Product Image */}
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.3 }}
						className="relative hidden lg:block"
					>
						<motion.div
							animate={{ y: [0, -20, 0] }}
							transition={{
								duration: 4,
								repeat: Infinity,
								ease: "easeInOut",
							}}
							className="relative z-10"
						>
							<div className="w-80 h-80 mx-auto bg-gradient-to-br from-cyan-400 to-sky-500 rounded-3xl shadow-2xl flex items-center justify-center">
								<div className="text-center text-white">
									<div className="text-8xl mb-4">🧴</div>
									<div className="text-2xl font-bold">Sohani Clean</div>
									<div className="text-sm opacity-80">Premium Detergent</div>
								</div>
							</div>
						</motion.div>

						{/* Floating Elements */}
						<motion.div
							animate={{ rotate: 360 }}
							transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
							className="absolute -top-10 -right-10 w-32 h-32 border-4 border-dashed border-white/20 rounded-full"
						/>
						<motion.div
							animate={{ scale: [1, 1.2, 1] }}
							transition={{ duration: 3, repeat: Infinity }}
							className="absolute -bottom-5 -left-5 w-20 h-20 bg-cyan-400/30 rounded-full blur-xl"
						/>
					</motion.div>
				</div>
			</div>

			{/* Wave Bottom */}
			<div className="absolute bottom-0 left-0 right-0">
				<svg
					viewBox="0 0 1440 120"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className="w-full"
				>
					<path
						d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
						fill="white"
					/>
				</svg>
			</div>
		</section>
	);
}
