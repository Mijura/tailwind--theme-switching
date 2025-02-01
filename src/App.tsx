import { useState } from "react"

export default function App() {

	const [isLight, setIsLight] = useState(true)

	const handleThemeSwitch = () => {
		setIsLight(!isLight)
	}


	return <div className="flex flex-col h-[100dvh]" data-theme={isLight ? "light" : "dark"}>

		<div className="h-fit p-4">
			<label className='flex cursor-pointer select-none items-center'>
				<div className="relative">
					<input
						type='checkbox'
						checked={isLight}
						onChange={handleThemeSwitch}
						className='sr-only'
					/>
					<div className='block h-8 w-14 rounded-full border border-[#BFCEFF] bg-primary'></div>
					<div className={`dot bg-secondary absolute ${isLight ? "left-1": "right-1"} top-1 h-6 w-6 rounded-full transition`}></div>
				</div>
				&nbsp; {isLight ? "Light mode": "Dark mode"}
			</label>
		</div>


		<div className="h-full grow p-4 bg-primary text-secondary text-6xl font-bold">Hello world!</div>
	</div>

}
