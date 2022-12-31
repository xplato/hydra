import { useEffect, useState } from "react"
import {
	BoltIcon,
	CogIcon,
	MapPinIcon,
	MoonIcon,
	PhoneArrowDownLeftIcon,
	SunIcon,
} from "@heroicons/react/20/solid"
import { useTheme } from "next-themes"

import {
	Button,
	Checkbox,
	Dropdown,
	SegmentedControl,
	Select,
	Switch,
} from "@xplato/hydra"

const Section = ({ children }: any) => (
	<div className="wfull VStack mb-32">{children}</div>
)

const Row = ({ children }: any) => (
	<div className="wfull HStack align-s gap-6">{children}</div>
)

const Block = ({ children }: any) => <div className="VStack">{children}</div>

const Title = ({ children }: any) => <h1 className="fs-8 mb-4">{children}</h1>

const Text = ({ children }: any) => (
	<p className="m-0 mb-8 opacity-08 lh-1-5">{children}</p>
)

const Caption = ({ children }: any) => (
	<p className="fs--1 opacity-06 m-0 mb-1">{children}</p>
)

const Home = () => {
	const { setTheme } = useTheme()

	const [accent, setAccent] = useState("sky")
	const [shade, setShade] = useState("gray")

	useEffect(() => {
		const html = document.querySelector("html")

		if (html) {
			html.classList.add(accent)
			html.classList.add(`shade-${shade}`)
		}

		return () => {
			if (html) {
				html.classList.remove(accent)
				html.classList.remove(`shade-${shade}`)
			}
		}
	}, [accent, shade])

	const getIndexWeight = (index: number) => {
		return index === 0 ? "50" : `${index}00`
	}

	return (
		<section className="wfull mnh-screen py-40">
			<div className="container">
				<h1 className="mb-16">Hydra Component Library</h1>

				<Section>
					<div className="HStack align-s gap-1">
						<Title>Accent</Title>
						<Caption>({accent})</Caption>
					</div>
					<div className="wfull grid grid-10">
						{[...Array(10).keys()].map(index => (
							<div key={index} className="grid-block">
								<div
									className={`wfull flex-c h-28 bg-accent-${getIndexWeight(
										index
									)}`}
								></div>

								<div className="wfull CVStack">
									<p className="m-0 mt-4 opacity-0.8">
										{getIndexWeight(index)}
									</p>
								</div>
							</div>
						))}
					</div>
				</Section>

				<Section>
					<div className="HStack align-s gap-1">
						<Title>Shade</Title>
						<Caption>({shade})</Caption>
					</div>
					<div className="wfull grid grid-10">
						{[...Array(10).keys()].map(index => (
							<div key={index} className="grid-block">
								<div
									className={`wfull h-28 bg-${getIndexWeight(
										index
									)}`}
								></div>
								<div className="wfull CVStack">
									<p className="m-0 mt-4 opacity-0.8">
										{getIndexWeight(index)}
									</p>
								</div>
							</div>
						))}
					</div>
				</Section>

				<Section>
					<Title>Buttons</Title>

					<Row>
						<Block>
							<Caption>Default</Caption>
							<Button>Default Button</Button>
						</Block>
						<Block>
							<Caption>Colored</Caption>
							<Row>
								<Button color="teal">Teal Button</Button>
								<Button color="slate">Slate Button</Button>
								<Button color="zinc">Zinc Button</Button>
							</Row>
						</Block>
						<Block>
							<Caption>Small</Caption>
							<Button size="sm">Small Button</Button>
						</Block>
						<Block>
							<Caption>Large</Caption>
							<Button size="lg">Large Button</Button>
						</Block>
					</Row>
				</Section>

				<Section>
					<Title>Checkbox</Title>

					<Row>
						<Block>
							<Caption>Default</Caption>
							<Checkbox
								label={checked =>
									checked ? "Checked" : "Not checked"
								}
							/>
						</Block>

						<Block>
							<Caption>On by default</Caption>
							<Checkbox
								label={checked =>
									checked ? "Checked" : "Not checked"
								}
								defaultChecked
							/>
						</Block>

						<Block>
							<Caption>Colored</Caption>
							<Checkbox
								label={checked =>
									checked
										? "Checked, and purple"
										: "Not checked"
								}
								color="purple"
								defaultChecked
							/>
						</Block>
					</Row>
				</Section>

				<Section>
					<Title>Menu and Select</Title>
					<div className="mw-100">
						<Text>
							The <code>Dropdown</code> component, as you see
							below, is a very primitive wrapper around the{" "}
							<code>Menu</code> component. For most uses, you'll
							want to create a custom wrapper around it yourself
							using the <code>useDynamicPanel</code> hook. See
							that file for more information.
						</Text>
					</div>

					<Row>
						<Block>
							<Caption>Dropdown menu (small)</Caption>
							<Dropdown
								actions={[
									{
										label: "Action 1",
									},
									{
										label: "Action 2",
									},
									{
										label: "Action 3",
										submenu: [
											{
												label: "Action 1",
											},
											{
												label: "Action 2",
											},
											{
												label: "Action 3",
												submenu: [
													{
														label: "Action 1",
													},
													{
														label: "Action 2",
													},
													{
														label: "Action 3",
													},
												],
											},
										],
									},
									{
										label: "Action 4",
									},
								]}
								menuProps={{
									size: "sm",
								}}
							/>
						</Block>

						<Block>
							<Caption>Select menu (Colors)</Caption>
							<Select
								triggerChildren={option => (
									<span>{option.label}</span>
								)}
								triggerClassName="hydra-button color-accent"
								onChange={option => setAccent(option.value)}
								defaultSelected={{
									label:
										accent.charAt(0).toUpperCase() +
										accent.slice(1),
									value: accent,
								}}
								options={[
									{ label: "Rose", value: "rose" },
									{ label: "Pink", value: "pink" },
									{ label: "Fuchsia", value: "fuchsia" },
									{ label: "Purple", value: "purple" },
									{ label: "Violet", value: "violet" },
									{ label: "Indigo", value: "indigo" },
									{ label: "Blue", value: "blue" },
									{ label: "Sky", value: "sky" },
									{ label: "Cyan", value: "cyan" },
									{ label: "Teal", value: "teal" },
									{ label: "Emerald", value: "emerald" },
									{ label: "Green", value: "green" },
									{ label: "Lime", value: "lime" },
									{ label: "Yellow", value: "yellow" },
									{ label: "Amber", value: "amber" },
									{ label: "Orange", value: "orange" },
									{ label: "Red", value: "red" },
									{ label: "Slate", value: "slate" },
									{ label: "Gray", value: "gray" },
									{ label: "Zinc", value: "zinc" },
									{ label: "Neutral", value: "neutral" },
									{ label: "Stone", value: "stone" },
								]}
								menuProps={{
									top: 42,
								}}
							/>
						</Block>

						<Block>
							<Caption>Select menu (Shades)</Caption>
							<Select
								triggerChildren={option => (
									<span>{option.label}</span>
								)}
								triggerClassName="hydra-button color-accent"
								onChange={option => setShade(option.value)}
								defaultSelected={{
									label:
										shade.charAt(0).toUpperCase() +
										shade.slice(1),
									value: shade,
								}}
								options={[
									{ label: "Slate", value: "slate" },
									{ label: "Gray", value: "gray" },
									{ label: "Zinc", value: "zinc" },
									{ label: "Neutral", value: "neutral" },
									{ label: "Stone", value: "stone" },
								]}
								menuProps={{
									top: 42,
								}}
							/>
						</Block>
					</Row>
				</Section>

				<Section>
					<Title>Segmented Control</Title>
					<div className="mw-100">
						<Text>
							The hover action is a little unconventional, but I
							think it works nicely. On hover, it is a shallow
							selection: the indicator will follow your mouse, but
							when you leave without making a selection, it will
							revert to its previous state.
						</Text>
					</div>

					<Row>
						<Block>
							<Caption>Default</Caption>
							<SegmentedControl
								segments={[
									{ label: "One" },
									{ label: "Two" },
									{ label: "Three" },
								]}
								onChange={segment => console.log(segment)}
							/>
						</Block>
						<Block>
							<Caption>Default select last</Caption>
							<SegmentedControl
								segments={[
									{ label: "Four" },
									{ label: "Five" },
									{ label: "Six" },
								]}
								defaultSelected={2}
							/>
						</Block>
						<Block>
							<Caption>With icons</Caption>
							<SegmentedControl
								segments={[
									{ label: "Locate", icon: <MapPinIcon /> },
									{
										label: "Call",
										icon: <PhoneArrowDownLeftIcon />,
									},
									{ label: "Settings", icon: <CogIcon /> },
								]}
							/>
						</Block>
						<Block>
							<Caption>Icons only</Caption>
							<SegmentedControl
								mods={["icons-only"]}
								segments={[
									{
										label: "light",
										icon: <SunIcon />,
									},
									{
										label: "dark",
										icon: <MoonIcon />,
									},
									{
										label: "system",
										icon: <BoltIcon />,
									},
								]}
								onChange={segment => {
									console.log(segment)
									setTheme(segment.label)
								}}
							/>
						</Block>
					</Row>
				</Section>

				<Section>
					<Title>Switch</Title>

					<Row>
						<Block>
							<Caption>Default</Caption>
							<Switch label={on => (on ? "On" : "Off")} />
						</Block>

						<Block>
							<Caption>On by default</Caption>
							<Switch
								label={on => (on ? "On" : "Off")}
								defaultOn
							/>
						</Block>

						<Block>
							<Caption>Colored</Caption>
							<Switch
								label={on => (on ? "On, and green" : "Off")}
								defaultOn
								color="green"
							/>
						</Block>
					</Row>
				</Section>
			</div>
		</section>
	)
}

export default Home
