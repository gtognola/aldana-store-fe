export default function Footer() {
	return <footer className="w-full bg-orange-300 p-8">
		<div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 text-center md:justify-between">
			<img src="https://docs.material-tailwind.com/img/logo-ct-dark.png" alt="logo-ct" className="w-10" />
			<ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
				<li>
					<a
						as="a"
						href="#"
						color="blue-gray"
						className="font-normal transition-colors hover:text-white focus:text-white"
					>
						Inicio
					</a>
				</li>
				<li>
					<a
						as="a"
						href="#"
						color="blue-gray"
						className="font-normal transition-colors hover:text-white focus:text-white"
					>
						Nosotros
					</a>
				</li>
				<li>
					<a
						as="a"
						href="#"
						color="blue-gray"
						className="font-normal transition-colors hover:text-white focus:text-white"
					>
						Contactanos
					</a>
				</li>
			</ul>
		</div>
		<hr className="my-8 border-blue-gray-50" />
		<a color="blue-gray" className="text-center font-normal">
			&copy; 2023 Material Tailwind
		</a>
	</footer>;
}
